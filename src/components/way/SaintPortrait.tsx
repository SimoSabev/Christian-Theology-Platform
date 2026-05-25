// src/components/way/SaintPortrait.tsx
'use client';

import { useState } from 'react';
import { Saint } from '@/types/way';

interface Props {
  saint: Saint;
}

export default function SaintPortrait({ saint }: Props) {
  const [expanded, setExpanded] = useState(false);
  const bioPreview = saint.biography.slice(0, 150);
  const showToggle = saint.biography.length > 150;

  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.125rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--color-text-primary)',
            margin: '0 0 0.25rem',
          }}
        >
          {saint.name}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
            }}
          >
            {saint.dates}
          </span>
          <span
            style={{
              fontSize: '0.6rem',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--color-accent-gold)',
              padding: '0.125rem 0.5rem',
              borderRadius: '999px',
            }}
          >
            {saint.tradition}
          </span>
          {saint.feastDay && (
            <span
              style={{
                fontSize: '0.6rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
              }}
            >
              Feast: {saint.feastDay}
            </span>
          )}
        </div>
      </div>

      <div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {expanded ? saint.biography : bioPreview + (showToggle ? '…' : '')}
        </p>
        {showToggle && (
          <button
            onClick={() => setExpanded((e) => !e)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              padding: '0.375rem 0',
              marginTop: '0.25rem',
            }}
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <blockquote
        style={{
          margin: 0,
          padding: '0.875rem 1.125rem',
          borderLeft: '3px solid var(--color-accent-gold)',
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '1.0625rem',
          color: 'var(--color-text-primary)',
          lineHeight: 1.7,
          background: 'rgba(201,168,76,0.04)',
        }}
      >
        &ldquo;{saint.quote}&rdquo;
      </blockquote>

      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.5rem',
          }}
        >
          Key Practices
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: '1.125rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {saint.practices.map((p) => (
            <li
              key={p}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--color-text-primary)',
                lineHeight: 1.55,
              }}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
