'use client';

import { useState, useEffect } from 'react';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import JourneyStageMap from '@/components/way/JourneyStageMap';
import JourneyStageDetail from '@/components/way/JourneyStageDetail';
import { journeyStages } from '@/data/way/journey-stages';
import { JourneyStage } from '@/types/way';
import { useLens } from '@/components/lens';
import Link from 'next/link';

const LENS_STAGE_MAP: Record<string, string> = {
  seeker: 'curious',
  defender: 'disciple',
  researcher: 'disciple',
  student: 'disciple',
  all: 'curious',
};

export default function JourneyPage() {
  const { lens, hydrated } = useLens();
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(journeyStages[0]);

  useEffect(() => {
    if (!hydrated) return;
    const targetId = LENS_STAGE_MAP[lens] ?? 'curious';
    const match = journeyStages.find((s) => s.id === targetId) ?? journeyStages[0];
    setSelectedStage(match);
  }, [lens, hydrated]);

  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="The Journey"
        title="Five Stages of the Spiritual Life"
        subtitle="You are somewhere on this path. Every stage is welcome here."
        icon="✦"
      />

      <section style={{ marginBottom: '2rem' }}>
        <JourneyStageMap
          stages={journeyStages}
          currentStageId={selectedStage.id}
          onSelect={setSelectedStage}
        />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <JourneyStageDetail stage={selectedStage} />
      </section>

      <section
        style={{
          borderTop: '1px solid rgba(201,168,76,0.2)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <Link href="/defend" style={linkStyle}>Defend the Faith →</Link>
        <Link href="/explore" style={linkStyle}>Explore &amp; Discover →</Link>
        <Link href="/compare" style={linkStyle}>Compare Traditions →</Link>
        <Link href="/way/retreat" style={linkStyle}>Start the Retreat →</Link>
      </section>
    </WayLayout>
  );
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  color: 'var(--color-accent-gold)',
  textDecoration: 'none',
  padding: '0.375rem 0.75rem',
  border: '1px solid rgba(201,168,76,0.3)',
  borderRadius: '4px',
};
