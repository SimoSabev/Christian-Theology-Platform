import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import ScripturePassageMeditation from '@/components/way/ScripturePassageMeditation';
import { lovePassages } from '@/data/way/love-passages';

export const metadata: Metadata = {
  title: 'Encountering Love | The Way | Theosis',
  description: "God is love — explore the heart of the Gospel through Scripture, story, and the lives of the saints.",
};

const NAV_CARDS = [
  { href: '/way/love/prodigal-son', icon: '🕯', label: 'The Prodigal Son', desc: 'Luke 15:11-32 — read slowly, one phrase at a time.' },
  { href: '/way/love/passages', icon: '📖', label: '7 Passages on Love', desc: 'Romans 8, Psalm 139, John 3:16, and four more.' },
  { href: '/way/love/saints', icon: '✦', label: 'Saints Who Radiated Love', desc: 'Francis, Thérèse, Mother Teresa, Kolbe.' },
  { href: '/way/love/letter', icon: '✉', label: 'A Letter from God', desc: 'A devotional meditation — written as if from the Father.' },
];

export default function LovePage() {
  const featuredPassage = lovePassages.find((p) => p.reference.includes('Romans')) ?? lovePassages[0];

  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="Encountering Love"
        title="Encountering Love"
        subtitle={'"God is love." — 1 John 4:8'}
        icon="❤"
      />

      <blockquote
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontStyle: 'italic',
          color: 'var(--color-text-primary)',
          lineHeight: 1.7,
          margin: '0 0 2.5rem',
        }}
      >
        "God is love."
        <footer
          style={{
            fontStyle: 'normal',
            fontSize: '0.85rem',
            marginTop: '0.375rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          — 1 John 4:8
        </footer>
      </blockquote>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {NAV_CARDS.map((c) => (
          <a
            key={c.href}
            href={c.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              padding: '1.25rem',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '6px',
              background: 'var(--color-bg-secondary)',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{c.icon}</span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-accent-gold)',
              }}
            >
              {c.label}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
              {c.desc}
            </p>
          </a>
        ))}
      </div>

      {featuredPassage && (
        <section>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem',
            }}
          >
            Featured Passage
          </div>
          <ScripturePassageMeditation passage={featuredPassage} />
        </section>
      )}
    </WayLayout>
  );
}
