// src/components/way/WayOnboarding.tsx
'use client';

import { useState, useEffect } from 'react';
import { JourneyStage } from '@/types/way';

interface Props {
  stages: JourneyStage[];
  onComplete: (stageId: string) => void;
}

const Q1_OPTIONS = [
  { label: 'Just curious — I don\'t know what I believe', stageId: 'awakening' },
  { label: 'I\'m open and exploring, but haven\'t committed', stageId: 'formation' },
  { label: 'I believe and want to grow deeper', stageId: 'deepening' },
  { label: 'I\'ve been on this road for years', stageId: 'mature-faith' },
];

const Q2_OPTIONS = [
  { label: 'I want to learn how to pray' },
  { label: 'I want to understand God\'s love' },
  { label: 'I want to know how to live this out' },
  { label: 'I just want to look around for now' },
];

const Q3_OPTIONS = [
  { label: 'Reading and reflection' },
  { label: 'Structured guides and steps' },
  { label: 'Stories and testimonies' },
  { label: 'Quiet practice and silence' },
];

export default function WayOnboarding({ stages, onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ stageId?: string; q2?: string; q3?: string }>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('way-onboarding');
      if (stored) {
        const parsed = JSON.parse(stored) as { stageId: string };
        if (parsed.stageId) {
          onComplete(parsed.stageId);
        }
      }
    } catch {
      // ignore
    }
  }, [onComplete]);

  const complete = (stageId: string) => {
    try {
      localStorage.setItem('way-onboarding', JSON.stringify({ stageId, completedAt: Date.now() }));
    } catch {
      // ignore
    }
    onComplete(stageId);
  };

  const resolvedStageId = answers.stageId ?? stages[0]?.id ?? 'awakening';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '36rem', width: '100%' }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i <= step ? 'var(--color-accent-gold)' : 'rgba(201,168,76,0.25)',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>

        {step === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '1.75rem',
                color: 'var(--color-text-primary)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Where are you right now spiritually?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {Q1_OPTIONS.map((opt) => (
                <button
                  key={opt.stageId}
                  onClick={() => {
                    setAnswers((a) => ({ ...a, stageId: opt.stageId }));
                    setStep(1);
                  }}
                  style={{
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '6px',
                    padding: '1rem 1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.5,
                    transition: 'border-color 0.2s ease, background 0.2s ease',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '1.75rem',
                color: 'var(--color-text-primary)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              What draws you here?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {Q2_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => {
                    setAnswers((a) => ({ ...a, q2: opt.label }));
                    setStep(2);
                  }}
                  style={{
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '6px',
                    padding: '1rem 1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.5,
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '1.75rem',
                color: 'var(--color-text-primary)',
                textAlign: 'center',
                margin: 0,
              }}
            >
              How do you prefer to learn?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {Q3_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => {
                    setAnswers((a) => ({ ...a, q3: opt.label }));
                    complete(resolvedStageId);
                  }}
                  style={{
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid rgba(201,168,76,0.3)',
                    borderRadius: '6px',
                    padding: '1rem 1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.5,
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
