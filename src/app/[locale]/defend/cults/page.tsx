'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cultCategories, cultObjections } from '@/data/cults';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ChevronRight } from 'lucide-react';

// Categories classified as historical or modern based on objection data
const HISTORICAL_CATEGORIES = new Set<string>(['arianism', 'gnosticism', 'nestorianism', 'modalism', 'docetism', 'monophysitism', 'pelagianism', 'montanism']);
const MODERN_CATEGORIES = new Set<string>(['jehovahs-witnesses', 'lds', 'christian-science', 'oneness-pentecostalism', 'new-age', 'islam']);

type TabFilter = 'all' | 'historical' | 'modern';

export default function CultsIndexPage() {
  const t = useTranslations('defend');
  const [filter, setFilter] = useState<TabFilter>('all');

  const filteredCategories = cultCategories.filter((cat) => {
    if (filter === 'all') return true;
    if (filter === 'historical') return HISTORICAL_CATEGORIES.has(cat.id);
    if (filter === 'modern') return MODERN_CATEGORIES.has(cat.id);
    return true;
  });

  const tabStyle = (tab: TabFilter): React.CSSProperties => ({
    padding: '6px 16px',
    border: '1px solid var(--color-border)',
    background: filter === tab ? 'var(--color-accent-gold)' : 'transparent',
    color: filter === tab ? '#0a0e1a' : 'var(--color-text-secondary)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.6rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
  });

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

      {/* Tab Filter */}
      <div className="flex items-center gap-2 mb-8">
        <button style={tabStyle('all')} onClick={() => setFilter('all')}>All</button>
        <button style={tabStyle('historical')} onClick={() => setFilter('historical')}>Historical Heresies</button>
        <button style={tabStyle('modern')} onClick={() => setFilter('modern')}>Modern Movements</button>
      </div>

      {/* Cult Category Grid */}
      <div className="mb-6">
        <Eyebrow>EXPLORE REFUTATIONS BY MOVEMENT</Eyebrow>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredCategories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.07}>
            <Link href={`/defend/cults/${cat.id}`} className="block group">
              <CodexCard>
                <div className="flex items-start justify-between mb-2">
                  <h2 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                  {HISTORICAL_CATEGORIES.has(cat.id) && (
                    <span className="t-meta px-2 py-0.5 ml-2 shrink-0" style={{ border: '1px solid var(--color-border)', borderRadius: 2, fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>Historical</span>
                  )}
                  {MODERN_CATEGORIES.has(cat.id) && (
                    <span className="t-meta px-2 py-0.5 ml-2 shrink-0" style={{ border: '1px solid rgba(212,168,83,0.3)', borderRadius: 2, fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>Modern</span>
                  )}
                </div>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{cat.objectionCount} major refutations</span>
                  <ChevronRight size={14} style={{ color: 'var(--color-text-muted)' }} />
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
        {filteredCategories.length === 0 && (
          <p className="t-body col-span-3 text-center py-8" style={{ color: 'var(--color-text-muted)' }}>
            No categories found for this filter.
          </p>
        )}
      </div>
    </div>
  );
}
