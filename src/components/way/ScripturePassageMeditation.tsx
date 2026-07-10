// src/components/way/ScripturePassageMeditation.tsx
'use client';

import { useState } from 'react';
import { LovePassage } from '@/types/way';

interface Props {
  passage: LovePassage;
}

export default function ScripturePassageMeditation({ passage }: Props) {
  const [showMeditation, setShowMeditation] = useState(true);

  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {/* Scripture pane */}
        <div
          style={{
            flex: '1 1 280px',
            padding: '2rem',
            borderRight: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              marginBottom: '1rem',
            }}
          >
            {passage.theme}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.125rem',
              lineHeight: 2.0,
              color: 'var(--color-text-primary)',
              margin: '0 0 1.25rem',
            }}
          >
            {passage.text}
          </p>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            {passage.reference} · {passage.translation}
          </div>
        </div>

        {/* Meditation pane */}
        <div style={{ flex: '1 1 240px', padding: '2rem', background: 'var(--color-bg-secondary)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
              }}
            >
              Meditate
            </div>
            <button
              onClick={() => setShowMeditation((s) => !s)}
              style={{
                background: 'none',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: '0.55rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                padding: '0.2rem 0.5rem',
              }}
            >
              {showMeditation ? 'Hide' : 'Show'}
            </button>
          </div>
          {showMeditation && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '0.9375rem',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
                margin: 0,
              }}
            >
              {passage.meditation}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
