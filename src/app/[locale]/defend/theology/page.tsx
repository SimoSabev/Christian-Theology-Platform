'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { theologyTopics, apologeticsMethods } from '@/data/theology';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const CATEGORY_LABELS: Record<string, string> = {
  doctrine: 'Doctrine',
  atonement: 'Atonement',
  eschatology: 'Eschatology',
  creation: 'Creation',
  philosophy: 'Philosophy',
};

function TopicCard({ topic, defaultOpen = false }: { topic: (typeof theologyTopics)[number]; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <CodexCard as="article">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>
            {CATEGORY_LABELS[topic.category] ?? topic.category}
          </div>
          <h3 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{topic.name}</h3>
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{topic.description}</p>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: 'var(--color-text-muted)',
            flexShrink: 0,
            marginTop: 4,
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms ease',
          }}
        />
      </button>

      {isOpen && (
        <div className="mt-6 pt-6 space-y-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          {/* Biblical Basis */}
          <div>
            <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>BIBLICAL BASIS</div>
            <div className="space-y-2">
              {topic.biblicalBasis.map((b, i) => (
                <div key={i} style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 12 }}>
                  <span className="t-caps" style={{ fontSize: '0.7rem', color: 'var(--color-text-primary)' }}>{b.reference}</span>
                  <span className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}> — {b.teaching}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Historical Development */}
          {topic.historicalDevelopment && (
            <div>
              <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>HISTORICAL DEVELOPMENT</div>
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{topic.historicalDevelopment}</p>
            </div>
          )}

          {/* Key Terms */}
          {topic.keyTerms && topic.keyTerms.length > 0 && (
            <div>
              <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>KEY TERMS</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {topic.keyTerms.map((kt, i) => (
                  <div key={i}>
                    <span className="t-caps" style={{ fontSize: '0.7rem', color: 'var(--color-accent-gold)' }}>{kt.term}</span>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{kt.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Differing Views */}
          {topic.views && topic.views.length > 0 && (
            <div>
              <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>DIFFERING VIEWS</div>
              <div className="space-y-4">
                {topic.views.map((v, i) => (
                  <div key={i} className="p-4" style={{ border: '1px solid var(--color-border)' }}>
                    <h4 className="t-caps text-xs mb-1" style={{ color: 'var(--color-text-primary)' }}>{v.name}</h4>
                    <p className="t-body text-sm mb-2" style={{ color: 'var(--color-text-secondary)' }}>{v.description}</p>
                    <p className="t-meta mb-2" style={{ color: 'var(--color-text-muted)' }}>
                      Proponents: {v.keyProponents.join(', ')}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-accent-gold)' }}>STRENGTHS</span>
                        <ul className="mt-1 space-y-0.5">
                          {v.strengths.map((s, si) => (
                            <li key={si} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {s}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>WEAKNESSES</span>
                        <ul className="mt-1 space-y-0.5">
                          {v.weaknesses.map((w, wi) => (
                            <li key={wi} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {w}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Heresies to Avoid */}
          {topic.heresiesToAvoid && topic.heresiesToAvoid.length > 0 && (
            <div>
              <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>HERESIES TO AVOID</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {topic.heresiesToAvoid.map((h, i) => (
                  <div key={i}>
                    <span className="t-caps" style={{ fontSize: '0.7rem', color: 'var(--color-text-primary)' }}>{h.name}</span>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{h.error}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SOURCES</div>
            <ul className="space-y-0.5">
              {topic.sources.map((s, i) => (
                <li key={i} className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </CodexCard>
  );
}

function MethodCard({ method }: { method: (typeof apologeticsMethods)[number] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CodexCard as="article">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{method.name}</h3>
          <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{method.description}</p>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: 'var(--color-text-muted)',
            flexShrink: 0,
            marginTop: 4,
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 200ms ease',
          }}
        />
      </button>

      {isOpen && (
        <div className="mt-6 pt-6 space-y-6" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div>
            <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>KEY FIGURES</div>
            <div className="grid sm:grid-cols-2 gap-2">
              {method.keyFigures.map((f, i) => (
                <div key={i}>
                  <span className="t-caps" style={{ fontSize: '0.7rem', color: 'var(--color-text-primary)' }}>{f.name}</span>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}> — {f.work}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>METHODOLOGY</div>
            <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{method.methodology}</p>
          </div>

          <div>
            <div className="t-eyebrow mb-3" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>KEY ARGUMENTS</div>
            <ul className="space-y-1.5">
              {method.keyArguments.map((a, i) => (
                <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {a}</li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-accent-gold)' }}>STRENGTHS</span>
              <ul className="mt-1 space-y-0.5">
                {method.strengths.map((s, i) => (
                  <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="t-eyebrow" style={{ fontSize: '0.55rem', color: 'var(--color-text-muted)' }}>CRITICISMS</span>
              <ul className="mt-1 space-y-0.5">
                {method.criticisms.map((c, i) => (
                  <li key={i} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SOURCES</div>
            <ul className="space-y-0.5">
              {method.sources.map((s, i) => (
                <li key={i} className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </CodexCard>
  );
}

export default function TheologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Theology Explorer</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · THEOLOGY</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Theology Explorer</h1>
        <p className="t-body max-w-2xl" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
          Core Christian doctrines, their biblical foundations, historical development, and the views that
          have contended for and against them across church history. Click a topic to expand it.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="my-12" />

      {/* Theology Topics */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-8">
            <SectionMark glyph="chiRho" size={20} />
            <Eyebrow>CORE DOCTRINES</Eyebrow>
          </div>
        </RevealOnScroll>

        <div className="space-y-5">
          {theologyTopics.map((topic, i) => (
            <RevealOnScroll key={topic.id} delay={i * 0.06}>
              <TopicCard topic={topic} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-16" />

      {/* Apologetics Methods */}
      <section>
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="section" size={20} />
            <Eyebrow>METHODS OF DEFENSE</Eyebrow>
          </div>
          <h2 className="t-h2 mb-8" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Apologetics Methods</h2>
        </RevealOnScroll>

        <div className="space-y-5">
          {apologeticsMethods.map((method, i) => (
            <RevealOnScroll key={method.id} delay={i * 0.06}>
              <MethodCard method={method} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/defend" className="inline-flex items-center gap-2 t-caps text-xs" style={{ color: 'var(--color-accent-gold)' }}>
          <ArrowLeft size={12} /> Back to Defend
        </Link>
      </div>
    </div>
  );
}
