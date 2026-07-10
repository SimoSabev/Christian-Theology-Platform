// src/components/way/JourneyStageDetail.tsx
import { JourneyStage } from '@/types/way';

interface Props {
  stage: JourneyStage;
}

export default function JourneyStageDetail({ stage }: Props) {
  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '2rem',
            color: 'var(--color-text-primary)',
            margin: '0 0 0.5rem',
          }}
        >
          {stage.name}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {stage.description}
        </p>
      </div>

      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.625rem',
          }}
        >
          Characteristics
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.375rem',
          }}
        >
          {stage.characteristics.map((c) => (
            <li
              key={c}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.6,
              }}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.625rem',
          }}
        >
          Practices
        </div>
        <ol
          style={{
            margin: 0,
            paddingLeft: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.375rem',
          }}
        >
          {stage.practices.map((p) => (
            <li
              key={p}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.6,
              }}
            >
              {p}
            </li>
          ))}
        </ol>
      </div>

      <blockquote
        style={{
          margin: 0,
          padding: '1rem 1.25rem',
          borderLeft: '3px solid var(--color-accent-gold)',
          background: 'rgba(201,168,76,0.05)',
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '1rem',
          color: 'var(--color-text-primary)',
          lineHeight: 1.7,
        }}
      >
        {stage.scripture}
      </blockquote>
    </div>
  );
}
