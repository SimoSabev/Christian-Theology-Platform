// src/components/way/PrayerTypeCard.tsx
import { PrayerType } from '@/types/way';

interface Props {
  prayerType: PrayerType;
}

export default function PrayerTypeCard({ prayerType }: Props) {
  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
        <span style={{ fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}>
          {prayerType.icon}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap', marginBottom: '0.375rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '1.375rem',
                color: 'var(--color-text-primary)',
                margin: 0,
              }}
            >
              {prayerType.title}
            </h3>
            <span
              style={{
                fontSize: '0.6875rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                background: 'rgba(139,115,85,0.1)',
                padding: '0.125rem 0.5rem',
                borderRadius: '999px',
              }}
            >
              {prayerType.tradition}
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-primary)',
              lineHeight: 1.65,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }}
          >
            {prayerType.description}
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
          }}
        >
          {prayerType.durationMinutes} min
        </span>
        <button
          style={{
            background: 'var(--color-accent-gold)',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '0.375rem 1rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.6875rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Begin
        </button>
      </div>
    </div>
  );
}
