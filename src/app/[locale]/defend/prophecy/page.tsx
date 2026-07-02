'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { messianicProphecies, nationProphecies, probabilityCalculations } from '@/data/prophecy';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const TIER_LABELS: Record<number, string> = {
  1: 'Tier I · Core',
  2: 'Tier II · Corroborating',
  3: 'Tier III · Supplementary',
};

export default function ProphecyPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/defend">Defend</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Fulfilled Prophecy</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">DEFEND · PROPHECY</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>Fulfilled Prophecy</h1>
        <p className="t-body max-w-2xl" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>
          Scripture claims to record predictions written centuries before their fulfillment. This page surveys
          the Messianic prophecies fulfilled in Jesus of Nazareth, the specific prophecies against foreign
          nations that came to pass in verifiable history, and the mathematics of just how improbable
          coincidental fulfillment would be.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="my-12" />

      {/* Messianic Prophecies */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="chiRho" size={20} />
            <Eyebrow>MESSIANIC PROPHECIES</Eyebrow>
          </div>
          <h2 className="t-h2 mb-3" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Predicted, Then Fulfilled</h2>
          <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>
            Each entry moves from the Old Testament prediction, dated centuries before Christ, to its recorded
            fulfillment in the New Testament — alongside the strongest Jewish objection and the Christian response.
          </p>
        </RevealOnScroll>

        <div className="space-y-6">
          {messianicProphecies.map((p, i) => (
            <RevealOnScroll key={p.id} delay={i * 0.05}>
              <CodexCard as="article">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{p.name}</h3>
                  <span
                    className="t-eyebrow px-2 py-1"
                    style={{ fontSize: '0.6rem', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
                  >
                    {TIER_LABELS[p.tier] ?? `Tier ${p.tier}`}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  {/* Prophecy */}
                  <div style={{ borderLeft: '2px solid var(--color-accent-gold)', paddingLeft: 14 }}>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>
                      {p.otReference} &middot; {p.otDateProphesied}
                    </div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p.prediction}</p>
                  </div>

                  {/* Arrow / connective */}
                  <div className="hidden md:flex items-start justify-center pt-6">
                    <ArrowRight size={16} style={{ color: 'var(--color-text-muted)' }} />
                  </div>

                  {/* Fulfillment */}
                  <div style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 14 }}>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>
                      {p.ntReference}
                    </div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p.ntFulfillment}</p>
                  </div>
                </div>

                {p.stonerProbability && (
                  <div className="mt-4 t-meta" style={{ color: 'var(--color-text-muted)' }}>
                    Stoner probability estimate: <span style={{ color: 'var(--color-accent-gold)' }}>{p.stonerProbability}</span>
                  </div>
                )}

                {(p.jewishObjection || p.christianResponse) && (
                  <div className="mt-5 pt-5 grid md:grid-cols-2 gap-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                    {p.jewishObjection && (
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>OBJECTION</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p.jewishObjection}</p>
                      </div>
                    )}
                    {p.christianResponse && (
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>RESPONSE</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p.christianResponse}</p>
                      </div>
                    )}
                  </div>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-16" />

      {/* Nation Prophecies */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="longCross" size={20} />
            <Eyebrow>PROPHECIES AGAINST THE NATIONS</Eyebrow>
          </div>
          <h2 className="t-h2 mb-3" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Verified in the Historical Record</h2>
          <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)', maxWidth: 640 }}>
            The prophets did not only speak of a coming Messiah — they made specific, falsifiable claims about
            the fate of entire nations, later confirmed by classical historians and archaeology.
          </p>
        </RevealOnScroll>

        <div className="space-y-6">
          {nationProphecies.map((np, i) => (
            <RevealOnScroll key={np.id} delay={i * 0.06}>
              <CodexCard as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{np.name}</h3>
                  <span className="t-meta" style={{ color: 'var(--color-text-muted)' }}>{np.prophet} &middot; {np.dateProphesied}</span>
                </div>
                <p className="t-meta mb-5" style={{ color: 'var(--color-text-muted)' }}>{np.biblicalReference}</p>

                <div className="space-y-4 mb-5">
                  {np.predictions.map((pred, pi) => (
                    <div key={pi} className="grid md:grid-cols-2 gap-4" style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: 14 }}>
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>{pred.verse}</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{pred.prediction}</p>
                      </div>
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>{pred.dateFulfilled}</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{pred.fulfillment}</p>
                        <p className="t-meta mt-1" style={{ color: 'var(--color-text-muted)' }}>{pred.source}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {np.probability && (
                  <div className="mb-4 t-meta" style={{ color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-accent-gold)' }}>Probability:</span> {np.probability}
                  </div>
                )}

                {(np.skepticalObjection || np.christianResponse) && (
                  <div className="pt-5 grid md:grid-cols-2 gap-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                    {np.skepticalObjection && (
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>OBJECTION</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{np.skepticalObjection}</p>
                      </div>
                    )}
                    {np.christianResponse && (
                      <div>
                        <div className="t-eyebrow mb-1" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>RESPONSE</div>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{np.christianResponse}</p>
                      </div>
                    )}
                  </div>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-16" />

      {/* Probability Calculations — numbers deserve emphasis */}
      <section>
        <RevealOnScroll>
          <div className="flex items-center gap-3 mb-3">
            <SectionMark glyph="section" size={20} />
            <Eyebrow>THE MATHEMATICS OF COINCIDENCE</Eyebrow>
          </div>
          <h2 className="t-h2 mb-8" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Probability Calculations</h2>
        </RevealOnScroll>

        <div className="space-y-8">
          {probabilityCalculations.map((calc, i) => (
            <RevealOnScroll key={calc.id} delay={i * 0.08}>
              <CodexCard
                as="article"
                className="text-center"
                style={{ background: 'linear-gradient(180deg, rgba(212,168,83,0.05), transparent)' }}
              >
                <h3 className="t-caps text-sm mb-4" style={{ color: 'var(--color-text-primary)' }}>{calc.name}</h3>
                <p className="t-body text-sm mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                  {calc.description}
                </p>

                {/* The big number */}
                <div
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(2.25rem, 8vw, 4.5rem)',
                    letterSpacing: '0.02em',
                    color: 'var(--color-accent-gold)',
                    lineHeight: 1,
                  }}
                >
                  {calc.combinedProbability.split('(')[0].trim()}
                </div>
                {calc.combinedProbability.includes('(') && (
                  <div className="t-meta mb-8" style={{ color: 'var(--color-text-muted)' }}>
                    {calc.combinedProbability.match(/\(([^)]+)\)/)?.[1]}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 text-left mt-6">
                  <div>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-accent-gold)' }}>PROPHECIES INCLUDED</div>
                    <ul className="space-y-1">
                      {calc.propheciesIncluded.map((item, pi) => (
                        <li key={pi} className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>&middot; {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>THE ILLUSTRATION</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{calc.illustration}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 grid md:grid-cols-2 gap-6 text-left" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>METHODOLOGY</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{calc.methodology}</p>
                  </div>
                  <div>
                    <div className="t-eyebrow mb-2" style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)' }}>SCHOLARLY CRITIQUE</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{calc.scholarlyCritique}</p>
                  </div>
                </div>
              </CodexCard>
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
