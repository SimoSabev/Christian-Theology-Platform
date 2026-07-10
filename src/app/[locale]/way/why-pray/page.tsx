import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import TestimonyBlock from '@/components/way/TestimonyBlock';
import { testimonies } from '@/data/way/testimonies';

export const metadata: Metadata = {
  title: 'Why Pray? | The Way | Theosis',
  description: 'If God knows everything, why tell him anything? An honest answer for the seeker and the doubter.',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: '2rem' }}>
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--color-accent-gold)',
        marginBottom: '0.875rem',
      }}
    >
      {title}
    </h2>
    <div
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        lineHeight: 1.8,
        color: 'var(--color-text-primary)',
      }}
    >
      {children}
    </div>
  </section>
);

export default function WhyPrayPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="Why Pray"
        title="Why Pray?"
        subtitle="If God knows everything, why tell him anything?"
        icon="✦"
      />

      <Section title="The Theology of Prayer">
        <p style={{ marginBottom: '1rem' }}>
          Prayer is not informing an ignorant God of what he does not know. It is not changing the
          mind of a reluctant God who must be persuaded. James 4:8 says: "Draw near to God, and he
          will draw near to you." The movement is mutual. Prayer is the practice of a relationship —
          the practice of actually showing up.
        </p>
        <p>
          When a child tells her father what happened at school, she is not giving him information he
          lacks. She is participating in the intimacy that makes them father and daughter. God desires
          that intimacy. Jeremiah 29:12-13: "Then you will call on me and come and pray to me, and I
          will listen to you. You will seek me and find me when you seek me with all your heart." The
          seeking itself is part of what is offered.
        </p>
      </Section>

      <Section title="The Relational God">
        <p style={{ marginBottom: '1rem' }}>
          The God of Christianity is not the unmoved mover of Aristotle — a first cause who set the
          universe in motion and retired. He is the Father in Luke 15 who runs down the road when he
          sees his lost son returning. He is the God who says through Hosea: "I led them with cords
          of human kindness, with ties of love" (Hosea 11:4). He is the God who weeps at Lazarus's
          tomb (John 11:35).
        </p>
        <p>
          This is the radical claim of Christian theology: that the ground of all being is personal.
          That behind the cosmos is not a force but a face. And prayer is the act of turning toward
          that face. No philosophy invented this. No religion else has dared it quite this way.
        </p>
      </Section>

      <Section title="Does Prayer Change Things?">
        <p style={{ marginBottom: '1rem' }}>
          C.S. Lewis wrestled with this question honestly in <em>Letters to Malcolm: Chiefly on
          Prayer</em>: "I pray because I can't help myself. I pray because I'm helpless. I pray
          because the need flows out of me all the time, waking and sleeping. It doesn't change God.
          It changes me." Lewis was not dismissing the reality of answered prayer. He was noting
          that the greatest change prayer produces is in the one who prays — an alignment of the
          human will with the divine will.
        </p>
        <p>
          At the same time, Scripture is full of prayers that changed specific outcomes: Moses
          interceding for Israel (Exodus 32), Elijah calling down rain (1 Kings 18), the early
          church praying for Peter's release from prison and Peter appearing at the door (Acts 12).
          The honest answer is: we cannot fully explain the mechanics of how prayer and divine
          sovereignty interweave. But the witness of Scripture and of millions of lives is that it
          is not nothing.
        </p>
      </Section>

      <Section title="What Science Suggests">
        <p>
          Research on prayer is difficult to design well and should not be overclaimed. Studies such
          as the MANTRA prayer studies at Duke University (2000–2003) found suggestive effects in
          cardiac recovery but were methodologically contested. Larry Dossey and Herbert Benson have
          documented the measurable effects of prayer on stress and healing. The honest conclusion:
          evidence is suggestive, not conclusive. The Christian does not pray because science
          validates it. Prayer is not a health practice. It is a relationship. But it is worth noting
          that the act of prayer — of orienting oneself beyond oneself in gratitude, confession, and
          trust — aligns with what psychological research identifies as characteristic of human
          flourishing.
        </p>
      </Section>

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
          Testimonies
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {testimonies.slice(0, 3).map((t) => (
            <TestimonyBlock key={t.id} testimony={t} />
          ))}
        </div>
      </section>

      <Section title="The God Who Hides">
        <p style={{ marginBottom: '1rem' }}>
          For many people, the hardest question is not "Does prayer work?" but "Why doesn't God
          simply show himself?" Pascal called this "the hiddenness of God" and saw in it not a
          failure of God but an invitation: "There is enough light for those who desire only to see,
          and enough darkness for those of a contrary disposition." If God were overwhelmingly
          obvious, faith would not be faith. It would be compulsion.
        </p>
        <p>
          John of the Cross described the "dark night of the soul" — the experience of God's
          apparent absence — not as God's abandonment but as a deeper form of his love: stripping
          away the consolations so that the soul learns to love God for who he is, not for what he
          provides. In the Christian mystical tradition, the silence of God is not the silence of
          an empty room. It is the silence of a deeper presence.
        </p>
      </Section>
    </WayLayout>
  );
}
