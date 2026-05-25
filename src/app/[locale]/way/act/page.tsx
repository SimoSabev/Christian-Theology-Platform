import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import BeatitudeBlock from '@/components/way/BeatitudeBlock';
import { beatitudes } from '@/data/way/beatitudes';

export const metadata: Metadata = {
  title: 'How to Act for Christ | The Way | Theosis',
  description: 'Discipleship made concrete — the Sermon on the Mount as a life curriculum.',
};

const NAV_CARDS = [
  { href: '/way/act/sermon-on-the-mount', icon: '✦', label: 'Sermon on the Mount', desc: 'Matthew 5–7 as a blueprint for life.' },
  { href: '/way/act/disciplines', icon: '🕯', label: 'Spiritual Disciplines', desc: 'The classic practices of abstinence and engagement.' },
  { href: '/way/act/love-your-enemies', icon: '❤', label: 'Love Your Enemies', desc: "The most radical command Jesus ever gave." },
];

export default function ActPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Act"
        title="How to Act for Christ"
        subtitle={'"Faith without works is dead." — James 2:26'}
        icon="✝"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
        {NAV_CARDS.map((c) => (
          <a
            key={c.href}
            href={c.href}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem',
              border: '1px solid rgba(201,168,76,0.3)',
              borderRadius: '6px',
              background: 'var(--color-bg-secondary)',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{c.icon}</span>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  marginBottom: '0.25rem',
                }}
              >
                {c.label}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                {c.desc}
              </p>
            </div>
          </a>
        ))}
      </div>

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
          The Beatitudes — a Taste
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {beatitudes.slice(0, 3).map((b) => (
            <BeatitudeBlock key={b.id} beatitude={b} />
          ))}
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a
            href="/way/act/sermon-on-the-mount"
            style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-accent-gold)', textDecoration: 'none' }}
          >
            Read all eight →
          </a>
        </div>
      </section>
    </WayLayout>
  );
}
