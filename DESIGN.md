# AutoMate Website — Design System

<!-- impeccable:design-doc -->

## Direction Contract

**THESIS:** The car cost you don't know is the hook — the page opens on a toll ticket becoming a receipt, refusing both the SaaS hero-metric dashboard-screenshot template and the navy/gold "generic auto app" cliché.

**OWN-WORLD:** A night highway at the top of the page — near-black asphalt ground, headlight-lit — carrying AutoMate's own accent colors (primary blue, fuel teal, service orange, expense green) as the only lit signal, not literal federal-highway green. Illuminated advisory-sign panels carry features. Mile-marker ticks carry metrics. A toll-ticket-in / receipt-out pairing is the hero mechanism. The page then drives out of the night into AutoMate's real product world — warm-neutral daylight surfaces — for the body of the page, and returns to the dark register at the footer.

**STORY:** A switcher or privacy-conscious visitor lands mid-thought — "you're already paying this, you just don't know the number" — sees a direct, named comparison against the trackers they're frustrated with, and taps through to Google Play. Nothing on the page is proof the visitor can't verify.

**FIRST VIEWPORT:** Full-bleed dark hero. Left: a toll ticket stamped with an entry time and mile 000. Right: a receipt resolving from a redacted cost into the real mechanism (cost/mile). Headline above, single Play Store CTA below. No phone-mockup screenshot doing the hero's job for it.

