// src/components/lens/LensToggle.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Eye } from 'lucide-react';
import { LENSES, type Lens } from './types';
import { useLens } from './useLens';

export default function LensToggle() {
  const { lens, setLens, hydrated } = useLens();
  const t = useTranslations('lens');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  if (!hydrated) return <div className="w-10 h-10" />; // SSR placeholder

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 border text-xs t-caps"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-accent-gold)',
          background: 'transparent',
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t('toggleAriaLabel')}
      >
        <Eye size={14} />
        <span className="hidden sm:inline">{t(`names.${lens}`)}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 mt-2 min-w-[16rem] z-50 codex-card"
          style={{ padding: '0.5rem' }}
        >
          <div className="t-eyebrow px-3 py-2">{t('chooseLens')}</div>
          {LENSES.map((l: Lens) => (
            <button
              key={l}
              role="menuitemradio"
              aria-checked={lens === l}
              aria-pressed={lens === l}
              onClick={() => { setLens(l); setOpen(false); }}
              className="w-full text-left px-3 py-2 transition-colors"
              style={{
                background: lens === l ? 'rgba(212, 168, 83, 0.10)' : 'transparent',
                borderLeft: `2px solid ${lens === l ? 'var(--color-accent-gold)' : 'transparent'}`,
              }}
            >
              <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>{t(`names.${l}`)}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                {t(`descriptions.${l}`)}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
