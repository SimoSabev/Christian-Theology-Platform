'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { getArgumentBySlug } from '@/data/arguments';
import { getSemanticDefensesByArgument } from '@/data/semantic-defense';
import SemanticDefenseSlideshow from '@/components/semantic/SemanticDefenseSlideshow';
import { Eyebrow, KeystoneDivider, DropCap } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import PremiseBlock from '@/components/reader/PremiseBlock';
import ObjectionGrid from '@/components/reader/ObjectionGrid';
import ActionToolbar from '@/components/reader/ActionToolbar';
import ProponentRow from '@/components/reader/ProponentRow';
import CitationList from '@/components/reader/CitationList';
import ArgumentSidebar from '@/components/reader/ArgumentSidebar';
import CodexCard from '@/components/reader/CodexCard';
import { useLens } from '@/components/lens/useLens';
import { LENS_VARIANTS } from '@/components/lens/types';
import RelatedContent from '@/components/layout/RelatedContent';
import { TreePine, Swords, BookOpen } from 'lucide-react';

export default function ArgumentPage() {
  const params = useParams();
  const slug = params.argument as string;
  const category = params.category as string;
  const arg = getArgumentBySlug(slug);
  const semanticDefenses = getSemanticDefensesByArgument(arg?.id ?? '');
  const [activeSemanticDefense, setActiveSemanticDefense] = useState<string | null>(null);
  const { lens } = useLens();
  const lensVariant = LENS_VARIANTS[lens];

  if (!arg) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center t-meta">
        Argument not found.{' '}
        <Link href="/defend" style={{ color: 'var(--color-accent-gold)' }}>← Back</Link>
      </div>
    );
  }

  const formattedArg = [
    ...arg.premises.map((p, i) => `P${i + 1}. ${p.text}`),
    `∴ ${arg.conclusion}`,
  ].join('\n');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-12">
        <ArgumentSidebar arg={arg} categoryHref={`/defend/atheism/${category}`} />

        <main className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 flex-wrap" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            <Link href="/defend" style={{ color: 'var(--color-text-muted)' }}>Defend</Link>
            <span>/</span>
            <Link href={`/defend/atheism/${category}`} className="capitalize">{category}</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-secondary)' }}>{arg.name}</span>
          </div>

          {/* Eyebrow + Title */}
          <RevealOnScroll>
            <Eyebrow className="mb-3">{category.toUpperCase()} · {arg.category.toUpperCase()}</Eyebrow>
            <h1 className="t-h1 mb-2" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>{arg.name}</h1>
            <p className="t-quote mb-6" style={{ color: 'var(--color-text-secondary)' }}>{arg.shortDescription}</p>
          </RevealOnScroll>

          {/* Action toolbar */}
          <ActionToolbar
            argName={arg.name}
            formattedArg={formattedArg}
            className={`mb-8 ${lens === 'defender' ? 'py-3' : ''}`}
            style={lens === 'defender' ? { borderBottom: '1px solid var(--color-border)', paddingBottom: 12 } : undefined}
          />

          {/* Explore links */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link href={`/explore/argument-tree/${arg.slug}`} className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              <TreePine size={12} /> Argument Tree
            </Link>
            <Link href={`/explore/debate-mode/${arg.slug}`} className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              <Swords size={12} /> Debate Mode
            </Link>
            {semanticDefenses.map((sd) => (
              <button
                key={sd.id}
                onClick={() => setActiveSemanticDefense(sd.id)}
                className="t-caps text-xs inline-flex items-center gap-2 px-3 py-2 border"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
              >
                <BookOpen size={12} /> {sd.title}
              </button>
            ))}
          </div>

          {/* Formal statement */}
          <section id="formal-statement" className="mb-10">
            <Eyebrow className="mb-3">FORMAL STATEMENT</Eyebrow>
            <PremiseBlock premises={arg.premises} conclusion={arg.conclusion} />
          </section>

          <KeystoneDivider className="my-8" />

          {/* Historical Background */}
          <RevealOnScroll>
            <section id="historical-background" className="mb-10">
              <Eyebrow className="mb-4">HISTORICAL BACKGROUND</Eyebrow>
              {lens === 'seeker' && arg.historicalBackground.length > 0 && (
                <DropCap letter={arg.historicalBackground[0]!} />
              )}
              <p className="t-body" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>
                {lens === 'seeker' ? arg.historicalBackground.slice(1) : arg.historicalBackground}
              </p>
            </section>
          </RevealOnScroll>

          <KeystoneDivider className="my-8" />

          {/* Defense of Premises */}
          <section id="defense-of-premises" className="mb-10">
            <Eyebrow className="mb-4">DEFENSE OF PREMISES</Eyebrow>
            <div className="space-y-5">
              {arg.premises.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 0.08}>
                  <CodexCard>
                    <div className="t-caps text-xs mb-2" style={{ color: 'var(--color-accent-gold)' }}>P{i + 1}. {p.text}</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', whiteSpace: 'pre-line' }}>{p.defense}</p>
                    {p.sources.length > 0 && (
                      <div className="mt-3 pt-3 flex flex-wrap gap-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                        {p.sources.map((s) => (
                          <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                        ))}
                      </div>
                    )}
                  </CodexCard>
                </RevealOnScroll>
              ))}
            </div>
          </section>

          <KeystoneDivider className="my-8" />

          {/* Objections */}
          <section id="objections" className="mb-10">
            <Eyebrow className="mb-4">OBJECTIONS & RESPONSES</Eyebrow>
            <ObjectionGrid objections={arg.objections} />
          </section>

          <KeystoneDivider className="my-8" />

          {/* Proponents */}
          <RevealOnScroll>
            <section id="proponents" className="mb-10">
              <Eyebrow className="mb-4">KEY PROPONENTS</Eyebrow>
              <ProponentRow proponents={arg.proponents} />
            </section>
          </RevealOnScroll>

          {/* Extended Body */}
          {arg.body && (
            <RevealOnScroll>
              <section id="body" className="mb-10">
                <Eyebrow className="mb-4">IN DEPTH</Eyebrow>
                {arg.body.split('\n\n').map((para, i) => (
                  <p key={i} className="t-body mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>
                    {para}
                  </p>
                ))}
              </section>
            </RevealOnScroll>
          )}

          {/* Seeker callout — simplified language note */}
          {lens === 'seeker' && (
            <div
              className="mb-8 p-4"
              style={{ border: '1px solid rgba(212,168,83,0.3)', background: 'rgba(212,168,83,0.04)', borderLeft: '3px solid var(--color-accent-gold)' }}
            >
              <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <strong style={{ color: 'var(--color-accent-gold)' }}>New to this?</strong> This argument can look complex, but the core idea is simple: the universe had a beginning, and beginnings need causes. If you want a simpler overview, consider switching to a different reading mode using the lens toggle in the navigation.
              </p>
            </div>
          )}

          {/* Church Father Quotes — only for devotional/scholar lenses */}
          {lensVariant.showPatristicCitations && arg.churchFatherQuotes && arg.churchFatherQuotes.length > 0 && (
            <RevealOnScroll>
              <section id="church-fathers" className="mb-10">
                <Eyebrow className="mb-4">CHURCH FATHERS ON THIS ARGUMENT</Eyebrow>
                <div className="space-y-4">
                  {arg.churchFatherQuotes.map((cfq, i) => (
                    <blockquote
                      key={i}
                      className="pl-4 py-3"
                      style={{ borderLeft: '3px solid var(--color-accent-gold)', background: 'rgba(212,168,83,0.04)' }}
                    >
                      <p className="t-body text-sm italic mb-2" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                        &ldquo;{cfq.quote}&rdquo;
                      </p>
                      <footer className="t-meta" style={{ color: 'var(--color-accent-gold)' }}>
                        — {cfq.author}, <em>{cfq.work}</em>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            </RevealOnScroll>
          )}

          {/* Simple Objections (additional) */}
          {arg.simpleObjections && arg.simpleObjections.length > 0 && (
            <RevealOnScroll>
              <section id="common-objections" className="mb-10">
                <Eyebrow className="mb-4">COMMON OBJECTIONS ANSWERED</Eyebrow>
                <div className="space-y-3">
                  {arg.simpleObjections.map((obj, i) => (
                    <details
                      key={i}
                      className="group"
                      style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}
                    >
                      <summary
                        className="t-caps text-xs px-4 py-3 cursor-pointer select-none list-none flex items-center justify-between"
                        style={{ color: 'var(--color-text-primary)', background: 'var(--color-bg-secondary)' }}
                      >
                        {obj.title}
                        <span style={{ color: 'var(--color-accent-gold)' }}>+</span>
                      </summary>
                      <div className="px-4 py-3">
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                          {obj.rebuttal}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </RevealOnScroll>
          )}

          {/* Significance */}
          {arg.significance && (
            <RevealOnScroll>
              <section className="mb-10">
                <Eyebrow className="mb-4">SIGNIFICANCE</Eyebrow>
                <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>{arg.significance}</p>
              </section>
            </RevealOnScroll>
          )}

          <KeystoneDivider className="my-8" />

          {/* Sources */}
          <RevealOnScroll>
            <section id="sources" className="mb-10">
              <Eyebrow className="mb-4">KEY SOURCES</Eyebrow>
              <CitationList sources={arg.keySources} />
            </section>
          </RevealOnScroll>

          {/* Related Content */}
          <RelatedContent items={[
            {
              title: 'Explore Argument Tree',
              href: `/explore/argument-tree`,
              type: 'argument',
              description: 'Visualize the logical structure interactively',
            },
            {
              title: 'Debate Mode',
              href: `/explore/debate-mode`,
              type: 'argument',
              description: 'Step through objections and responses',
            },
            {
              title: 'Church Father Quotes',
              href: '/sources/church-fathers',
              type: 'father',
              description: 'Primary sources from the early Church',
            },
          ]} />

          {/* The Way cross-link */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <p className="t-meta mb-2" style={{ color: 'var(--color-text-muted)' }}>
              Arguments point toward God. The Way invites you to encounter him.
            </p>
            <Link
              href="/way"
              className="t-caps text-xs"
              style={{ color: 'var(--color-accent-gold)' }}
            >
              Explore The Way →
            </Link>
          </div>
        </main>
      </div>

      {/* Semantic Defense Modal */}
      <AnimatePresence>
        {activeSemanticDefense && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-12"
            style={{ background: 'rgba(10,14,26,0.95)' }}
          >
            <SemanticDefenseSlideshow
              defense={semanticDefenses.find((sd) => sd.id === activeSemanticDefense)!}
              onClose={() => setActiveSemanticDefense(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
