// GitHub Pages project sites serve from a subpath (e.g. /automate-v2-website/),
// set via astro.config.mjs `base`. Astro does not rewrite hand-authored
// root-absolute hrefs/srcs for that subpath, so every internal link or public/
// asset reference in .astro files goes through this helper instead of a raw
// leading-slash string. Markdown content (src/content/blog/*.md) can't call
// this helper, so those files use path-relative links instead.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip any trailing slash
  const clean = path.startsWith('/') ? path : `/${path}`;
  return base + clean;
}
