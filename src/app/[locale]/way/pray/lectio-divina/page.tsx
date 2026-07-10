import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import LectioDivinaGuide from '@/components/way/LectioDivinaGuide';
import ScripturePassageMeditation from '@/components/way/ScripturePassageMeditation';
import { lovePassages } from '@/data/way/love-passages';

export const metadata: Metadata = {
  title: 'Lectio Divina | The Way | Theosis',
  description: 'The ancient Benedictine practice of reading Scripture not for information but for encounter.',
};

const practicePassage = lovePassages[0];

export default function LectioDivinaPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Pray"
        title="Lectio Divina"
        subtitle="Reading with God"
        icon="📖"
      />

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'var(--color-text-primary)',
          marginBottom: '2rem',
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          In the sixth century, Guigo II — a Carthusian monk — described what monks had been doing
          for centuries in four Latin words: <em>Lectio, Meditatio, Oratio, Contemplatio.</em> Read.
          Meditate. Pray. Contemplate. This is Lectio Divina, or "sacred reading" — not a technique
          but a posture of the soul before the Word of God.
        </p>
        <p>
          The ancient monks understood that Scripture is not merely text to be analysed but a living
          word through which the living God speaks. In Lectio Divina, you do not come to master the
          passage. You come to be mastered by it. You read slowly, you listen, and you trust that
          the same Spirit who inspired the words will illumine them in you.
        </p>
      </div>

      <LectioDivinaGuide />

      {practicePassage && (
        <section style={{ marginTop: '2.5rem' }}>
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
            Now try it with this passage
          </div>
          <ScripturePassageMeditation passage={practicePassage} />
        </section>
      )}
    </WayLayout>
  );
}
