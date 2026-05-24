'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cultCategories } from '@/data/cults';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ChevronRight } from 'lucide-react';

export default function CultsIndexPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Against Cults</span>
      </div>

      {/* Header */}
      <RevealOnScroll>
        <div className="text-center mb-10">
          <Eyebrow className="mb-4">DEFEND · CULTS & HERESIES</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Cults & Heresies</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Equipping the modern apologist to respond to historical and modern theological departures through deep scriptural and semantic analysis.
          </p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Cult Category Grid */}
      <div className="mb-6">
        <Eyebrow>EXPLORE REFUTATIONS BY MOVEMENT</Eyebrow>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cultCategories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.07}>
            <Link href={`/defend/cults/${cat.id}`} className="block group">
              <CodexCard>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{cat.objectionCount} major refutations</span>
                  <ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
