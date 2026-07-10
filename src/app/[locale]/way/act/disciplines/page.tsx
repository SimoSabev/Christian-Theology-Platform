'use client';

import { useState } from 'react';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import DisciplineCard from '@/components/way/DisciplineCard';
import { spiritualDisciplines } from '@/data/way/disciplines';

const CATEGORIES = ['All', 'Abstinence', 'Engagement'] as const;
type Cat = (typeof CATEGORIES)[number];

export default function DisciplinesPage() {
  const [active, setActive] = useState<Cat>('All');

  const filtered =
    active === 'All' ? spiritualDisciplines : spiritualDisciplines.filter((d) => d.category === active);

  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Act"
        title="Spiritual Disciplines"
        subtitle="The practices that open us to God's transforming work"
        icon="🕯"
      />

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.375rem 0.875rem',
              borderRadius: '999px',
              border: '1px solid rgba(201,168,76,0.4)',
              background: active === cat ? 'var(--color-accent-gold)' : 'transparent',
              color: active === cat ? '#fff' : 'var(--color-text-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {filtered.map((d) => (
          <DisciplineCard key={d.id} discipline={d} />
        ))}
      </div>
    </WayLayout>
  );
}
