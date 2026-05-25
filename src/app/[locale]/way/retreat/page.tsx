'use client';

import { useState, useEffect } from 'react';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import RetreatProgress from '@/components/way/RetreatProgress';
import RetreatDayCard from '@/components/way/RetreatDayCard';
import { retreatDays } from '@/data/way/retreat';

const STORAGE_KEY = 'way-retreat-days';

export default function RetreatPage() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCompletedDays(JSON.parse(stored) as number[]);
    } catch {
      // ignore
    }
  }, []);

  const toggleDay = (dayNum: number) => {
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
      <WayPageHeader
        eyebrow="The Retreat"
        title="Seven Days with Christ"
        subtitle="A self-contained spiritual experience — done in seven days or seven weeks."
        icon="🕯"
      />

      <div style={{ marginBottom: '2rem' }}>
        <RetreatProgress completedDays={completedDays} totalDays={7} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {retreatDays.map((day) => (
          <div key={day.id}>
            <RetreatDayCard
              day={day}
              completed={completedDays.includes(day.day)}
              onClick={() => toggleDay(day.day)}
            />
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={`/way/retreat/${day.day}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--color-accent-gold)',
                  textDecoration: 'none',
                }}
              >
                Enter Day {day.day} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </WayLayout>
  );
}
