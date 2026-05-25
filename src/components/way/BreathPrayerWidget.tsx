// src/components/way/BreathPrayerWidget.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

interface Props {
  inhaleWord?: string;
  exhaleWord?: string;
}

type Phase = 'inhale' | 'hold' | 'exhale';

export default function BreathPrayerWidget({
  inhaleWord = 'Lord Jesus Christ',
  exhaleWord = 'have mercy on me',
}: Props) {
  const [phase, setPhase] = useState<Phase>('inhale');
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseRef = useRef<Phase>('inhale');

  const PHASES: { phase: Phase; duration: number }[] = [
    { phase: 'inhale', duration: 4000 },
    { phase: 'hold', duration: 2000 },
    { phase: 'exhale', duration: 4000 },
  ];

  const advance = () => {
    const current = phaseRef.current;
    const idx = PHASES.findIndex((p) => p.phase === current);
    const next = PHASES[(idx + 1) % PHASES.length];
    phaseRef.current = next.phase;
    setPhase(next.phase);
  };

  useEffect(() => {
    if (!active) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    // Build variable interval using setTimeout chain
    let cancelled = false;
    const run = () => {
      const current = phaseRef.current;
      const idx = PHASES.findIndex((p) => p.phase === current);
      const duration = PHASES[idx].duration;
      setTimeout(() => {
        if (cancelled) return;
        advance();
        run();
      }, duration);
    };
    run();
    return () => {
      cancelled = true;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const phaseLabel: Record<Phase, string> = {
    inhale: `Inhale — ${inhaleWord}`,
    hold: 'Hold',
    exhale: `Exhale — ${exhaleWord}`,
  };

  const circleScale = phase === 'inhale' ? 1.4 : phase === 'hold' ? 1.4 : 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        padding: '2.5rem 1.5rem',
      }}
    >
      <div
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          border: '2px solid var(--color-accent-gold)',
          background: 'rgba(201,168,76,0.08)',
          transform: `scale(${circleScale})`,
          transition: `transform ${phase === 'inhale' ? '4s' : phase === 'hold' ? '0.1s' : '4s'} ease-in-out`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(201,168,76,0.15)',
            animation: 'breathe 10s ease-in-out infinite',
          }}
        />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '1.0625rem',
          color: 'var(--color-text-primary)',
          margin: 0,
          textAlign: 'center',
          minHeight: '1.6em',
          transition: 'opacity 0.5s ease',
        }}
      >
        {active ? phaseLabel[phase] : 'Press Begin to start'}
      </p>

      <button
        onClick={() => {
          if (!active) {
            phaseRef.current = 'inhale';
            setPhase('inhale');
          }
          setActive((a) => !a);
        }}
        style={{
          background: active ? 'transparent' : 'var(--color-accent-gold)',
          border: '1px solid var(--color-accent-gold)',
          borderRadius: '4px',
          padding: '0.5rem 1.25rem',
          fontFamily: 'var(--font-display)',
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: active ? 'var(--color-accent-gold)' : '#fff',
          cursor: 'pointer',
        }}
      >
        {active ? 'Pause' : 'Begin'}
      </button>
    </div>
  );
}
