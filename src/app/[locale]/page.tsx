// src/app/[locale]/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HeroArchitectural from '@/components/hero/HeroArchitectural';
import TriptychPortal from '@/components/hero/TriptychPortal';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import { getQuoteOfDay } from '@/data/sources/quotes';
import LensRecommendedPath from '@/components/lens/LensRecommendedPath';
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';

export default function HomePage() {
  const t = useTranslations('home');
  const quoteOfDay = getQuoteOfDay();
  const { lens, hydrated } = useLens();
  const lensVariant = LENS_VARIANTS[lens];

  return (
    <div>
      <HeroArchitectural />
      <TriptychPortal />

      {/* Lens Recommended Path */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <LensRecommendedPath />
        {hydrated && (
          <p className="mt-3 t-meta text-xs" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            {lensVariant.homepageMessage}
          </p>
        )}
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <RevealOnScroll>
          <Eyebrow className="mb-3">FEATURED · ARGUMENT</Eyebrow>
          <h2 className="t-h2 mb-6" style={{ fontSize: '1.75rem' }}>
            The Kalam Cosmological Argument
          </h2>
          <CodexCard>
            <p className="t-body" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--color-text-primary)' }}>P1.</strong> Everything that begins to exist has a cause of its existence.<br />
              <strong style={{ color: 'var(--color-text-primary)' }}>P2.</strong> The universe began to exist.<br />
              <strong style={{ color: 'var(--color-accent-gold)' }}>∴</strong> Therefore, the universe has a cause of its existence.
            </p>
            <div className="mt-6">
              <Link
                href="/defend/atheism"
                className="t-caps text-xs"
                style={{ color: 'var(--color-accent-gold)', borderBottom: '1px solid var(--color-accent-gold)' }}
              >
                Read full argument →
              </Link>
            </div>
          </CodexCard>
        </RevealOnScroll>
      </section>

      <KeystoneDivider />

      {/* Quote of the Day */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RevealOnScroll>
          <Eyebrow className="mb-4">QUOTE OF THE DAY · CHURCH FATHERS</Eyebrow>
          <blockquote
            className="p-6"
            style={{ borderLeft: '3px solid var(--color-accent-gold)', background: 'rgba(212,168,83,0.04)' }}
          >
            <p className="t-body italic mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85, fontSize: '1.0625rem' }}>
              &ldquo;{quoteOfDay.quote}&rdquo;
            </p>
            <footer>
              <span className="t-meta" style={{ color: 'var(--color-accent-gold)' }}>
                — {quoteOfDay.author}, <em>{quoteOfDay.work}</em>
              </span>
            </footer>
          </blockquote>
          <div className="mt-4 text-right">
            <Link href="/sources/church-fathers" className="t-meta" style={{ color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)' }}>
              Browse all patristic quotes →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <KeystoneDivider />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Eyebrow className="mb-3">{t('exploreTools') ?? 'EXPLORE · TOOLS'}</Eyebrow>
        <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>
          Argument trees, debate mode, manuscript reader, and more — across every section.
        </p>
      </section>
    </div>
  );
}
