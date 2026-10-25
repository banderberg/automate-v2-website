// Copy for the per-page Open Graph cards. src/pages/og/[slug].astro renders
// each card as a 1200x630 HTML page; scripts/render-og.mjs screenshots them
// into public/og/<slug>.png, which BaseLayout references as og:image.
import { getCollection } from 'astro:content';
import { competitors } from './facts';

export interface OgCard {
  slug: string;
  headline: string;
  sub: string;
}

export async function ogCards(): Promise<OgCard[]> {
  const posts = await getCollection('blog');
  return [
    {
      slug: 'home',
      headline: 'Know what your car costs per mile.',
      sub: 'Fuel, service and expenses on your Android phone. Free. No ads, no account, no subscription.',
    },
    {
      slug: 'alternatives',
      headline: 'Car expense tracker alternatives, 2026',
      sub: 'Fuelio, Drivvo, My Cars, Simply Auto, aCar and CARFAX Car Care, compared honestly.',
    },
    {
      slug: 'privacy',
      headline: 'Your records stay on your phone.',
      sub: 'The AutoMate privacy policy, in plain words.',
    },
    {
      slug: 'blog',
      headline: 'What a car really costs to run',
      sub: 'Guides from the makers of AutoMate.',
    },
    ...competitors.map((c) => ({
      slug: `vs-${c.slug}`,
      headline: `AutoMate vs ${c.name}`,
      sub: `An honest ${c.name} alternative: what each app does better. Checked October 2026.`,
    })),
    {
      slug: 'switch-from-fuelio',
      headline: 'Move from Fuelio to AutoMate',
      sub: 'Import your Fuelio CSV, step by step.',
    },
    {
      slug: 'switch-from-drivvo',
      headline: 'Move from Drivvo to AutoMate',
      sub: 'Import your Drivvo CSV, step by step.',
    },
    ...posts.map((p) => ({ slug: `blog-${p.id}`, headline: p.data.title, sub: p.data.description })),
  ];
}
