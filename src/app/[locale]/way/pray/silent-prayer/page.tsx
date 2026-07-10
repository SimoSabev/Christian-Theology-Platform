import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import BreathPrayerWidget from '@/components/way/BreathPrayerWidget';

export const metadata: Metadata = {
  title: 'The Prayer of Silence | The Way | Theosis',
  description: 'The apophatic tradition — approaching God beyond words, images, and concepts.',
};

const STEPS = [
  'Choose a time when you will not be interrupted — 10 to 20 minutes.',
  'Sit upright with your feet flat on the floor. Close your eyes.',
  'Take three slow, deliberate breaths. Let each exhale carry tension away.',
  'Choose a single sacred word — "Peace," "Come," "Abba," or simply "Yes" — as your anchor.',
  'When thoughts arise (and they will), gently return to your word without frustration. This returning is the prayer.',
  'When the time ends, remain in silence for two additional minutes before opening your eyes.',
];

export default function SilentPrayerPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Pray"
        title="The Prayer of Silence"
        subtitle="Approaching God beyond words"
        icon="◦"
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
          The Desert Fathers of the fourth and fifth centuries left their cities not out of
          despair but out of longing — a longing for the God who cannot be found in noise. They
          discovered, in the Egyptian wilderness, what the Psalmist had already promised: "Be
          still, and know that I am God" (Psalm 46:10). Silence, for them, was not the absence
          of something. It was the presence of Someone.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          The apophatic tradition — from the Greek <em>apophasis</em>, "to deny" — approaches
          God by stripping away all images, concepts, and words. Not because God is nothing, but
          because God is more than any concept can contain. The Cloud of Unknowing, a fourteenth-
          century English mystical text, teaches that God cannot be reached by thought — only by
          love. "For of all other creatures and their works — yes, and of the works of God
          himself — may a man through grace have full knowing, and well can he think of them;
          but of God himself can no man think."
        </p>
        <p>
          Abba Moses, one of the great Desert Fathers, was once asked for a word by a young monk.
          He replied: "Go and sit in your cell, and your cell will teach you everything."
        </p>
      </div>

      <section style={{ marginBottom: '2.5rem' }}>
        <BreathPrayerWidget />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '1rem',
          }}
        >
          How to Sit in Silence
        </h2>
        <ol
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--color-text-primary)',
            paddingLeft: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {STEPS.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <blockquote
        style={{
          borderLeft: '2px solid var(--color-accent-gold)',
          paddingLeft: '1.25rem',
          marginLeft: 0,
          fontFamily: 'var(--font-body)',
          fontSize: '1.1rem',
          fontStyle: 'italic',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
        }}
      >
        "Sit in your cell and it will teach you everything."
        <footer
          style={{
            fontStyle: 'normal',
            fontSize: '0.85rem',
            marginTop: '0.5rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          — Abba Moses, Desert Father (c. 330 AD)
        </footer>
      </blockquote>
    </WayLayout>
  );
}
