import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import PrayerTypeCard from '@/components/way/PrayerTypeCard';
import { prayerTypes } from '@/data/way/prayer-types';
import { churchFatherQuotes } from '@/data/sources/quotes';

const prayerQuotes = churchFatherQuotes.filter((q) => q.themes.includes('Prayer')).slice(0, 3);

export const metadata: Metadata = {
  title: 'How to Pray | The Way | Theosis',
  description: 'Practical, accessible prayer guides for every level — from your first prayer to the mystical tradition.',
};

const DEEPER_LINKS = [
  { href: '/way/pray/lords-prayer', icon: '✝', label: "The Lord's Prayer" },
  { href: '/way/pray/lectio-divina', icon: '📖', label: 'Lectio Divina' },
  { href: '/way/pray/jesus-prayer', icon: '🕯', label: 'The Jesus Prayer' },
  { href: '/way/pray/silent-prayer', icon: '◦', label: 'Silent Prayer' },
];

export default function PrayPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Pray"
        title="Prayer"
        subtitle="Prayer is not performance. It is conversation."
        icon="🙏"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}
      >
        {prayerTypes.map((pt) => (
          <PrayerTypeCard key={pt.id} prayerType={pt} />
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
          Go Deeper
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {DEEPER_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1rem',
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: '4px',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
                background: 'var(--color-bg-secondary)',
                transition: 'border-color 0.2s',
              }}
            >
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {prayerQuotes.length > 0 && (
        <section style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '1.25rem',
            }}
          >
            What the Church Fathers Said About Prayer
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
            {prayerQuotes.map((q) => (
              <blockquote
                key={q.id}
                style={{
                  paddingLeft: '1rem',
                  borderLeft: '2px solid rgba(201,168,76,0.4)',
                  margin: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.375rem',
                  }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-gold)',
                  }}
                >
                  — {q.author}, <em>{q.work}</em>
                </footer>
              </blockquote>
            ))}
          </div>
          <a
            href="/sources/church-fathers?topic=prayer"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              textDecoration: 'none',
            }}
          >
            See all church father quotes on prayer →
          </a>
        </section>
      )}
    </WayLayout>
  );
}
