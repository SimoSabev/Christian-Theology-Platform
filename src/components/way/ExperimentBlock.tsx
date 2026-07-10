// src/components/way/ExperimentBlock.tsx

interface Props {
  title: string;
  description: string;
  steps: string[];
  commitment: number;
}

export default function ExperimentBlock({ title, description, steps, commitment }: Props) {
  return (
    <div
      style={{
        background: 'rgba(26,20,16,0.04)',
        border: '1px solid rgba(201,168,76,0.3)',
        borderRadius: '6px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-accent-gold)',
        }}
      >
        Try This
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '1.375rem',
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {description}
      </p>

      <ol
        style={{
          margin: 0,
          paddingLeft: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        {steps.map((step, i) => (
          <li
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              color: 'var(--color-text-primary)',
            }}
          >
            {step}
          </li>
        ))}
      </ol>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff',
            background: 'var(--color-accent-gold)',
            padding: '0.25rem 0.75rem',
            borderRadius: '999px',
          }}
        >
          Commitment: {commitment} {commitment === 1 ? 'day' : 'days'}
        </span>
      </div>
    </div>
  );
}
