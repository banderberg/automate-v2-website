// Renders every /og/<slug>/ card to public/og/<slug>.png with headless Chrome.
// Usage: npm run og   (builds the site, serves it, screenshots each card).
// Needs Google Chrome or Chromium; set CHROME_PATH if it is not on PATH.
import { spawn, execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const chrome =
  process.env.CHROME_PATH ||
  ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'].find((bin) => {
    try {
      execFileSync('which', [bin], { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  });
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.');

const ogDir = join(root, 'dist', 'og');
if (!existsSync(ogDir)) throw new Error('Run `npm run build` first: dist/og is missing.');
const slugs = readdirSync(ogDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const outDir = join(root, 'public', 'og');
mkdirSync(outDir, { recursive: true });

const port = 4399;
const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { cwd: root, stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 4000));

try {
  for (const slug of slugs) {
    const out = join(outDir, `${slug}.png`);
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1200,630',
      '--virtual-time-budget=3000',
      `--screenshot=${out}`,
      `http://localhost:${port}/og/${slug}/`,
    ], { stdio: 'ignore' });
    console.log(`og/${slug}.png`);
  }
} finally {
  server.kill();
}
