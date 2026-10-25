# AutoMate site design system

Source of truth for the automateapp.info marketing site. Tokens live in `src/styles/global.css`; this file explains them. The July 2026 night-highway direction is retired.

## Direction

Sharp, polished, composed. The site should read as the same product as the app: warm neutral surfaces, AutoMate blue as the only strong colour, and real screenshots doing the selling. Editorial genre, "Workbench" structure: the home page leads with one large product screenshot, then a bench of four annotated screens whose numbered pins match the notes beneath them.

Not: navy and gold, speedometers, stock or AI imagery, SaaS card grids, all-caps eyebrows, italic headings, arrows appended to links.

## Colour

App tokens, reused as-is so site and app match.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--color-paper` | `#f5f4f1` | `#0e0e0c` | Page background |
| `--color-card` | `#fefdfb` | `#1a1917` | Raised surfaces, footer, tables |
| `--color-rule` | `#e2e0db` | `#2a2926` | Hairlines |
| `--color-ink` | `#1c1b18` | `#f5f4f1` | Text |
| `--color-ink-2` | `#5c5a55` | `#c5c2bc` | Secondary text |
| `--color-muted` | `#706c67` | `#a19d96` | Meta text (AA on paper) |
| `--color-brand` | `#4272c4` | `#4272c4` | Primary button fill |
| `--color-link` | `#3560a8` | `#8db7e6` | Links and focus ring. Deeper than brand because `#4272c4` small text on paper is ~4.3:1 |
| `--color-tint` / `--color-on-tint` | `#dbe6f5` / `#1e3554` | swapped | AutoMate column, "imports your history" chips |
| `--color-fuel` / `--color-service` / `--color-expense` | `#1a9a8f` / `#e8772b` / `#2ead76` | same | Small marks only, never text |

Dark mode follows `prefers-color-scheme`. Every colour in a component goes through a token.

## Type

- Display: Archivo 800, tight tracking, roman only.
- Body: Public Sans 400/600.
- Self-hosted via Fontsource (latin subsets); the two critical weights are preloaded. No Google Fonts request.
- Scale 1.25 from 16px; display headline is a clamp up to ~74px.

## Layout

- 16px minimum gutter (`--gutter` clamps 1rem to 2.5rem), page max 74rem, 65ch measure.
- Mobile first. Must hold at 320, 375, 414, 768 and 1280 with no horizontal scroll (`overflow-x: clip` on html and body).
- Grid tracks that hold images or long text use `minmax(0, 1fr)`.
- Clickable text never wraps to two lines (buttons, nav, footer links).

## Components

- `Shot`: real app screenshot (status bar cropped) in a rounded mask with a hairline and soft shadow. Optional numbered pins, aria-hidden, explained by a visible list.
- `PlayLink`: the only install CTA. Google Play only; never an App Store badge.
- `Faq`: native `<details>` plus FAQPage JSON-LD.
- `Breadcrumbs`: visible trail plus BreadcrumbList JSON-LD (built in `BaseLayout`).
- Comparison tables collapse to labelled blocks under 40rem.

## Content rules

Facts live in `src/lib/facts.ts` and nowhere else. Competitor facts carry the date they were checked; quotes are verbatim and attributed "Play Store review, <date>". Every comparison says what the other app does better. Privacy copy says "anonymous crash reports and usage statistics", never "no data collected".

## Open Graph images

`src/pages/og/[slug].astro` renders a 1200x630 card per page. `npm run og` builds the site and screenshots each card with headless Chrome into `public/og/<slug>.png`. Re-run it when a page title changes.
