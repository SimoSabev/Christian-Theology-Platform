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

const WAY_PORTAL = { href: '/way', glyph: 'chiRho' as const } as const;

export default function TriptychPortal() {
  const t = useTranslations('hero.triptych');
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
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

      {/* The Way — fourth portal, full-width */}
      <RevealOnScroll delay={0.3}>
        <Link
          href={WAY_PORTAL.href}
          className="block text-center px-6 py-6 transition-colors"
          style={{
            background: 'rgba(201, 168, 76, 0.07)',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: 4,
          }}
        >
          <div className="mb-2"><SectionMark glyph={WAY_PORTAL.glyph} size={24} /></div>
          <div style={{ fontFamily: 'var(--font-body, serif)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--color-text-primary)' }}>
            The Way
          </div>
          <div className="mt-1 t-meta">
            "I am the way, the truth, and the life." — A contemplative space for living the faith.
          </div>
        </Link>
      </RevealOnScroll>
    </section>
  );
}
