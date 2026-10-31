// Every product and competitor fact on the site lives here, so a claim can be
// checked in one place.
//
// AutoMate facts: the app repo (banderberg/automate-v2, master @ v1.4.0):
// docs/PLAY-STORE-LISTING.md, src/constants/importFormats.ts,
// src/constants/monetization.ts (MONETIZATION_ENABLED = false), the English
// locale strings, and docs/PRIVACY-POLICY.md.
//
// Competitor facts: the app repo's research branches, data pulled
// 2026-10-24 — research/competitor-review-mining,
// research/mycars-autofolio-profile, research/market-trends-2026. Review
// quotes are verbatim from those docs. Nothing here is invented; anything the
// research did not establish is left out rather than guessed.

export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.arctosbuilt.automate';

export const SITE_NAME = 'AutoMate';

/** Date the competitor research was pulled. Shown on every comparison. */
export const RESEARCH_DATE = '2026-10-24';
export const RESEARCH_DATE_LABEL = '24 October 2026';

export const CONTACT_EMAIL = 'arctos.built@gmail.com';

/** Canonical privacy policy URL: this site's own page. The Play listing and the app's Settings > About should point here. */
export const APP_PRIVACY_URL = 'https://automateapp.info/privacy/';

export const PRICING_LINE = 'Free. No ads, no account, no subscription.';

export const LANGUAGES = [
  'English',
  'Spanish',
  'Portuguese',
  'German',
  'Russian',
  'Turkish',
  'Hindi',
];

export type Category = 'fuel' | 'service' | 'expense' | 'neutral';

export interface Capability {
  name: string;
  detail: string;
  category: Category;
}

