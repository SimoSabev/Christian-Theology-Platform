import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import TestimonyBlock from '@/components/way/TestimonyBlock';
import { testimonies } from '@/data/way/testimonies';

export const metadata: Metadata = {
  title: 'Love Your Enemies | The Way | Theosis',
  description: 'Matthew 5:44 — the most radical command Jesus ever gave, and a practical guide to forgiveness.',
};

const STEPS = [
  'Name the person you struggle to love or forgive — in your own mind, honestly. Do not skip this step by generalising.',
  'Pray for their wellbeing — not that they would be proven wrong, but that they would flourish. This is the action Jesus commands, not the feeling.',
  'Find one true thing about them that is good. Not to excuse the harm, but to restore their humanity to you.',
  'Ask: what has this person suffered that contributed to who they are? This is not excusing — it is understanding.',
  'Over time, pray for them daily. Most people report that it becomes easier, and that the poison of bitterness gradually loses its hold.',
  'If reconciliation is possible and safe, pursue it. If it is not possible or would cause harm, forgive inwardly without requiring closure from them.',
];

export default function LoveYourEnemiesPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Act"
        title="Love Your Enemies"
        subtitle="The most radical command Jesus ever gave"
        icon="❤"
      />

      <blockquote
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
          fontStyle: 'italic',
          color: 'var(--color-text-primary)',
          lineHeight: 1.6,
          margin: '0 0 2rem',
          padding: '1.5rem',
          borderTop: '1px solid rgba(201,168,76,0.25)',
          borderBottom: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        "But I say to you, love your enemies and pray for those who persecute you."
        <footer style={{ fontStyle: 'normal', fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--color-text-secondary)' }}>
          — Matthew 5:44
        </footer>
      </blockquote>

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
          No religious teacher in the ancient world said anything like this. Aristotle taught love
          of friends and justice toward enemies. The Stoics counselled indifference. Even the Torah
          commanded love of neighbour without extending it to the enemy. Jesus' command is not an
          improvement of ethics — it is a revolution.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          The Greek word Jesus uses for "love" is <em>agape</em> — not romantic love (eros), not
          family affection (storge), not friendship (philia), but deliberate, chosen, self-giving
          love. It is a love that does not depend on the lovableness of its object. It is, in
          other words, the kind of love God has for us.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          What does it mean in practice? Jesus immediately defines it: "pray for those who
          persecute you." He is not asking us to feel warm feelings about people who have hurt us.
          He is asking us to <em>act</em> in love while the feelings may still be absent. The
          feelings often follow — but they are not the command. The command is prayer, which is an
          act of the will.
        </p>
        <p>
          Martin Luther King Jr. preached on this passage in the middle of the Montgomery Bus
          Boycott, with bombs having been thrown at his house. He said: "Love is the only force
          capable of transforming an enemy into a friend." Corrie ten Boom, survivor of the Nazi
          concentration camps, wrote of the specific moment she chose to forgive a prison guard
          who had tormented her — and of the supernatural warmth that flooded through her when she
          made that choice. These are not sentimental stories. They are testimonies to a power
          that is genuinely available to those who ask for it.
        </p>
      </div>

      <section style={{ marginBottom: '2rem' }}>
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
          Testimonies
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {testimonies.slice(0, 2).map((t) => (
            <TestimonyBlock key={t.id} testimony={t} />
          ))}
        </div>
      </section>

      <section>
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
          How to Begin When You Can&apos;t Forgive
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
    </WayLayout>
  );
}
