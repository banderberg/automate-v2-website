import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://automateapp.info';
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);

/**
 * Last real content change per blog URL, from each post's frontmatter
 * (`updatedDate`, falling back to `pubDate`). Google only trusts sitemap
 * <lastmod> when it is consistently accurate, so only pages with a recorded
 * edit date get one; the template- and data-driven pages are left without it
 * rather than given a guessed date.
 */
function blogLastmods() {
  const dates = new Map();
  for (const file of readdirSync(BLOG_DIR)) {
    if (!file.endsWith('.md')) continue;
    const frontmatter = readFileSync(new URL(file, BLOG_DIR), 'utf8').match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatter) throw new Error(`Blog post ${file} has no frontmatter`);
    const field = (name) => frontmatter[1].match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, 'm'))?.[1];
    const raw = field('updatedDate') ?? field('pubDate');
    const date = raw ? new Date(raw) : undefined;
    if (!date || Number.isNaN(date.getTime())) throw new Error(`Blog post ${file} has no valid pubDate`);
    dates.set(`${SITE}/blog/${file.replace(/\.md$/, '')}/`, date);
  }
  if (dates.size > 0) {
    const newest = Math.max(...[...dates.values()].map((d) => d.getTime()));
    dates.set(`${SITE}/blog/`, new Date(newest));
  }
  return dates;
}

const lastmods = blogLastmods();

// Hosted on GitHub Pages with the custom domain automateapp.info
// (public/CNAME). Pages are served from the domain root, so there is no
// `base` and internal links are plain root-relative paths.
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // OG card routes are build-time render targets, not pages.
      filter: (page) => !page.includes('/og/'),
      serialize: (item) => {
        const lastmod = lastmods.get(item.url);
        return lastmod ? { ...item, lastmod: lastmod.toISOString() } : item;
      },
    }),
  ],
  compressHTML: true,
  // The blog only has plain formula blocks; .doc styles them with site tokens.
  markdown: { syntaxHighlight: false },
});
