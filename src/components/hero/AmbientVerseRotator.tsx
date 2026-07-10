// src/components/hero/AmbientVerseRotator.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { AMBIENT_VERSES } from '@/data/verses/ambient';

const TYPE_CHAR_MS = 18;     // typewriter speed
const HOLD_MS = 30_000;      // 30s dwell once typed
const FADE_MS = 1200;        // fade-out before next verse

export default function AmbientVerseRotator() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (reduce) return; // hidden under reduced motion
    if (paused) return;

    const verse = AMBIENT_VERSES[index]!.text;
    let cancelled = false;

    // Typewriter
    setTyped('');
    setVisible(true);
    let i = 0;
    function typeNext() {
      if (cancelled) return;
      if (i <= verse.length) {
        setTyped(verse.slice(0, i));
        i += 1;
        timers.current.push(window.setTimeout(typeNext, TYPE_CHAR_MS));
      } else {
        // hold
        timers.current.push(window.setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          // fade out, then advance
          timers.current.push(window.setTimeout(() => {
            if (cancelled) return;
            setIndex((n) => (n + 1) % AMBIENT_VERSES.length);
          }, FADE_MS));
        }, HOLD_MS));
      }
    }
    typeNext();

    return () => {
      cancelled = true;
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [index, paused, reduce]);

  if (reduce) return null;

  const verse = AMBIENT_VERSES[index]!;

  return (
    <div
      className="absolute bottom-6 start-6 max-w-sm select-none pointer-events-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden
      style={{
        opacity: visible ? 0.7 : 0,
        transition: `opacity ${FADE_MS}ms var(--motion-ease-out)`,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: 14,
          lineHeight: 1.55,
          color: 'var(--color-accent-gold)',
        }}
      >
        &ldquo;{typed}<span style={{ opacity: 0.6 }}>|</span>&rdquo;
      </div>
      <div className="t-eyebrow mt-1" style={{ fontSize: 9, letterSpacing: '0.4em' }}>
        — {verse.ref.toUpperCase().replace(/ /g, ' · ')}
      </div>
    </div>
  );
}
