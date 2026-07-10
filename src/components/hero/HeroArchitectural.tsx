// src/components/hero/HeroArchitectural.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArchPanel, Eyebrow } from '@/components/ornament';
import AmbientVerseRotator from './AmbientVerseRotator';
import RevealOnScroll from '@/components/motion/RevealOnScroll';

export default function HeroArchitectural() {
  const t = useTranslations('hero');

  return (
    <section className="relative">
      <ArchPanel className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <RevealOnScroll>
          <Eyebrow className="mb-6" style={{ letterSpacing: '0.6em' }}>
            {t('eyebrow')}
          </Eyebrow>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h1 className="t-h1 mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            {t('headlineLine1')}<br />{t('headlineLine2')}
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p
            className="t-body max-w-xl mx-auto"
            style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}
          >
            {t('subhead')}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/defend"
              className="inline-block px-7 py-3 t-caps text-xs"
              style={{
                background: 'var(--color-accent-gold)',
                color: 'var(--color-bg-primary)',
                fontWeight: 700,
              }}
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/explore"
              className="inline-block px-7 py-3 t-caps text-xs border"
              style={{
                borderColor: 'var(--color-accent-gold)',
                color: 'var(--color-accent-gold)',
              }}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.4}>
          <div className="mt-8 t-meta" style={{ letterSpacing: '0.1em' }}>
            <kbd
              style={{
                fontFamily: 'var(--font-mono)',
                border: '1px solid var(--color-border)',
                padding: '2px 6px',
                marginRight: 8,
              }}
            >
              ⌘K
            </kbd>
            {t('searchHint')}
          </div>
        </RevealOnScroll>

        <AmbientVerseRotator />
      </ArchPanel>
    </section>
  );
}
