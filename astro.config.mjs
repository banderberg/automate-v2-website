import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages with the custom domain automateapp.info
// (public/CNAME). Pages are served from the domain root, so there is no
// `base` and internal links are plain root-relative paths.
export default defineConfig({
  site: 'https://automateapp.info',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // OG card routes are build-time render targets, not pages.
      filter: (page) => !page.includes('/og/'),
    }),
  ],
  compressHTML: true,
  // The blog only has plain formula blocks; .doc styles them with site tokens.
  markdown: { syntaxHighlight: false },
});
