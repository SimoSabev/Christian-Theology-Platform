'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import { retreatDays } from '@/data/way/retreat';

const STORAGE_KEY = 'way-retreat-days';

interface Props {
  params: Promise<{ day: string }>;
}

export default function RetreatDayPage({ params }: Props) {
  const { day: dayParam } = use(params);
  const dayNum = parseInt(dayParam, 10);

  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompletedDays(JSON.parse(stored) as number[]);
    } catch {
      // ignore
    }
  }, []);

  if (isNaN(dayNum) || dayNum < 1 || dayNum > 7) {
    notFound();
  }

  const day = retreatDays.find((d) => d.day === dayNum);
  if (!day) notFound();

  const isCompleted = completedDays.includes(dayNum);
  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 7 ? dayNum + 1 : null;

  const toggleComplete = () => {
    setCompletedDays((prev) => {
      const next = prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      {/* Header */}
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(201,168,76,0.25)', paddingBottom: '1.5rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.375rem',
          }}
        >
          Day {day.day} of 7
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {day.theme}
        </h1>
      </header>

      {/* Scripture */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Scripture</SectionLabel>
        <blockquote
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            fontStyle: 'italic',
            color: 'var(--color-text-primary)',
            lineHeight: 1.8,
            borderLeft: '3px solid var(--color-accent-gold)',
            paddingLeft: '1.25rem',
            margin: 0,
          }}
        >
          {day.scripture}
        </blockquote>
      </section>

      {/* Morning Prayer */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Morning Prayer</SectionLabel>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.9,
            color: 'var(--color-text-primary)',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '6px',
            padding: '1.5rem',
          }}
        >
          {day.morningPrayer}
        </div>
      </section>

      {/* Reflection */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Reflection</SectionLabel>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: 'var(--color-text-primary)',
            margin: 0,
          }}
        >
          {day.reflection}
        </p>
      </section>

      {/* Action */}
      <section style={{ marginBottom: '2rem' }}>
        <SectionLabel>Action Step</SectionLabel>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--color-text-primary)',
            background: 'rgba(201,168,76,0.07)',
            borderRadius: '6px',
            padding: '1.25rem 1.5rem',
            borderLeft: '4px solid var(--color-accent-gold)',
          }}
        >
          {day.action}
        </div>
      </section>

      {/* Evening Prayer */}
      <section style={{ marginBottom: '2.5rem' }}>
        <SectionLabel>Evening Prayer</SectionLabel>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.9,
            color: 'var(--color-text-primary)',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '6px',
            padding: '1.5rem',
          }}
        >
          {day.eveningPrayer}
        </div>
      </section>

      {/* Completion + nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <button
          onClick={toggleComplete}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            border: '1px solid rgba(201,168,76,0.5)',
            background: isCompleted ? 'var(--color-accent-gold)' : 'transparent',
            color: isCompleted ? '#fff' : 'var(--color-text-primary)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {isCompleted ? '✓ Day Complete' : 'Mark as Complete'}
        </button>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {prevDay && (
            <a href={`/way/retreat/${prevDay}`} style={navLinkStyle}>
              ← Day {prevDay}
            </a>
          )}
          {nextDay && (
            <a href={`/way/retreat/${nextDay}`} style={navLinkStyle}>
              Day {nextDay} →
            </a>
          )}
          {!nextDay && (
            <a href="/way/retreat" style={navLinkStyle}>← Back to Retreat</a>
          )}
        </div>
      </div>
    </WayLayout>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.6rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--color-accent-gold)',
        marginBottom: '0.75rem',
      }}
    >
      {children}
    </div>
  );
}

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--color-accent-gold)',
  textDecoration: 'none',
  padding: '0.375rem 0.75rem',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: '4px',
};
