// src/components/way/LectioDivinaGuide.tsx
'use client';

import { useState } from 'react';

const STEPS = [
  {
    id: 'lectio',
    label: 'Read',
    latin: 'Lectio',
    instruction:
      'Read the passage aloud, slowly — once, maybe twice. Let the words land without analysing them. Notice if a particular word or phrase seems to arrest your attention, even slightly. Do not force it. Simply read.',
    timing: '3–5 minutes',
  },
  {
    id: 'meditatio',
    label: 'Meditate',
    latin: 'Meditatio',
    instruction:
      'Take the word or phrase that caught your attention. Repeat it slowly, as though tasting it. Turn it over. Let it expand. Ask: what does this reveal about God? What does it speak into my present life? This is not intellectual analysis — it is more like chewing.',
    timing: '5–10 minutes',
  },
  {
    id: 'oratio',
    label: 'Pray',
    latin: 'Oratio',
    instruction:
      'Speak back to God from what has arisen in you. Let the Word become prayer. It may be gratitude, confession, longing, or simply the word itself, offered back. You are not reporting to God; you are responding. Let the conversation be genuine.',
    timing: '5–10 minutes',
  },
  {
    id: 'contemplatio',
    label: 'Contemplate',
    latin: 'Contemplatio',
    instruction:
      'Rest in silence. Let go of words, thoughts, and effort. Simply be present to God and allow God to be present to you. If the mind wanders, gently return to stillness. This is not sleep — it is the deepest form of attention: receptive, open, quiet.',
    timing: '5–10 minutes',
  },
];

export default function LectioDivinaGuide() {
  const [step, setStep] = useState(0);

  const current = STEPS[step];

  return (
    <div
      style={{
        background: 'var(--color-bg-elevated)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '6px',
        overflow: 'hidden',
      }}
    >
      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setStep(i)}
            style={{
              flex: 1,
              padding: '0.875rem 0.5rem',
              background: i === step ? 'rgba(201,168,76,0.08)' : 'transparent',
              border: 'none',
              borderBottom: i === step ? '2px solid var(--color-accent-gold)' : '2px solid transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: i === step ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
              transition: 'all 0.2s ease',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Step content */}
      <div style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '0.8125rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.25rem',
            }}
          >
            {current.latin}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '1.5rem',
              color: 'var(--color-text-primary)',
              margin: 0,
            }}
          >
            {current.label}
          </h3>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            color: 'var(--color-text-primary)',
            margin: '0 0 1.25rem',
          }}
        >
          {current.instruction}
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'rgba(201,168,76,0.1)',
            borderRadius: '999px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
          }}
        >
          {current.timing}
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          style={{
            background: 'none',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '4px',
            padding: '0.375rem 0.875rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: step === 0 ? 'rgba(139,115,85,0.3)' : 'var(--color-text-secondary)',
            cursor: step === 0 ? 'default' : 'pointer',
          }}
        >
          Previous
        </button>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--color-text-secondary)',
          }}
        >
          {step + 1} / {STEPS.length}
        </span>
        <button
          onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
          disabled={step === STEPS.length - 1}
          style={{
            background: step === STEPS.length - 1 ? 'rgba(201,168,76,0.3)' : 'var(--color-accent-gold)',
            border: 'none',
            borderRadius: '4px',
            padding: '0.375rem 0.875rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#fff',
            cursor: step === STEPS.length - 1 ? 'default' : 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
