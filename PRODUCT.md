# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two overlapping audiences arriving mostly from Google search, not direct navigation:

1. **Switchers** — current users of Fuelio, Drivvo, Simply Auto, aCar, or CARFAX Car Care who are frustrated (ads, broken sync, forced accounts, dated UI) and are actively searching for an alternative.
2. **First-time trackers** — new or cost-conscious car owners searching things like "car expense tracker," "how much does my car cost per mile," or "fuel log app" who don't yet use any tracker.

Both groups are casual car owners, not fleet managers or spreadsheet people. They land on the site to answer one question fast — "is this the app I want?" — and either tap through to install or leave. The site should get out of their way as efficiently as the app does.

## Product Purpose

This is a marketing website for AutoMate, a car expense tracking app (see [[automate-v2 app]] for the product itself). Its job is to rank in Google search for car-expense/fuel-tracker-class queries and convert that traffic into Play Store installs. Success is organic ranking + install-button clicks, not the site being a destination in its own right.

## Positioning

Same wedge as the app: **"Beautiful. Private. Smart."** — directly against competitors' weak points (ads, forced accounts, broken cloud sync, dated UI). No neighboring tracker can truthfully copy: fully on-device data with no server/cloud dependency (the one exception is a VIN lookup against the free NHTSA API), no accounts, no ads, no subscription — one-time $9.99 unlock for premium features. An insight engine that surfaces patterns ("your fuel economy dropped 14% — check tire pressure"), not just a ledger.

## Operating Context

Solo-developer indie app. **Live on Android/Google Play now** (package `com.arctosbuilt.automate`); **iOS not shipped yet**. The site must not claim or imply App Store availability — one install CTA (Play Store), not a two-badge row. Supported app locales: EN, ES, PT, DE, RU, TR, HI (site copy can stay English-only unless the user asks to localize later).

## Capabilities and Constraints

Real, current feature set (source: `docs/PLAY-STORE-LISTING.md` in the app repo) available to describe on the site:

- Fuel fill-up logging with smart defaults (last station/price/odometer pre-filled), partial-fill-aware efficiency math, gas/diesel/EV (kWh) support
- Service & maintenance logging, 23 pre-loaded service types + custom
- Expense logging (registration, insurance, parking, tolls, car washes, etc.)
- Smart reminders by distance and/or time, with progress bars
- Dashboard: total spent, cost/mile, fuel-efficiency trend, period filter, donut spending breakdown
- Multi-vehicle support, instant switching
- CSV/PDF export, filterable by vehicle and date range
- Local backup/restore to file, no account needed
- VIN decode (typed or camera-scanned) via the free NHTSA database
- Import from Fuelio and Drivvo
- Fully offline — no cloud dependency
- No ads, no forced account, ever

Monetization: free tier = 1 vehicle, no PDF export/import/vehicle documents. Premium = one-time $9.99 purchase, unlocks unlimited vehicles + PDF export + data import + vehicle documents. Not a subscription.

Undecided: whether the site later gets a blog/calculator tool (see Evidence on Hand) — out of scope for the first build unless the user asks for it explicitly.

## Brand Commitments

- Name: **AutoMate**. Do not rename or add a suffix/tagline that isn't already established.
- Existing short description (usable near-verbatim): "Track fuel, service & expenses. Private, no accounts, fully offline."
- Brand personality (from the app's own PRODUCT.md): three blended archetypes — the sharp friend (anticipates, never makes you repeat yourself), the no-nonsense accountant (clear, precise, trustworthy with numbers), the dapper sophisticate (every surface considered, looks like it costs more than it does). Three-word personality: **sharp, polished, composed.**
- Voice: confident, precise, warm but not chatty. Short declarative copy over paragraphs.
- App icon: teal car-swoosh mark (`assets/images/icon.png` in the app repo) on black — reusable as the site's mark/favicon source.
- The app's own DESIGN.md (warm neutral surfaces, restrained primary blue `#4272C4`, semantic event colors: fuel teal `#1A9A8F`, service orange `#E8772B`, expense green `#2EAD76`) is the visual system this site must feel like a sibling of, translated into a marketing register — not copy-pasted as product UI chrome.
- Explicit anti-reference (from the app's own docs): no navy+gold/speedometer/car-icon "generic auto tracker" aesthetic. AutoMate is a financial tool that happens to track cars, not a car app that happens to show money.

## Evidence on Hand

- Full EN + ES app-store copy: `docs/PLAY-STORE-LISTING.md` in the automate-v2 repo — real, shippable copy to draw from.
- Competitive research (real, from the app's own growth doc, `docs/GROWTH-STRATEGY.md`): Fuelio (6.1M downloads — crashes on charts, broken Drive sync, dated UI), Drivvo (2M — invasive ads, price hikes $6→$25/yr, broken sync), Simply Auto (500K+ — steep learning curve, dead support, broken cloud since 2025), CARFAX Car Care (50M — US-only, no manual expense depth, dealer-dependent), aCar (dead — forced account migration destroyed trust). Usable as an honest comparison section.
- Play Store URL: `https://play.google.com/store/apps/details?id=com.arctosbuilt.automate`
- No domain purchased yet — site is built domain-agnostic; canonical URLs use a placeholder that must be swapped before launch.
- **Do not fabricate:** no testimonials, press quotes, download counts, user counts, or star ratings exist yet. The site must not invent any of these. If social proof is wanted before it's earned, use the honest competitive-comparison angle instead of fake proof.

## Product Principles

1. Every claim on the site is true today — Android-only, no invented ratings/testimonials/press/user counts.
2. SEO is the primary success metric. Structure, metadata, and content are load-bearing, not decorative afterthoughts.
3. The site reads as the same company that made the app: warm neutral palette, restrained primary blue, considered typography — carried into a bolder marketing register, not muted into product-UI restraint.
4. Speak directly to the switcher and the privacy-conscious buyer: no ads, no accounts, one-time price, data stays on-device.
5. Confidence without over-claiming maturity — this is a young indie app, not a funded startup with a track record to lean on.

## Accessibility & Inclusion

WCAG AA (carried from the app's own standard). No additional site-specific requirement established.
