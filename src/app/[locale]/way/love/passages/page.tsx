import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import ScripturePassageMeditation from '@/components/way/ScripturePassageMeditation';
import { lovePassages } from '@/data/way/love-passages';

export const metadata: Metadata = {
  title: "God's Love in Seven Passages | The Way | Theosis",
  description: 'Seven Scripture passages on the love of God — with a meditation on each one.',
};

const DIVIDER = (
  <div
    style={{
      textAlign: 'center',
      color: 'var(--color-accent-gold)',
      fontSize: '0.75rem',
      letterSpacing: '0.5em',
      padding: '1.5rem 0',
      opacity: 0.6,
    }}
  >
    ✦ ✦ ✦
  </div>
);

export default function PassagesPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="Encountering Love"
        title="God's Love in Seven Passages"
        subtitle="Read slowly. Let each one settle before moving to the next."
        icon="📖"
      />

      <div>
        {lovePassages.map((passage, i) => (
          <div key={passage.id}>
            <ScripturePassageMeditation passage={passage} />
            {i < lovePassages.length - 1 && DIVIDER}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(201,168,76,0.2)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '0.5rem',
          }}
        >
          1 Corinthians 13 uses the Greek word <em>ἀγάπη</em> (agape) — a love that is
          distinct from friendship (philía) or romantic love (eros). Study the word itself:
        </p>
        <a
          href="/semantics?word=agape"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            textDecoration: 'none',
          }}
        >
          Study the Greek word agape in Semantics →
        </a>
      </div>
    </WayLayout>
  );
}
