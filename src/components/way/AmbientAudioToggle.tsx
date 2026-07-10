'use client';

import { useState } from 'react';

const TRACKS = [
  { id: 'silence', label: 'Silence' },
  { id: 'gregorian', label: 'Gregorian Chant' },
  { id: 'byzantine', label: 'Byzantine Chant' },
];

export default function AmbientAudioToggle() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('silence');

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50,
      }}
    >
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 0.5rem)',
            right: 0,
            background: 'var(--color-bg-primary)',
            border: '1px solid var(--color-accent-gold)',
            borderRadius: '6px',
            padding: '1rem',
            minWidth: '180px',
            boxShadow: '0 4px 16px rgba(44,31,14,0.12)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.55rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.75rem',
            }}
          >
            Ambient Sound
          </div>
          {TRACKS.map((track) => (
            <label
              key={track.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-text-primary)',
              }}
            >
              <input
                type="radio"
                name="ambient"
                value={track.id}
                checked={selected === track.id}
                onChange={() => setSelected(track.id)}
                style={{ accentColor: 'var(--color-accent-gold)' }}
              />
              {track.label}
            </label>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle ambient audio"
        aria-expanded={open}
        style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          border: '1px solid var(--color-accent-gold)',
          background: 'var(--color-bg-primary)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          boxShadow: '0 2px 8px rgba(44,31,14,0.1)',
          color: selected === 'silence' ? 'var(--color-text-secondary)' : 'var(--color-accent-gold)',
          transition: 'all 0.2s ease',
        }}
      >
        🎧
      </button>
    </div>
  );
}
