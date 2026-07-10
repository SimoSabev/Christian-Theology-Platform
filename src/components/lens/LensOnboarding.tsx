// src/components/lens/LensOnboarding.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LENSES, ONBOARDING_KEY, type Lens } from './types';
import { useLens } from './useLens';

export default function LensOnboarding() {
  const { setLens, hydrated } = useLens();
  const t = useTranslations('lens.onboarding');
  const tNames = useTranslations('lens.names');
  const tDesc = useTranslations('lens.descriptions');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (!localStorage.getItem(ONBOARDING_KEY)) setShow(true);
    } catch { /* ignore */ }
  }, [hydrated]);

  function pick(l: Lens | null) {
    if (l) setLens(l);
    try { localStorage.setItem(ONBOARDING_KEY, '1'); } catch { /* ignore */ }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lens-onboarding-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
    >
      <div className="codex-card max-w-lg w-full" style={{ padding: '2rem' }}>
        <div className="t-eyebrow mb-3">{t('eyebrow')}</div>
        <h2 id="lens-onboarding-title" className="t-h2 mb-4" style={{ fontSize: '1.5rem' }}>{t('title')}</h2>
        <p className="t-body mb-5" style={{ color: 'var(--color-text-secondary)' }}>{t('body')}</p>
        <div className="grid gap-2">
          {LENSES.map((l) => (
            <button
              key={l}
              onClick={() => pick(l)}
              className="text-left px-4 py-3 border transition-colors hover:border-[var(--color-accent-gold)]"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="t-caps text-xs">{tNames(l)}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                {tDesc(l)}
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => pick(null)}
          className="mt-5 text-sm underline"
          style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
        >
          {t('skip')}
        </button>
      </div>
    </div>
  );
}
