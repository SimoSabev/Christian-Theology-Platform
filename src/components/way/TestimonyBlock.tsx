// src/components/way/TestimonyBlock.tsx
import { Testimony } from '@/types/way';

interface Props {
  testimony: Testimony;
}

export default function TestimonyBlock({ testimony }: Props) {
  return (
    <blockquote
      style={{
        margin: 0,
        padding: '1.25rem 1.5rem',
        borderLeft: '3px solid var(--color-accent-gold)',
        background: 'rgba(201,168,76,0.04)',
        borderRadius: '0 4px 4px 0',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '1.0625rem',
          lineHeight: 1.75,
          color: 'var(--color-text-primary)',
          margin: '0 0 1rem',
        }}
      >
        &ldquo;{testimony.quote}&rdquo;
      </p>
      <footer>
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid rgba(201,168,76,0.2)',
            margin: '0 0 0.75rem',
          }}
        />
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.625rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-primary)',
            marginBottom: '0.25rem',
          }}
        >
          {testimony.name}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.5rem',
          }}
        >
          {testimony.source}
        </div>
        {testimony.context && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            {testimony.context}
          </p>
        )}
      </footer>
    </blockquote>
  );
}
