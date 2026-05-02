// src/components/hero/TriptychPortal.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

const PORTALS = [
  { href: '/defend',  glyph: 'cross' as const,    labelKey: 'defend',  subKey: 'defendSub'  },
  { href: '/compare', glyph: 'plusCircle' as const,labelKey: 'compare', subKey: 'compareSub' },
  { href: '/sources', glyph: 'patee' as const,    labelKey: 'sources', subKey: 'sourcesSub' },
];

export default function TriptychPortal() {
  const t = useTranslations('hero.triptych');
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PORTALS.map((p, i) => (
          <RevealOnScroll key={p.href} delay={i * 0.1}>
            <Link
              href={p.href}
              className="block text-center px-6 py-8 transition-colors"
              style={{
                background: 'rgba(212, 168, 83, 0.04)',
                border: '1px solid var(--color-border)',
                borderRadius: 4,
              }}
            >
              <div className="mb-3"><SectionMark glyph={p.glyph} size={28} /></div>
              <div className="t-caps text-xs" style={{ color: 'var(--color-text-primary)' }}>{t(p.labelKey)}</div>
              <div className="mt-2 t-meta">{t(p.subKey)}</div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
