// src/components/way/DisciplineCard.tsx
import { SpiritualDiscipline } from '@/types/way';

interface Props {
  discipline: SpiritualDiscipline;
}

const CATEGORY_COLORS: Record<string, { bg: string; color: string }> = {
  Abstinence: { bg: 'rgba(59,130,246,0.1)', color: '#3b82f6' },
  Engagement: { bg: 'rgba(201,168,76,0.12)', color: 'var(--color-accent-gold)' },
};

export default function DisciplineCard({ discipline }: Props) {
  const color = CATEGORY_COLORS[discipline.category] ?? { bg: 'rgba(139,115,85,0.1)', color: 'var(--color-text-secondary)' };

  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '6px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.875rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {discipline.name}
        </h3>
        <span
          style={{
            fontSize: '0.6rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: color.color,
            background: color.bg,
            padding: '0.125rem 0.5rem',
            borderRadius: '999px',
          }}
        >
          {discipline.category}
        </span>
        {discipline.duration && (
          <span
            style={{
              fontSize: '0.6rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            {discipline.duration}
          </span>
        )}
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {discipline.description}
      </p>

      <div
        style={{
          background: 'rgba(201,168,76,0.06)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '4px',
          padding: '1rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.5rem',
          }}
        >
          Start today
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {discipline.starterPractice}
        </p>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-secondary)',
        }}
      >
        Tradition: {discipline.tradition}
      </div>
    </div>
  );
}
