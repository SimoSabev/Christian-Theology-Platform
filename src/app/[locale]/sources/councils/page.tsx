'use client';

import { Link } from '@/i18n/navigation';
import { councils } from '@/data/sources';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

export default function CouncilsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Councils & Creeds</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · COUNCILS</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Councils & Creeds</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>The ecumenical councils that defined Christian orthodoxy</p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Timeline-style council list */}
      <div className="relative">
        <div className="absolute start-6 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-border)' }} />
        <div className="space-y-8">
          {councils.map((council, i) => (
            <RevealOnScroll key={council.id} delay={i * 0.07}>
              <div className="relative ps-16">
                {/* Year dot */}
                <div className="absolute start-4 top-6 w-5 h-5 z-10" style={{ borderRadius: '50%', background: 'var(--color-accent-gold)', border: '4px solid var(--color-bg-primary)' }} />

                <CodexCard>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="t-caps text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>{council.name}</h2>
                      <p className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>{council.year} AD · {council.location}</p>
                    </div>
                    <span className="t-meta px-2 py-0.5 capitalize" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{council.scope}</span>
                  </div>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{council.description}</p>
                  <div className="mb-3">
                    <Eyebrow className="mb-2">KEY DECISIONS</Eyebrow>
                    <ul className="space-y-1.5">
                      {council.keyDecisions.map((d) => (
                        <li key={d} className="t-body text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                          <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {council.creeds && council.creeds.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {council.creeds.map((c) => (
                        <span key={c} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-accent-gold)' }}>{c}</span>
                      ))}
                    </div>
                  )}
                </CodexCard>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
