// src/components/lens/LensRecommendedPath.tsx
'use client';

import { Link } from '@/i18n/navigation';
import { useLens } from './useLens';
import { LENS_VARIANTS } from './types';
import { ArrowRight } from 'lucide-react';

const LENS_PATH_LABELS: Record<string, { label: string; description: string }> = {
  seeker: {
    label: 'Start with the Church Fathers',
    description: 'Begin your journey by reading the words of those who shaped Christianity.',
  },
  student: {
    label: 'Study the Cosmological Argument',
    description: 'A rigorous introduction to theistic philosophical reasoning.',
  },
  defender: {
    label: 'Enter the Defend Section',
    description: 'Equip yourself with classical and contemporary apologetic arguments.',
  },
  researcher: {
    label: 'Browse the Manuscript Archive',
    description: 'Access primary-source manuscripts and interlinear tools.',
  },
  all: {
    label: 'Explore All Arguments',
    description: 'Complete access to every argument, source, and tool on the platform.',
  },
};

export default function LensRecommendedPath() {
  const { lens, hydrated } = useLens();

  if (!hydrated) return null;

  const variant = LENS_VARIANTS[lens];
  const pathInfo = LENS_PATH_LABELS[lens];

  return (
    <div
      className="flex items-center justify-between gap-4 px-4 py-3"
      style={{ border: '1px solid var(--color-border)', background: 'rgba(212,168,83,0.03)' }}
    >
      <div className="flex-1 min-w-0">
        <p
          className="mb-0.5"
          style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
        >
          Recommended for {lens.charAt(0).toUpperCase() + lens.slice(1)}
        </p>
        <p
          className="text-sm font-medium truncate"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          {pathInfo?.label}
        </p>
        <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
          {pathInfo?.description}
        </p>
      </div>
      <Link
        href={variant.defaultEntry}
        className="flex items-center gap-2 px-3 py-2 shrink-0 t-caps text-xs transition-colors hover:opacity-80"
        style={{
          border: '1px solid var(--color-accent-gold)',
          color: 'var(--color-accent-gold)',
        }}
      >
        Go <ArrowRight size={12} />
      </Link>
    </div>
  );
}
