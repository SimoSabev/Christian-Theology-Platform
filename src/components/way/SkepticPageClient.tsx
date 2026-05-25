'use client';

import WayLayout from './WayLayout';
import SkepticInvitation from './SkepticInvitation';
import { useLens } from '@/components/lens';
import { skepticSection } from '@/data/way/skeptic';

export default function SkepticPageClient() {
  const { lens, hydrated } = useLens();
  const isSkeptic = !hydrated || lens === 'seeker' || lens === 'all';

  return (
    <WayLayout>
      {!isSkeptic && (
        <div
          style={{
            padding: '0.875rem 1.25rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '6px',
            marginBottom: '1.75rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'var(--color-text-secondary)',
          }}
        >
          This space was written for those who aren&apos;t sure yet. If you are already
          a believer — this is still worth reading, to understand the questions that
          others carry.{' '}
          <a
            href="/defend"
            style={{ color: 'var(--color-accent-gold)', textDecoration: 'none' }}
          >
            Defend the Faith →
          </a>{' '}
          has answers to the intellectual objections.
        </div>
      )}
      <SkepticInvitation section={skepticSection} />
    </WayLayout>
  );
}
