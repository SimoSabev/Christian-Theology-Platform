import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import BeatitudeBlock from '@/components/way/BeatitudeBlock';
import { beatitudes } from '@/data/way/beatitudes';

export const metadata: Metadata = {
  title: 'The Sermon on the Mount | The Way | Theosis',
  description: 'Matthew 5–7 — the greatest ethical and spiritual teaching in human history, organized as a life curriculum.',
};

export default function SermonOnTheMountPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Act"
        title="The Sermon on the Mount"
        subtitle="Matthew 5–7 — a life curriculum"
        icon="✦"
      />

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'var(--color-text-primary)',
          marginBottom: '2.5rem',
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          Matthew 5–7 is the longest continuous teaching of Jesus in any Gospel, and arguably the
          most important ethical document in human history. Jesus did not preach the Sermon on the
          Mount as a new legal code — he preached it as a vision of what human beings look like when
          they are fully alive to the Kingdom of God. "You are the salt of the earth," he says. "You
          are the light of the world." He begins with human character before he touches human
          behaviour.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          John Stott described the Sermon as "the most complete delineation of the Christian
          counter-culture." Dallas Willard called it "the Constitution of the Kingdom of God." In
          the original Greek, the Beatitudes each begin with the word <em>makarios</em> — often
          translated "blessed," but more accurately "congratulations" or "how to be envied." Jesus
          is saying: these are the people who are truly fortunate, whatever their outward
          circumstances suggest.
        </p>
        <p>
          The Beatitudes are not a checklist of demands. They are a portrait. They describe what a
          person becomes when the Spirit of God is progressively forming them from the inside out.
          They are also, in an extraordinary way, a portrait of Jesus himself. He was poor in
          spirit. He mourned. He was meek. He hungered and thirsted for righteousness. He was the
          merciful, the pure in heart, the peacemaker, and ultimately the persecuted one. The call
          of discipleship is to become, by grace, what he already is by nature.
        </p>
      </div>

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
          The Eight Beatitudes
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {beatitudes.map((b) => (
            <BeatitudeBlock key={b.id} beatitude={b} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '1.5rem' }}>
        <a
          href="/way/act/disciplines"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-accent-gold)', textDecoration: 'none' }}
        >
          Continue: Spiritual Disciplines →
        </a>
      </section>
    </WayLayout>
  );
}
