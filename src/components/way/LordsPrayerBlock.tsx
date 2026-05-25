// src/components/way/LordsPrayerBlock.tsx
'use client';

import { useState } from 'react';
import { LordsPrayerPhrase } from '@/types/way';

interface Props {
  phrases: LordsPrayerPhrase[];
}

export default function LordsPrayerBlock({ phrases }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {phrases.map((phrase, i) => {
        const isOpen = openId === phrase.id;
        return (
          <div key={phrase.id}>
            <button
              onClick={() => toggle(phrase.id)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '1.25rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
              aria-expanded={isOpen}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {phrase.greekOriginal}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.3,
                }}
              >
                {phrase.phrase}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  marginTop: '0.125rem',
                }}
              >
                {isOpen ? 'Close ▲' : 'Reflect ▼'}
              </span>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 0 1.5rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.75,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {phrase.commentary}
                </p>
                {phrase.latinOriginal && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontStyle: 'italic',
                      fontSize: '0.8125rem',
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    Latin: {phrase.latinOriginal}
                  </p>
                )}
                <blockquote
                  style={{
                    margin: 0,
                    padding: '0.875rem 1rem',
                    borderLeft: '3px solid var(--color-accent-gold)',
                    background: 'rgba(201,168,76,0.05)',
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.7,
                  }}
                >
                  {phrase.question}
                </blockquote>
              </div>
            )}

            {i < phrases.length - 1 && (
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid rgba(201,168,76,0.2)',
                  margin: 0,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
