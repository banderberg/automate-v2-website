import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages as a project site: https://banderberg.github.io/automate-v2-website/
// If you ever move to a custom domain, set `site` to that domain, drop
// `base` entirely, and add a `public/CNAME` file — see README note in
// .github/workflows/deploy.yml.
export default defineConfig({
  site: 'https://banderberg.github.io',
  base: '/automate-v2-website',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og'),
    }),
  ],
  compressHTML: true,
});
