// src/components/way/BeatitudeBlock.tsx
import { Beatitude } from '@/types/way';

interface Props {
  beatitude: Beatitude;
}

export default function BeatitudeBlock({ beatitude }: Props) {
  return (
    <div
      style={{
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {beatitude.greekText && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '0.875rem',
            color: '#9ca3af',
            margin: 0,
            lineHeight: 1.65,
          }}
        >
          {beatitude.greekText}
        </p>
      )}

      <h2
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          color: 'var(--color-text-primary)',
          margin: 0,
          lineHeight: 1.3,
        }}
      >
        {beatitude.text}
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.8,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {beatitude.application}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          color: 'var(--color-text-secondary)',
          margin: 0,
          borderLeft: '3px solid var(--color-accent-gold)',
          paddingLeft: '1rem',
        }}
      >
        {beatitude.reflection}
      </p>

      {beatitude.crossReferences.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {beatitude.crossReferences.map((ref) => (
            <span
              key={ref}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                background: 'rgba(139,115,85,0.08)',
                padding: '0.2rem 0.625rem',
                borderRadius: '999px',
                border: '1px solid rgba(139,115,85,0.2)',
              }}
            >
              {ref}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
