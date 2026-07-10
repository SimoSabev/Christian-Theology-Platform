'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { archaeologicalDiscoveries } from '@/data/archaeology';
import type { DiscoveryCategory } from '@/data/archaeology';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORY_LABELS: Record<DiscoveryCategory, string> = {
  old_testament: 'Old Testament',
  new_testament: 'New Testament',
  controversial: 'Controversial',
};

const CATEGORIES: DiscoveryCategory[] = ['old_testament', 'new_testament', 'controversial'];

const STATUS_LABELS: Record<string, string> = {
  confirmed: 'Confirmed',
  disputed: 'Disputed',
  unverified: 'Unverified',
};

function SignificanceStars({ rating }: { rating: number }) {
  return (
    <span aria-label={`Significance ${rating} of 5`} className="t-eyebrow" style={{ color: 'var(--color-accent-gold)', letterSpacing: '0.1em' }}>
      {'★'.repeat(rating)}
      <span style={{ color: 'var(--color-border)' }}>{'★'.repeat(5 - rating)}</span>
    </span>
  );
}

export default function ArchaeologyPage() {
  const [activeCategory, setActiveCategory] = useState<DiscoveryCategory | null>(null);

  const filteredDiscoveries = archaeologicalDiscoveries.filter(
    d => !activeCategory || d.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Archaeology</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · ARCHAEOLOGY</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Archaeological Discoveries</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          Physical evidence from the ancient world that corroborates the biblical record — inscriptions, manuscripts, and artifacts unearthed across the lands of Scripture.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Category filter */}
      <div className="mb-8">
        <p className="t-meta mb-2" style={{ color: 'var(--color-text-muted)' }}>Filter by Category:</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className="t-meta px-2 py-1"
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: 2,
              background: !activeCategory ? 'var(--color-accent-gold)' : 'transparent',
              color: !activeCategory ? '#0a0e1a' : 'var(--color-text-muted)',
              cursor: 'pointer',
            }}
          >
            All
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category === activeCategory ? null : category)}
              className="t-meta px-2 py-1"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 2,
                background: activeCategory === category ? 'rgba(212,168,83,0.15)' : 'transparent',
                color: activeCategory === category ? 'var(--color-accent-gold)' : 'var(--color-text-muted)',
                cursor: 'pointer',
              }}
            >
              {CATEGORY_LABELS[category]}
            </button>
          ))}
        </div>
      </div>

      <Eyebrow className="mb-4">{filteredDiscoveries.length} DISCOVERIES</Eyebrow>

      <div className="space-y-6">
        {filteredDiscoveries.map((discovery, i) => (
          <RevealOnScroll key={discovery.id} delay={i * 0.05}>
            <CodexCard>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h2 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{discovery.name}</h2>
                    <SignificanceStars rating={discovery.significance} />
                  </div>
                  <p className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>{discovery.dateDiscovered}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{CATEGORY_LABELS[discovery.category]}</span>
                    <span
                      className="t-meta px-2 py-0.5"
                      style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 2,
                        color: discovery.status === 'disputed' ? 'var(--color-text-muted)' : 'var(--color-text-secondary)',
                      }}
                    >
                      {STATUS_LABELS[discovery.status]}
                    </span>
                  </div>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>{discovery.description}</p>
                  <p className="t-meta mb-1" style={{ color: 'var(--color-text-muted)' }}>Discovered by</p>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{discovery.discoverer}</p>
                </div>

                {/* Sidebar */}
                <div className="lg:w-72 flex-shrink-0 p-4" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>
                  <Eyebrow className="mb-3">LOCATION</Eyebrow>
                  <div className="space-y-1.5 mb-4">
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{discovery.location.modern}</p>
                    {discovery.location.ancient && (
                      <p className="t-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{discovery.location.ancient}</p>
                    )}
                  </div>

                  <Eyebrow className="mb-3">CURRENT LOCATION</Eyebrow>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{discovery.artifactLocation}</p>

                  <Eyebrow className="mb-3">BIBLICAL CONNECTIONS</Eyebrow>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {discovery.biblicalReferences.map((ref) => (
                      <span key={ref} className="t-meta px-2 py-0.5" style={{ border: '1px solid var(--color-border)', borderRadius: 2, fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                        {ref}
                      </span>
                    ))}
                  </div>

                  <Eyebrow className="mb-3">SOURCES</Eyebrow>
                  <div className="space-y-1.5">
                    {discovery.sources.map((source) => (
                      <p key={source} className="t-body text-sm" style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>{source}</p>
                    ))}
                  </div>
                </div>
              </div>
            </CodexCard>
          </RevealOnScroll>
        ))}
        {filteredDiscoveries.length === 0 && (
          <p className="t-body text-center py-8" style={{ color: 'var(--color-text-muted)' }}>No discoveries found for this filter.</p>
        )}
      </div>
    </div>
  );
}