/** What the app does today. Source: PLAY-STORE-LISTING.md + locale strings. */
export const capabilities: Capability[] = [
  {
    name: 'Fuel and charging',
    detail:
      'Gas, diesel or electric (kWh). Volume, price, discounts, station and notes. Partial fills are left out of the efficiency maths, which needs full-to-full readings.',
    category: 'fuel',
  },
  {
    name: 'Service',
    detail:
      '23 built-in service types plus your own. Log several on one visit: oil, tires, brakes, filters.',
    category: 'service',
  },
  {
    name: 'Expenses',
    detail:
      'Insurance, registration, parking, tolls, car washes and anything else the car costs you.',
    category: 'expense',
  },
  {
    name: 'Mileage updates',
    detail: 'Record an odometer reading without a fill-up, so reminders stay accurate.',
    category: 'neutral',
  },
  {
    name: 'Reminders',
    detail:
      'By distance, by date, or both. AutoMate estimates when you will hit a distance from your own driving and sends a local notification.',
    category: 'neutral',
  },
  {
    name: 'Insights',
    detail:
      'Flags a drop in fuel economy, a fill-up well above your usual, a cheaper station you already use, a service that is due by your own history, and month-to-month cost swings.',
    category: 'neutral',
  },
  {
    name: 'Dashboard',
    detail:
      'Total spent, cost per mile, fuel economy trend, spending over time and a projected annual cost. Filter from one month to all time.',
    category: 'neutral',
  },
  {
    name: 'Documents',
    detail: 'Keep insurance, registration and other papers with their expiry dates.',
    category: 'neutral',
  },
  {
    name: 'Vehicles',
    detail: 'As many as you own. Each keeps its own fuel type, units and history.',
    category: 'neutral',
  },
  {
    name: 'VIN lookup',
    detail:
      'Type the VIN or scan its barcode on the door jamb to fill in year, make and model from the free NHTSA database. Optional.',
    category: 'neutral',
  },
  {
    name: 'Export',
    detail: 'CSV or PDF, filtered by vehicle and date range.',
    category: 'neutral',
  },
  {
    name: 'Backup and restore',
    detail: 'Save a backup file wherever you like and restore it on the same or a new phone.',
    category: 'neutral',
  },
  {
    name: 'Import',
    detail: 'Bring your history from Fuelio or Drivvo CSV exports.',
    category: 'neutral',
  },
  {
    name: 'Languages and themes',
    detail: `${LANGUAGES.join(', ')}. Light, dark, or follow the system.`,
    category: 'neutral',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: FaqItem[] = [
  {
    q: 'Is AutoMate free?',
    a: 'Yes. Every feature is free today, with no ads and no subscription. A one-time unlock for some power features is planned for the future. It will never be a subscription.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. There is no sign-up and no login. You open the app and start logging.',
  },
  {
    q: 'Where are my records stored?',
    a: 'On your phone, in a local database. AutoMate has no server or cloud copy of your records. They leave the phone when you export or back them up yourself, or when Android’s own backup copies them to your Google account (see the privacy policy).',
  },
  {
    q: 'Does anything leave my phone?',
    a: 'A little, and none of it is your records. If you use VIN lookup, the VIN is sent to the free NHTSA database. The app sends pseudonymous crash reports and usage statistics; you can turn the usage statistics off in Settings. Once per install (retried later if it fails) it also sends the app version, device brand and model, OS, language, country or region setting and request time to the developer. Firebase services (Remote Config and App Check) also contact Google servers.',
  },
  {
    q: 'Can I bring my data from Fuelio or Drivvo?',
    a: 'Yes. Export a CSV from Fuelio or Drivvo, then open Settings, Import Data in AutoMate. You see a preview of the entries before anything is saved.',
  },
  {
    q: 'Is there an iPhone version?',
    a: 'No. AutoMate is an Android app, available on Google Play.',
  },
  {
    q: 'Does it work offline?',
    a: 'Yes. Logging, the dashboard, reminders, export and backup all work without a connection. Only VIN lookup needs the internet.',
  },
  {
    q: 'What happens to my data if I change phones?',
    a: 'Make a backup in Settings, move the file to the new phone (through your own cloud drive, email or a cable), install AutoMate and restore it. AutoMate has no cloud backup of its own. If Android backup is on, Android may also restore your data when you install AutoMate on the new phone, but don’t rely on it: it is skipped when the app’s data is over 25 MB.',
  },
];

// ---------------------------------------------------------------------------
// Competitors
// ---------------------------------------------------------------------------

export type SwitchPath =
  | { kind: 'importer'; guide: string }
  | { kind: 'coming' }
  | { kind: 'manual' };

export interface CompareRow {
  label: string;
  automate: string;
  them: string;
}

export interface ReviewQuote {
  text: string;
  stars: number;
  date: string; // YYYY-MM-DD
}

export interface Competitor {
  slug: string;
  name: string;
  /** Google Play package id, for the listing link. */
  pkg: string;
  /** One line used on the alternatives hub and the home switcher list. */
  oneLine: string;
  /** Snapshot from the Play listing on RESEARCH_DATE. */
  snapshot: string;
  whoFor: string;
  rows: CompareRow[];
  theyAreBetter: string[];
  weAreBetter: string[];
  quote?: ReviewQuote;
  switching: SwitchPath;
  switchingNote: string;
  meta: { title: string; description: string };
}

const automateBackup = 'A backup file you save and restore yourself. No cloud sync.';

export const competitors: Competitor[] = [
  {
    slug: 'fuelio',
    name: 'Fuelio',
    pkg: 'com.kajda.fuelio',
    oneLine: 'The category giant. Now free, with no ads. AutoMate imports its CSV.',
    snapshot:
      '4.22 stars from about 136,000 ratings, 5M+ installs, last updated 19 October 2026, Google Play Editors’ Choice.',
    whoFor:
      'You use Fuelio and it mostly works, but you want reminders that track distance, insights that point at a specific change, and a logbook you can read at a glance.',
    rows: [
      {
        label: 'Price',
        automate: 'Free. Nothing to unlock today.',
        them: 'Free. The listing says Pro features are now free; in-app purchases from $4.99 to $15.99 are still listed.',
      },
      { label: 'Ads', automate: 'None', them: 'None, per its listing' },
      {
        label: 'Backup',
        automate: automateBackup,
        them: 'Automatic Dropbox and Google Drive backup, free',
      },
      { label: 'Home-screen widget', automate: 'No', them: 'Yes, for fill-ups' },
      {
        label: 'Fuel prices from other drivers',
        automate: 'No',
        them: 'Yes, crowd-sourced. Reviewers say the data is often missing or wrong.',
      },
      {
        label: 'Odometer reading without a fill-up',
        automate: 'Yes',
        them: 'Asked for by users in 2026 reviews',
      },
      {
        label: 'Insights',
        automate: 'Economy drops, pricey fill-ups, cheaper stations you use, services due, month-to-month swings',
        them: 'Statistics, charts and custom PDF reports',
      },
      { label: 'Trip log', automate: 'No', them: 'Yes' },
      { label: 'Electric vehicles', automate: 'Yes (kWh)', them: 'Yes' },
      { label: 'Phones', automate: 'Android', them: 'Android and iPhone' },
    ],
    theyAreBetter: [
      'Automatic, free backup to Dropbox or Google Drive. AutoMate only makes a backup file when you ask.',
      'A home-screen widget for quick fill-ups, a trip log and crowd-sourced fuel prices. AutoMate has none of the three.',
      'Android Auto support and an iPhone app.',
      'Scale and standing: 5M+ installs and an Editors’ Choice badge on Google Play.',
    ],
    weAreBetter: [
      'Odometer updates on their own. Fuelio users have asked for this in 2026 reviews.',
      'Reminders by distance, with an estimate of when you will get there based on how you drive.',
      'Insights that name the change: an efficiency drop, a fill-up above your usual price, a cheaper station you have used before.',
      'Vehicle documents with expiry dates, and VIN lookup by camera.',
      'It reads Fuelio’s CSV export directly, so your history comes with you.',
    ],
    quote: {
      text: 'there is no ability to just add an update to the odometer independent of the fuel up.',
      stars: 2,
      date: '2026-04-23',
    },
    switching: { kind: 'importer', guide: '/switch-from-fuelio/' },
    switchingNote:
      'AutoMate imports Fuelio’s CSV export: fill-ups, plus costs sorted into service and expenses. Import one vehicle at a time.',
    meta: {
      title: 'Fuelio alternative: AutoMate vs Fuelio (2026)',
      description:
        'An honest Fuelio vs AutoMate comparison: what Fuelio still does better, where AutoMate wins, and how to import your Fuelio history. Apps like Fuelio, checked October 2026.',
    },
  },
  {
    slug: 'drivvo',
    name: 'Drivvo',
    pkg: 'br.com.ctncardoso.ctncar',
    oneLine: 'Deep features, but ads and a steep subscription. AutoMate imports its CSV.',
    snapshot:
      '4.35 stars from about 116,000 ratings, 5M+ installs, last updated 20 October 2026.',
    whoFor:
      'You have years of history in Drivvo, but the ads or the renewal price pushed you to look around.',
    rows: [
      {
        label: 'Price',
        automate: 'Free. No subscription.',
        them: 'Free tier with ads, up to 2 vehicles. Premium is a subscription; reviewers report renewals rising from $6 to $24.90 to $49.90 a year in 2025–26.',
      },
      { label: 'Ads', automate: 'None', them: 'On the free tier' },
      { label: 'Spreadsheet export', automate: 'CSV and PDF, free', them: 'Paid' },
      { label: 'Dark theme', automate: 'Free', them: 'Paid' },
      { label: 'Photos on entries', automate: 'Free', them: 'Receipt attachments are paid' },
      {
        label: 'Fuel prices nearby',
        automate: 'No',
        them: '“Where to Refuel”, with community prices at 600K+ stations',
      },
      { label: 'Income tracking', automate: 'No', them: 'Yes' },
      { label: 'Trip tracker', automate: 'No', them: 'Added in 2026' },
      {
        label: 'Import from other apps',
        automate: 'Fuelio and Drivvo',
        them: 'Restores from 8 apps',
      },
      { label: 'Phones', automate: 'Android', them: 'Android and iPhone' },
    ],
    theyAreBetter: [
      'More features overall: an income module, a trip tracker and a fuel price map.',
      'It restores from more apps than AutoMate imports from.',
      'An iPhone app, and a developer that reviewers describe as quick to respond.',
      'Long-term trust. One 2026 reviewer has used it for more than nine years.',
    ],
    weAreBetter: [
      'No ads anywhere, and no subscription.',
      'CSV and PDF export, dark mode and photos on entries are free.',
      'No account needed to see your own records.',
      'It imports Drivvo’s CSV export, so you keep your history.',
    ],
    quote: { text: 'Going from $6 per year, to $25.', stars: 2, date: '2025-11-14' },
    switching: { kind: 'importer', guide: '/switch-from-drivvo/' },
    switchingNote:
      'AutoMate imports Drivvo’s CSV export: refuelling, service and expense sections. Drivvo lists spreadsheet export as a paid feature, so you may need an active plan to make the file.',
    meta: {
      title: 'Drivvo alternative: AutoMate vs Drivvo (2026)',
      description:
        'Drivvo vs AutoMate, compared honestly: Drivvo’s extra features, its ads and renewal prices, and how to import your Drivvo CSV into a free app. Apps like Drivvo, checked October 2026.',
    },
  },
  {
    slug: 'my-cars',
    name: 'My Cars',
    pkg: 'com.aguirre.android.mycar.activity',
    oneLine: 'The deepest feature set, now behind subscriptions after a 2026 redesign.',
    snapshot:
      '4.2 stars from 35,580 ratings, 1,180,856 installs, version 3.11.2 updated 10 September 2026. Android only.',
    whoFor:
      'You liked My Cars before the 2026 redesign and the move to subscriptions, and want a simpler, free logbook.',
    rows: [
      {
        label: 'Price',
        automate: 'Free. No subscription.',
        them: 'Free tier, unlimited vehicles. PRO $0.99/month or $8.99/year; PRO+ $1.99/month or $14.99/year.',
      },
      { label: 'Ads', automate: 'None', them: 'None' },
      { label: 'Account', automate: 'Not needed', them: 'Not needed, per the developer' },
      { label: 'CSV and PDF export', automate: 'Free', them: 'PRO' },
      {
        label: 'Cloud backup',
        automate: automateBackup,
        them: 'Local backup free; Dropbox in PRO; Google Drive and OneDrive in PRO+',
      },
      { label: 'Receipt scanning', automate: 'No', them: 'PRO (5 a month) and PRO+' },
      { label: 'Budgets', automate: 'No', them: 'PRO' },
      {
        label: 'Total cost of ownership',
        automate: 'Projected annual cost',
        them: 'With depreciation, PRO+',
      },
      { label: 'Income and reimbursements', automate: 'No', them: 'Yes' },
      { label: 'Widgets', automate: 'No', them: '29' },
      { label: 'Insights', automate: 'Free', them: 'PRO+' },
      { label: 'VIN scan and lookup', automate: 'Yes', them: 'No' },
      { label: 'Import from Fuelio or Drivvo', automate: 'Yes', them: 'Not advertised' },
    ],
    theyAreBetter: [
      'The widest feature set in the category: receipt scanning, budgets, depreciation, income tracking and 29 widgets.',
      'Built-in cloud backup to Dropbox, Google Drive or OneDrive (paid tiers).',
      'Hours tracking and tax reports for business use (paid tiers).',
      'Its free tier already covers unlimited vehicles, with no ads.',
      'Fifteen-plus years of development, per its listing.',
    ],
    weAreBetter: [
      'Everything is free, including export and insights, which My Cars puts in PRO and PRO+.',
      'VIN lookup by camera and vehicle documents with expiry dates.',
      'Imports from Fuelio and Drivvo, if you used those before.',
      'A fresh design with no legacy migration. My Cars reviewers in 2026 report data that went missing in the update.',
    ],
    quote: {
      text: 'The update appears to have been designed for a tablet or a desktop. please give me back the previous interface.',
      stars: 1,
      date: '2026-04-05',
    },
    switching: { kind: 'coming' },
    switchingNote:
      'There is no My Cars importer yet. Import from My Cars is coming, with no date. Until then, start fresh: add the car, enter today’s odometer and set your reminders. Keep your My Cars export for the old records.',
    meta: {
      title: 'My Cars alternative: AutoMate vs My Cars (2026)',
      description:
        'My Cars vs AutoMate: where My Cars is deeper, what its 2026 subscriptions cost, and what AutoMate gives you free. Apps like My Cars, checked October 2026.',
    },
  },
  {
    slug: 'simply-auto',
    name: 'Simply Auto',
    pkg: 'mrigapps.andriod.fuelcons',
    oneLine: 'Loved design, but no Android update since October 2024.',
    snapshot:
      '4.47 stars from about 24,000 ratings, 500K+ installs, last Android update 10 October 2024 (version 53.7).',
    whoFor:
      'You like Simply Auto’s design, but cloud sync stopped working for you and the app has not been updated in two years.',
    rows: [
      {
        label: 'Price',
        automate: 'Free. No subscription.',
        them: 'Free with ads; Gold and Platinum in-app purchases from $1.49 to $29.99',
      },
      { label: 'Ads', automate: 'None', them: 'Yes' },
      {
        label: 'Last Android update',
        automate: 'Regular updates through 2026',
        them: '10 October 2024',
      },
      {
        label: 'Sync',
        automate: automateBackup,
        them: 'Cloud and household sync. Reviews since 2025 say it often fails.',
      },
      {
        label: 'Several services due at once',
        automate: 'Each reminder notifies on its own',
        them: 'A 2026 review says only one of them is notified',
      },
      { label: 'Electric vehicles', automate: 'Yes (kWh)', them: 'Users ask for an electric fuel type' },
      { label: 'Phones', automate: 'Android', them: 'Android and iPhone (last iPhone update March 2022)' },
    ],
    theyAreBetter: [
      'Household sync between two phones, when it works. AutoMate has no sync at all.',
      'An iPhone app, though it has not been updated since March 2022.',
      'A design and maintenance countdowns that long-time users still praise.',
    ],
    weAreBetter: [
      'It is maintained. Simply Auto’s last Android update was in October 2024.',
      'No ads and nothing to buy.',
      'Electric vehicles are supported, with kWh charging.',
      'Your records live on your phone, so there is no sync service to break.',
    ],
    quote: { text: 'The Cloud sync is not working.', stars: 1, date: '2025-01-13' },
    switching: { kind: 'coming' },
    switchingNote:
      'There is no Simply Auto importer yet. Import is coming, with no date. Until then, start fresh with today’s odometer and your reminders, and keep your Simply Auto export for the old records.',
    meta: {
      title: 'Simply Auto alternative: AutoMate vs Simply Auto (2026)',
      description:
        'Simply Auto vs AutoMate: Simply Auto has not had an Android update since October 2024. What it still does well, what AutoMate does instead, checked October 2026.',
    },
  },
  {
    slug: 'acar',
    name: 'aCar',
    pkg: 'com.zonewalker.acar',
    oneLine: 'Now owned by Fuelly, needs a Fuelly account, last updated January 2025.',
    snapshot:
      '1.93 stars from about 21,000 ratings, 1M+ installs, last updated 23 January 2025. Owned by Fuelly.',
    whoFor:
      'You chose aCar because it kept your data on the phone, and the forced Fuelly account changed that.',
    rows: [
      {
        label: 'Price',
        automate: 'Free. No subscription.',
        them: 'Ads, with in-app purchases from $0.99 to $14.99',
      },
      {
        label: 'Ads',
        automate: 'None',
        them: 'Yes. Reviewers say a paid Pro unlock keeps resetting to ads.',
      },
      { label: 'Account', automate: 'Not needed', them: 'Fuelly account sign-in' },
      { label: 'Last update', automate: 'Regular updates through 2026', them: '23 January 2025' },
      {
        label: 'Backup',
        automate: automateBackup,
        them: 'Fuelly cloud sync. A 2025 review says local restore no longer works.',
      },
      { label: 'Vehicle limit', automate: 'None', them: 'A limit was added, per a 2026 review' },
      { label: 'Dark mode', automate: 'Yes', them: 'Asked for by users' },
    ],
    theyAreBetter: [
      'If you also use Fuelly on other devices, aCar keeps everything in that one account.',
      'Years of features and statistics that long-time users still describe as clear.',
    ],
    weAreBetter: [
      'No account, ever. Your records stay on your phone.',
      'No ads and no in-app purchase to lose.',
      'Maintained, with regular updates through 2026.',
      'Restore from your own backup file whenever you like.',
    ],
    quote: {
      text: 'The primary feature I enjoyed was having my data offline, and not synced to a cloud.',
      stars: 1,
      date: '2025-01-20',
    },
    switching: { kind: 'coming' },
    switchingNote:
      'There is no aCar importer yet. Import is coming, with no date. Until then, start fresh with today’s odometer and your reminders, and keep your aCar export for the old records.',
    meta: {
      title: 'aCar alternative: AutoMate vs aCar (2026)',
      description:
        'aCar vs AutoMate: aCar now needs a Fuelly account and was last updated in January 2025. An honest look at what to use instead, checked October 2026.',
    },
  },
  {
    slug: 'carfax',
    name: 'CARFAX Car Care',
    pkg: 'com.carfax.mycarfax',
    oneLine: 'Free, no ads, fills in shop history, but needs an account.',
    snapshot:
      '4.73 stars from about 43,000 ratings, 1M+ installs, last updated 8 October 2026.',
    whoFor:
      'You like CARFAX Car Care’s shop records, but the logins get in the way, or you want fuel and expense tracking with more depth.',
    rows: [
      { label: 'Price', automate: 'Free', them: 'Free' },
      { label: 'Ads', automate: 'None', them: 'None' },
      {
        label: 'Account',
        automate: 'Not needed',
        them: 'Required. Logouts and lockouts are the top complaint in reviews.',
      },
      {
        label: 'Service history from shops',
        automate: 'No. You log it.',
        them: 'Yes, filled in from participating shops',
      },
      {
        label: 'Custom reminders',
        automate: 'Any service, by distance, date or both',
        them: 'Reviewers ask for custom service reminders',
      },
      {
        label: 'Fuel log',
        automate: 'Fuel type, station, price, economy',
        them: 'Fuel tracker; reviewers ask for fuel type and station',
      },
      {
        label: 'Electric vehicles',
        automate: 'kWh charging',
        them: 'A review says it asks EV owners about oil changes',
      },
      { label: 'Cars without a 17-digit VIN', automate: 'VIN is optional', them: 'A review says a 17-digit VIN is required' },
      { label: 'Phones', automate: 'Android', them: 'Android and iPhone' },
    ],
    theyAreBetter: [
      'Service history appears on its own when you use a participating shop.',
      'Free with no ads, like AutoMate, and highly rated on both Android and iPhone.',
      'Receipt photos and maintenance reminders for the common services.',
    ],
    weAreBetter: [
      'No account and no login to fail. Your records are on your phone.',
      'A full fuel log with economy trends, plus every other expense, not only service.',
      'Reminders for any service you define, by distance, date or both.',
      'Works for electric cars and for classics without a modern VIN.',
    ],
    quote: {
      text: 'It periodically logs me out and requires me to login. Today, it took 4 attempts before I was able to get in.',
      stars: 1,
      date: '2026-09-08',
    },
    switching: { kind: 'manual' },
    switchingNote:
      'There is no CARFAX importer. Add your car, enter today’s odometer, and log the last oil change and any other service you want reminders for. Your CARFAX history stays in your CARFAX account.',
    meta: {
      title: 'CARFAX Car Care alternative: AutoMate vs CARFAX (2026)',
      description:
        'CARFAX Car Care vs AutoMate: shop history and a required account, or a private logbook with fuel, expenses and custom reminders. Apps like CARFAX Car Care, checked October 2026.',
    },
  },
];

export function competitorBySlug(slug: string): Competitor {
  const c = competitors.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown competitor: ${slug}`);
  return c;
}

export function playListing(pkg: string): string {
  return `https://play.google.com/store/apps/details?id=${pkg}`;
}

/** "2026-04-23" -> "23 April 2026" without timezone drift. */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}
