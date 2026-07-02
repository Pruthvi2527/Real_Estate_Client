import type { ReactNode } from 'react';

export interface HomeFeature {
  title: string;
  description: string;
  icon: 'listings' | 'database' | 'performance' | 'responsive';
}

export const HOME_FEATURES: HomeFeature[] = [
  {
    title: 'Manage Listings',
    description: 'Full CRUD for property records with an intuitive workflow.',
    icon: 'listings',
  },
  {
    title: 'Real-time Data',
    description: 'Synced with your MongoDB Atlas backend in real time.',
    icon: 'database',
  },
  {
    title: 'Fast Performance',
    description: 'Optimized API layer and lean queries for quick responses.',
    icon: 'performance',
  },
  {
    title: 'Responsive UI',
    description: 'A polished experience across mobile, tablet, and desktop.',
    icon: 'responsive',
  },
];

export const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=75&fm=webp';

export const HERO_CONTENT = {
  title: 'Welcome to Real Estate CRUD',
  description:
    'Browse, create, update, and delete property listings. Connected to your Express + MongoDB backend API.',
  primaryCta: { href: '/properties/add', label: 'Add Property' },
  secondaryCta: { href: '/properties', label: 'View Properties' },
} as const;

export type FeatureIconName = HomeFeature['icon'];

export type FeatureIconRenderer = (className?: string) => ReactNode;
