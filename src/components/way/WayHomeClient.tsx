'use client';

import { useState, useEffect } from 'react';
import WayOnboarding from './WayOnboarding';
import JourneyStageMap from './JourneyStageMap';
import RetreatProgress from './RetreatProgress';
import WayLayout from './WayLayout';
import WayNavSidebar from './WayNavSidebar';
import WayPageHeader from './WayPageHeader';
import { journeyStages } from '@/data/way/journey-stages';
import { JourneyStage } from '@/types/way';

const SECTIONS = [
  { href: '/way/pray', icon: '🙏', title: 'How to Pray', desc: 'Practical guides for every level — from your first prayer to the mystical tradition.' },
  { href: '/way/why-pray', icon: '✦', title: 'Why Pray', desc: 'For the skeptic who asks: "What is the point?" An honest answer.' },
  { href: '/way/act', icon: '✝', title: 'How to Act', desc: 'The Sermon on the Mount as a life curriculum. Discipleship made concrete.' },
  { href: '/way/love', icon: '❤', title: 'Encountering Love', desc: 'The Prodigal Son, the saints, 1 Corinthians 13 — the heart of the Gospel.' },
  { href: '/way/skeptic', icon: '?', title: 'For the Skeptic', desc: "You don't have to believe to start here. Just look." },
];

export default function WayHomeClient() {
  const [onboarded, setOnboarded] = useState<boolean | null>(null);
  const [currentStageId, setCurrentStageId] = useState<string>(journeyStages[0]?.id ?? '');
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(journeyStages[0]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('way-onboarding');
      if (stored) {
        const parsed = JSON.parse(stored) as { stageId: string };
        setCurrentStageId(parsed.stageId ?? journeyStages[0]?.id ?? '');
        setOnboarded(true);
      } else {
        setOnboarded(false);
      }
      const days = localStorage.getItem('way-retreat-days');
      if (days) setCompletedDays(JSON.parse(days) as number[]);
    } catch {
      setOnboarded(false);
    }
    setSelectedStage(journeyStages[0]);
  }, []);

  const handleOnboardingComplete = (stageId: string) => {
    setCurrentStageId(stageId);
    setOnboarded(true);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('way-onboarding');
      localStorage.removeItem('way-retreat-days');
    } catch { /* ignore */ }
    setOnboarded(false);
    setCompletedDays([]);
  };

  if (onboarded === null) return null;

  if (!onboarded) {
    return (
      <WayOnboarding stages={journeyStages} onComplete={handleOnboardingComplete} />
    );
  }

  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="The Way"
        title="Living the Christian Faith"
        subtitle='"I am the way, the truth, and the life." — John 14:6'
        icon="🕯"
      />

      <section style={{ marginBottom: '2.5rem' }}>
        <JourneyStageMap
          stages={journeyStages}
          currentStageId={currentStageId}
          onSelect={setSelectedStage}
        />
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
          }}
        >
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              style={{
                display: 'block',
                padding: '1.25rem 1rem',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '6px',
                background: 'var(--color-bg-secondary)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  marginBottom: '0.375rem',
                }}
              >
                {s.title}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '1rem',
          }}
        >
          Seven Days with Christ
        </div>
        <RetreatProgress completedDays={completedDays} totalDays={7} />
        <div style={{ marginTop: '0.75rem' }}>
          <a
            href="/way/retreat"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--color-accent-gold)',
              textDecoration: 'none',
            }}
          >
            Begin the Retreat →
          </a>
        </div>
      </section>

      <div
        style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          textAlign: 'center',
        }}
      >
        <button
          onClick={handleReset}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            opacity: 0.6,
          }}
        >
          Reset journey &amp; start over
        </button>
      </div>
    </WayLayout>
  );
}
