'use client';

import { useLens } from '@/components/lens/useLens';

export default function SeekerReadingTip() {
  const { lens, hydrated } = useLens();
  if (!hydrated || lens !== 'seeker') return null;

  return (
    <div className="mb-8 p-4" style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)' }}>
      <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        <strong style={{ color: 'var(--color-accent-gold)' }}>New to reading Scripture?</strong> Read a few verses at a time and let them settle. There's no need to understand everything at once — the Bible rewards slow, repeated reading over a lifetime.
      </p>
    </div>
  );
}
