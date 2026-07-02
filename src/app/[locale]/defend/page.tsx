'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { categories } from '@/data/arguments';
import { Eyebrow, KeystoneDivider, SectionMark } from '@/components/ornament';
import RevealOnScroll from '@/components/motion/RevealOnScroll';
import CodexCard from '@/components/reader/CodexCard';

const CATEGORY_GLYPHS: Record<string, 'cross' | 'patee' | 'longCross' | 'plusCircle' | 'chiRho' | 'section' | 'diamond'> = {
  cosmological: 'plusCircle',
  ontological:  'chiRho',
  teleological: 'cross',
  moral:        'patee',
  historical:   'longCross',
};

const FURTHER_STUDY: {
  href: string;
  glyph: 'cross' | 'patee' | 'longCross' | 'plusCircle' | 'chiRho' | 'section' | 'diamond';
  name: string;
  description: string;
  cta: string;
}[] = [
  {
    href: '/defend/prophecy',
    glyph: 'chiRho',
    name: 'Fulfilled Prophecy',
    description: 'Messianic prophecies fulfilled in Jesus, prophecies against the nations verified in history, and the mathematics of coincidental fulfillment.',
    cta: 'Explore prophecy',
  },
  {
    href: '/defend/theology',
    glyph: 'section',
    name: 'Theology Explorer',
    description: 'Core Christian doctrines, their biblical foundations, historical development, and the methods used to defend them.',
    cta: 'Explore theology',
  },
  {
    href: '/defend/science',
    glyph: 'plusCircle',
    name: 'Science & Faith',
    description: 'Believing scientists whose faith shaped their pursuit of nature, and a fresh look at the alleged conflicts between science and Scripture.',
    cta: 'Explore science & faith',
  },
  {
    href: '/defend/worldviews',
    glyph: 'diamond',
    name: 'World Religions & Worldviews',
    description: 'A comparative survey of major world religions and secular worldviews, their key differences from Christianity, and the apologetic issues they raise.',
    cta: 'Explore worldviews',
  },
];

export default function DefendPage() {
  const t = useTranslations('defend');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <Eyebrow className="mb-4">{t('eyebrow') ?? 'APOLOGETICS'}</Eyebrow>
          <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{t('title')}</h1>
          <p className="t-body max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem' }}>{t('subtitle')}</p>
        </div>
      </RevealOnScroll>

      <KeystoneDivider className="mb-12" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {categories.map((cat, i) => (
          <RevealOnScroll key={cat.id} delay={i * 0.08}>
            <Link href={`/defend/atheism/${cat.id}`} className="block">
              <CodexCard className="h-full" as="article">
                <div className="mb-4">
                  <SectionMark glyph={CATEGORY_GLYPHS[cat.id] ?? 'diamond'} size={22} />
                </div>
                <h2 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{cat.name}</h2>
                <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{cat.description}</p>
                <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>
                  {cat.argumentCount} {cat.argumentCount === 1 ? 'argument' : 'arguments'} →
                </div>
              </CodexCard>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <KeystoneDivider className="mb-16" />

      {/* Further study — dedicated deep-dive pages */}
      <section className="mb-16">
        <RevealOnScroll>
          <div className="text-center mb-8">
            <Eyebrow className="mb-3">FURTHER STUDY</Eyebrow>
            <h2 className="t-h2" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)' }}>Dedicated Deep Dives</h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FURTHER_STUDY.map((item, i) => (
            <RevealOnScroll key={item.href} delay={i * 0.08}>
              <Link href={item.href} className="block">
                <CodexCard className="h-full" as="article">
                  <div className="mb-4">
                    <SectionMark glyph={item.glyph} size={22} />
                  </div>
                  <h3 className="t-caps text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{item.name}</h3>
                  <p className="t-body text-sm mb-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
                  <div className="t-eyebrow" style={{ color: 'var(--color-accent-gold)' }}>
                    {item.cta} →
                  </div>
                </CodexCard>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <KeystoneDivider />

      <RevealOnScroll>
        <div className="mt-12 text-center">
          <Eyebrow className="mb-3">ALSO</Eyebrow>
          <Link
            href="/defend/cults"
            className="inline-block px-6 py-3 t-caps text-xs border"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}
          >
            Against Cults & Heresies
          </Link>
        </div>
      </RevealOnScroll>
    </div>
  );
}
