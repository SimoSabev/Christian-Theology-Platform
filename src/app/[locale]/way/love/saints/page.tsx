import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import SaintPortrait from '@/components/way/SaintPortrait';
import { saints } from '@/data/way/saints';

export const metadata: Metadata = {
  title: 'Saints Who Radiated Love | The Way | Theosis',
  description: 'Not impossible ideals — ordinary people transformed by extraordinary love.',
};

export default function SaintsPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="Encountering Love"
        title="Saints Who Radiated Love"
        icon="✦"
      />

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem',
        }}
      >
        These are not impossible ideals — they were ordinary people transformed by extraordinary
        love. Each carried wounds, doubts, and failures. What set them apart was not their
        perfection but their willingness to be remade.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {saints.map((saint) => (
          <SaintPortrait key={saint.id} saint={saint} />
        ))}
      </div>
    </WayLayout>
  );
}
