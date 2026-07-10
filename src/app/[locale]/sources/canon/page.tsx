'use client';

import { Link } from '@/i18n/navigation';
import { bibleTranslations, canonFormations, textualCriticismMethods } from '@/data/science-faith';
import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

export default function CanonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="t-meta flex items-center gap-2 mb-8" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/sources">Sources</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Canon & Translations</span>
      </div>

      <RevealOnScroll>
        <Eyebrow className="mb-3">SOURCES · CANON &amp; TRANSLATIONS</Eyebrow>
        <h1 className="t-h1 mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Canon &amp; Translations</h1>
        <p className="t-body mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          How Scripture was recognized, transmitted, and translated — the formation of the canon, the great Bible translations, and the discipline of textual criticism.
        </p>
      </RevealOnScroll>

      <KeystoneDivider className="mb-10" />

      {/* Canon formation */}
      <section className="mb-16">
        <Eyebrow className="mb-6">HOW THE CANON FORMED</Eyebrow>
        <div className="space-y-6">
          {canonFormations.map((canon, i) => (
            <RevealOnScroll key={canon.id} delay={i * 0.06}>
              <CodexCard>
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <h2 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{canon.name}</h2>
                  <span className="t-meta px-2 py-0.5 capitalize" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{canon.testament} testament</span>
                </div>
                <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>{canon.description}</p>

                <Eyebrow className="mb-3">KEY MILESTONES</Eyebrow>
                <div className="relative mb-5">
                  <div className="absolute start-3 top-0 bottom-0 w-0.5" style={{ background: 'var(--color-border)' }} />
                  <div className="space-y-4">
                    {canon.keyMilestones.map((m) => (
                      <div key={m.date} className="relative ps-10">
                        <div className="absolute start-1.5 top-1.5 w-3 h-3 z-10" style={{ borderRadius: '50%', background: 'var(--color-accent-gold)', border: '3px solid var(--color-bg-primary)' }} />
                        <p className="t-eyebrow mb-1" style={{ color: 'var(--color-accent-gold)' }}>{m.date} — {m.event}</p>
                        <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{m.significance}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {canon.booksExcluded && canon.booksExcluded.length > 0 && (
                  <div className="mb-3">
                    <Eyebrow className="mb-2">BOOKS EXCLUDED</Eyebrow>
                    <ul className="space-y-1.5">
                      {canon.booksExcluded.map((b) => (
                        <li key={b.name} className="t-body text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                          <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span>
                          <span><strong style={{ color: 'var(--color-text-primary)' }}>{b.name}</strong> — {b.reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {canon.sources.map((s) => (
                    <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-text-muted)', fontSize: '0.65rem' }}>{s}</span>
                  ))}
                </div>
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-10" />

      {/* Bible translations */}
      <section className="mb-16">
        <Eyebrow className="mb-6">MAJOR BIBLE TRANSLATIONS</Eyebrow>
        <div className="grid md:grid-cols-2 gap-5">
          {bibleTranslations.map((translation, i) => (
            <RevealOnScroll key={translation.id} delay={i * 0.06}>
              <CodexCard className="h-full">
                <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
                  <h3 className="t-caps text-sm" style={{ color: 'var(--color-text-primary)' }}>{translation.name}</h3>
                </div>
                <p className="t-eyebrow mb-3" style={{ color: 'var(--color-accent-gold)' }}>{translation.year} AD · {translation.language}</p>
                <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>{translation.significance}</p>

                <p className="t-meta mb-1" style={{ color: 'var(--color-text-muted)' }}>Translator</p>
                <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{translation.translator}</p>

                <p className="t-meta mb-1" style={{ color: 'var(--color-text-muted)' }}>Source Texts</p>
                <p className="t-body text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{translation.sourceTexts}</p>

                {translation.controversy && (
                  <div className="mt-3 p-3" style={{ border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-accent-gold)' }}>
                    <p className="t-meta mb-1" style={{ color: 'var(--color-accent-gold)' }}>Controversy</p>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{translation.controversy}</p>
                  </div>
                )}
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider className="mb-10" />

      {/* Textual criticism methods */}
      <section>
        <Eyebrow className="mb-6">TEXTUAL CRITICISM METHODS</Eyebrow>
        <div className="space-y-6">
          {textualCriticismMethods.map((method, i) => (
            <RevealOnScroll key={method.id} delay={i * 0.06}>
              <CodexCard>
                <h2 className="t-caps text-sm mb-3" style={{ color: 'var(--color-text-primary)' }}>{method.name}</h2>
                <p className="t-body text-sm mb-5" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.85 }}>{method.description}</p>

                <div className="flex flex-col lg:flex-row gap-6 mb-4">
                  <div className="flex-1">
                    <Eyebrow className="mb-2">KEY SCHOLARS</Eyebrow>
                    <ul className="space-y-1.5">
                      {method.keyScholars.map((s) => (
                        <li key={s} className="t-body text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                          <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {method.keyManuscripts && method.keyManuscripts.length > 0 && (
                    <div className="flex-1">
                      <Eyebrow className="mb-2">KEY MANUSCRIPTS</Eyebrow>
                      <ul className="space-y-1.5">
                        {method.keyManuscripts.map((m) => (
                          <li key={m} className="t-body text-sm flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                            <span style={{ color: 'var(--color-accent-gold)', flexShrink: 0 }}>•</span> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Eyebrow className="mb-2">SIGNIFICANCE</Eyebrow>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>{method.significance}</p>

                <div className="flex flex-wrap gap-2">
                  {method.sources.map((s) => (
                    <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2, color: 'var(--color-text-muted)', fontSize: '0.65rem' }}>{s}</span>
                  ))}
                </div>
              </CodexCard>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </div>
  );
}
