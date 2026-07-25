// Single source of truth for the real, verifiable product facts used across
// the site (hero, sign panels, comparison table, FAQ). Sourced from
// automate-v2/docs/PLAY-STORE-LISTING.md and docs/GROWTH-STRATEGY.md — see
// PRODUCT.md "Evidence on Hand". Nothing in here is invented.

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.arctosbuilt.automate';

export interface FeatureSign {
  id: 'fuel' | 'service' | 'expense' | 'insights';
  accent: 'fuel' | 'service' | 'expense' | 'primary';
  label: string;
  description: string;
}

export const featureSigns: FeatureSign[] = [
  {
    id: 'fuel',
    accent: 'fuel',
    label: 'Fuel',
    description:
      '15-second fill-ups. Last station, price, and odometer pre-filled — you just confirm what changed.',
  },
  {
    id: 'service',
    accent: 'service',
    label: 'Service',
    description:
      '23 pre-loaded service types, or add your own. Oil changes, tires, brakes — never lose track of what was done and when.',
  },
  {
    id: 'expense',
    accent: 'expense',
    label: 'Expenses',
    description:
      'Registration, insurance, parking, tolls, car washes. See your true total cost of ownership, not just fuel.',
  },
  {
    id: 'insights',
    accent: 'primary',
    label: 'Insights',
    description:
      'The insight engine reads your history and flags what matters — like a 14% efficiency drop worth a tire check.',
  },
];

export interface MileMarker {
  marker: string;
  label: string;
  detail: string;
}

export const mileMarkers: MileMarker[] = [
  {
    marker: 'MM 1',
    label: 'Total spent',
    detail: 'Every fill-up, service, and expense, added up automatically.',
  },
  {
    marker: 'MM 2',
    label: 'Cost / mile',
    detail: 'The number most car owners have never actually calculated.',
  },
  {
    marker: 'MM 3',
    label: 'MPG trend',
    detail: 'Efficiency over time, filterable by period — not just your last fill-up.',
  },
];

export interface ComparisonRow {
  feature: string;
  automate: boolean | string;
  fuelio: boolean | string;
  drivvo: boolean | string;
  simplyAuto: boolean | string;
}

// Every "false" / weakness cell below traces to a specific, dated claim in
// automate-v2/docs/GROWTH-STRATEGY.md's competitive research (Section 1) —
// not a subjective knock on a competitor.
export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'No ads',
    automate: true,
    fuelio: false,
    drivvo: false,
    simplyAuto: 'Unclear',
  },
  {
    feature: 'No account required',
    automate: true,
    fuelio: false,
    drivvo: false,
    simplyAuto: false,
  },
  {
    feature: 'One-time price (no subscription)',
    automate: '$9.99 once',
    fuelio: 'Free + ads',
    drivvo: '$6→$25/yr',
    simplyAuto: 'Subscription',
  },
  {
    feature: 'Works fully offline',
    automate: true,
    fuelio: 'Partial (Drive sync)',
    drivvo: 'Partial (sync issues reported)',
    simplyAuto: 'Cloud sync broken since 2025',
  },
  {
    feature: 'Import your existing data',
    automate: 'From Fuelio & Drivvo',
    fuelio: '—',
    drivvo: '—',
    simplyAuto: '—',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is AutoMate free?',
    answer:
      'Yes. AutoMate is free to download and use for one vehicle. A one-time $9.99 purchase (not a subscription) unlocks unlimited vehicles, PDF export, data import, and vehicle documents.',
  },
  {
    question: 'Does AutoMate require an account?',
    answer:
      'No. There is no sign-up, no login, and no cloud account. Your data lives in a local database on your device.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'On your device, in a local SQLite database. AutoMate does not transmit your data anywhere, with one narrow exception: if you enter a VIN, it is sent to the free NHTSA public database to look up your vehicle’s year, make, and model.',
  },
  {
    question: 'Can I switch from Fuelio or Drivvo?',
    answer:
      'Yes. AutoMate can import your complete history from Fuelio and Drivvo exports — go to Settings → Import Data once you’re set up.',
  },
  {
    question: 'Is AutoMate available on iPhone?',
    answer:
      'Not yet. AutoMate is currently available on Android via Google Play. An iOS release is not scheduled.',
  },
  {
    question: 'What can AutoMate track?',
    answer:
      'Fuel fill-ups (gas, diesel, and EV/kWh), service and maintenance records, and any other vehicle expense — registration, insurance, parking, tolls, and more — across unlimited vehicles.',
  },
];
