// src/components/way/RetreatDayCard.tsx
import { RetreatDay } from '@/types/way';

interface Props {
  day: RetreatDay;
  completed?: boolean;
  onClick?: () => void;
}

export default function RetreatDayCard({ day, completed = false, onClick }: Props) {
  const preview = day.morningPrayer.slice(0, 100) + '…';

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        padding: '1.5rem',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
    >
      {completed && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(201,168,76,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <span style={{ fontSize: '2.5rem', opacity: 0.25 }}>✓</span>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: completed ? 'var(--color-accent-gold)' : 'rgba(201,168,76,0.15)',
            border: '2px solid var(--color-accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.875rem',
            color: completed ? '#fff' : 'var(--color-accent-gold)',
            flexShrink: 0,
          }}
        >
          {day.day}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '1.25rem',
              color: 'var(--color-text-primary)',
              margin: '0 0 0.375rem',
            }}
          >
            {day.theme}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              margin: '0 0 0.5rem',
            }}
          >
            {day.scripture}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--color-text-primary)',
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            {preview}
          </p>
        </div>
      </div>
    </div>
  );
}
