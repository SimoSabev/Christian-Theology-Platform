// src/app/[locale]/page.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HeroArchitectural from '@/components/hero/HeroArchitectural';
import TriptychPortal from '@/components/hero/TriptychPortal';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      <HeroArchitectural />
      <TriptychPortal />

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

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Eyebrow className="mb-3">{t('exploreTools') ?? 'EXPLORE · TOOLS'}</Eyebrow>
        <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>
          Argument trees, debate mode, manuscript reader, and more — across every section.
        </p>
      </section>
    </div>
  );
}