**FORM:** Mile-marker / toll-signage direction (candidate 6 of 7 grounded directions drawn from the app's own record-keeping culture — service booklets, ledgers, glovebox archives, oil-change stickers, fuel receipts, instrument-cluster numerals, highway signage), chosen over six external challengers (ASCII scene, seven-segment clock, VHS wall, Kraftwerk traffic-grid, alphabet storm, deep dive) on product clarity — a toll ticket paid for by mile is the same shape as "cost per mile," which no challenger matched. Staging draws on an evidenced-absence hero: the redacted cost is the empty center the surrounding proof rings.

---

## 1. Color

### Strategy

**Committed** at the hero (one dark scene, lit accents carry the mechanism) → **Restrained** through the body (AutoMate's real warm-neutral system, one accent used sparingly) → **Committed** again at the footer (return to night). Color strategy shifts with the page's own night→day→night arc; it is not uniform top to bottom, and that shift is deliberate pacing, not inconsistency.

Every token below is the app's own DESIGN.md system (`automate-v2/DESIGN.md`) — this site is a sibling of the app, not a new brand.

### Hero / Footer (night-highway register)

| Token | Value | Usage |
|-------|-------|-------|
| `road` | `#0B0C0E` | Hero and footer background — near-black, cooler than the app's warm dark surface, reads as asphalt/night sky rather than app chrome |
| `road-line` | `#3A3D42` | Lane-line dividers, card borders on dark ground |
| `sign-panel` | `#15171A` | Illuminated sign-panel background (feature cards in the dark register) |
| `sign-glow` | primary/fuel/service/expense at 100% | Panel "illumination" — each feature sign lights in its own semantic color, never white-on-everything |
| `ticket-paper` | `#F5F4F1` (app `surface`) | The ticket/receipt elements are literally paper — they stay light even inside the dark hero, the one deliberate light note in the scene |

### Body (day register — app's real tokens, verbatim)

| Token | Light | Usage |
|-------|-------|-------|
| `surface` | `#F5F4F1` | Section background once the page "arrives" |
| `card` | `#FEFDFB` | Feature detail cards, FAQ cards, comparison table |
| `divider` | `#E2E0DB` | Section borders |
| `ink` | `#1C1B18` | Primary text |
| `ink-secondary` | `#5C5A55` | Secondary text |
| `ink-muted` | `#706C67` | Captions, labels |

### Accent (both registers, identical hex to the app)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#4272C4` | Primary CTA, links, the "AutoMate" mark |
| `fuel` | `#1A9A8F` | Fuel-logging sign panel + icon |
| `service` | `#E8772B` | Service-tracking sign panel + icon |
| `expense` | `#2EAD76` | Expense-logging sign panel + icon |
| `destructive` | `#E05252` | Reserved — not expected on this site (no error states), keep for FAQ/legal edge cases only |
| `primary-dark` | `#1E3554` | Small/bold `primary`-family text sitting directly on a `primary-light`-tinted background (e.g. the comparison table's highlighted column header) |

No new brand colors are introduced. The night-highway scene is achieved with a cooler near-black ground and lit accents, never by inventing a new palette.

### Contrast

Ticket/receipt paper stays light-on-dark by design (`ink` on `ticket-paper`, verified ≥4.5:1). Sign-panel copy uses white or near-white text on the saturated accent, never the accent color as text-on-dark (fails contrast at small sizes). Body register follows the app's own verified AA pairings.

Two traps found and fixed during the first build, worth carrying forward as rules:

- **`primary` text directly on `primary-light`-tinted backgrounds measures ~4.0:1 — fails AA at small/bold sizes.** Use `primary-dark` for that specific pairing (verified ~10.5:1), not `primary`.
- **Never dim small button/label text with `opacity` on a saturated accent background.** White at 85% opacity on `primary` (`#4272C4`) measures ~3.9:1; full-opacity white is ~4.7:1 — passing, but with little headroom. Prefer full-opacity text and create hierarchy with size/weight instead of opacity when the background is a saturated accent, not a neutral.

---

## 2. Typography

### Faces

- **Display / headlines / sign panels / mile-marker numerals:** **Archivo** (Expanded and Black weights for hero and sign-panel headings, Black for the redacted-cost reveal). Archivo's wide, geometric-grotesk construction is the digital-era descendant of DOT/highway signage type — built for legibility at a glance, at speed and at a distance. That is the reason it's here; it is not a mood pick.
- **Body / UI / captions:** **Public Sans**. Designed for federal digital services where plain legibility is the whole brief — the humanist counterpart to Archivo's geometric display voice, and a deliberate contrast pair rather than two similar grotesks.
- Both are open, self-hosted (no runtime font-service call — keeps the SEO/perf budget intact).

### Scale

| Role | Size (clamp) | Weight | Face |
|------|------|--------|------|
| Hero headline | `clamp(2.25rem, 5vw + 1rem, 4.5rem)` | 800 (Archivo Black) | Archivo |
| Redacted → resolved cost | `clamp(2rem, 4vw + 1rem, 3.5rem)` | 800, tabular-nums | Archivo |
| Section heading | `clamp(1.75rem, 2.5vw + 1rem, 2.75rem)` | 700 (Archivo Expanded) | Archivo |
| Sign-panel label | 13px, tracked uppercase | 700 | Archivo |
| Mile-marker value | 28px, tabular-nums | 800 | Archivo |
| Body | 16-18px | 400-500 | Public Sans |
| Caption / meta | 13-14px | 400 | Public Sans |

`text-wrap: balance` on all headings; `text-wrap: pretty` on body/FAQ copy. Hero headline never exceeds the 6rem ceiling; letter-spacing never tighter than -0.04em on display sizes.

---

## 3. Signature Components

### Hero: Ticket → Receipt

Two paper-colored cards on the dark ground, connected by a single lane-line rule. Left card: entry ticket — stamped time, "MILE 000." Right card: receipt — a redacted cost (`????`, monospaced dashes) that resolves into "cost/mile" on scroll-into-view or after a timed reveal. Reduced motion: both states render statically with the resolved value shown, no timed reveal. This pairing is the thesis; it never degrades to a phone-mockup screenshot.

### Sign Panel (feature card, dark register)

Rounded-rectangle panel, `sign-panel` background, 2px border in the feature's own accent at 40% opacity, accent-colored icon + label lit at full opacity like an illuminated road sign. Panels sit in a horizontal strip on desktop, stack on mobile. No card shadows in this register — illumination reads through color, not elevation.

### Mile Marker (metric)

A single vertical tick mark + number, echoing a highway mile-marker post. Used for the 3-stat row (total spent, cost/mile, MPG trend) and reused sparingly wherever a real number should read as "distance traveled," not as a dashboard KPI tile. Never more than 3-4 per row — this is a signpost, not a dashboard.

### Comparison Table

Plain table, `card` background, `divider` rules. Rows named directly: AutoMate, Fuelio, Drivvo, Simply Auto, aCar, CARFAX Car Care. Check/x marks styled as small sign-post ticks, not generic checkmarks. Every claim in this table must trace to `docs/GROWTH-STRATEGY.md`'s real research — no invented rows.

### FAQ

Accordion, `card` background, `divider-subtle` between rows. Marked up as `FAQPage` structured data.

---

## 4. Motion

- Hero: ticket and receipt settle in with a short, exponential ease-out (no bounce/spring); the redacted cost resolves once, on first scroll-into-view, never re-triggering.
- Sign panels: illuminate in a quick left-to-right stagger on first view (each panel's own accent, ~60ms offset) — a lit-signage sequence, not a uniform fade-up applied to every section.
- Mile markers: numerals count up once on first view using `tabular-nums`, capped at 800ms.
- `prefers-reduced-motion: reduce`: every animated state above renders in its resolved end-state immediately. No section's content is ever gated on a transition firing — the reveal enhances an already-visible default.
- No decorative motion beyond the above. Motion marks state (ticket resolves, sign lights, count reaches its value), same rule the app itself follows.

---

## 5. Layout & Rhythm

4px base unit (inherited from the app). Hero gets the most vertical room of any section, matching the app's own "hero metric gets the most breathing room" rule. Section order paces night → day → night: Hero (dark) → Sign Panels (dark) → Mile-Marker Metrics (transition to light) → Feature Detail / Privacy (light) → Comparison (light) → FAQ (light) → Footer CTA (dark).

**The night→day transition is a dedicated horizon strip, not a full-section gradient.** The first build put the gradient across the whole Mile-Marker section with `ink`-colored heading text on top — the heading sat on the still-dark top half of the gradient and was unreadable. Fixed by isolating the gradient into a short (`clamp(4rem, 12vw, 7rem)`) horizon div at the section's top edge; the section's actual content sits on a solid `surface` background below it. Any future night→day (or day→night) transition on this site should use the same pattern: a slim decorative gradient strip, never a gradient behind readable text.

---

## 6. Accessibility

WCAG AA, inherited from the app. Dark-register text is verified against `road`/`sign-panel`, not assumed safe because "dark mode usually is." All illustrative ticket/receipt numbers are cosmetic hero content, not real user data — no user data exists yet to display, and none is fabricated as if real (see PRODUCT.md, Evidence on Hand).
