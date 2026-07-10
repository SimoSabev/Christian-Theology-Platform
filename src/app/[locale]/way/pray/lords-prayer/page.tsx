import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import LordsPrayerBlock from '@/components/way/LordsPrayerBlock';
import LensAdaptedContent from '@/components/way/LensAdaptedContent';
import { lordsPrayerPhrases } from '@/data/way/lords-prayer';

export const metadata: Metadata = {
  title: "The Lord's Prayer | The Way | Theosis",
  description: "A phrase-by-phrase study of Matthew 6:9-13 — the prayer Jesus taught his disciples.",
};

export default function LordsPrayerPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Pray"
        title="The Lord's Prayer"
        subtitle="Matthew 6:9–13 — phrase by phrase"
        icon="✝"
      />

      <LensAdaptedContent onlyFor={['seeker']}>
        <div
          style={{
            padding: '1rem 1.25rem',
            background: 'rgba(201,168,76,0.06)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '6px',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            color: 'var(--color-text-secondary)',
            fontStyle: 'italic',
          }}
        >
          You don't have to know how to pray. Jesus assumed you didn't. That's why he gave you
          these words — so you'd have somewhere to start.
        </div>
      </LensAdaptedContent>

      <div style={{ marginBottom: '2rem' }}>
        <LordsPrayerBlock phrases={lordsPrayerPhrases} />
      </div>

      <LensAdaptedContent onlyFor={['researcher', 'student']}>
        <div
          style={{
            padding: '1.25rem',
            background: 'rgba(201,168,76,0.04)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '6px',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              marginBottom: '0.875rem',
            }}
          >
            Patristic Notes
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            The Greek <em>ἁγιασθήτω</em> (hagiastheto) — "hallowed be" — is an aorist passive imperative. The speaker asks that God's name <em>be made holy</em> through the worshipper's life and testimony, not merely revered in thought.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            Tertullian (c. 200 AD) calls this prayer "the breviary of the whole Gospel" (<em>breviarium totius evangelii</em>). Origen's <em>On Prayer</em> devotes nearly a third of its pages to these seven petitions.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            <em>ἐπιούσιον</em> (epiousios, "daily") in v.11 is hapax legomenon — found nowhere else in Greek literature before the New Testament. Jerome translated it as <em>supersubstantialis</em> in Matthew (suggesting the Eucharist) but <em>quotidianus</em> in Luke (suggesting ordinary bread). The ambiguity is deliberate.
          </p>
          <a
            href="/semantics?word=hagiazo"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gold)',
              textDecoration: 'none',
            }}
          >
            Study the Greek: ἁγιάζω (hagiazo) in Semantics →
          </a>
        </div>
      </LensAdaptedContent>

      <section
        style={{
          borderTop: '1px solid rgba(201,168,76,0.25)',
          paddingTop: '2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          Now pray it again — slowly
        </p>
        <blockquote
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            lineHeight: 1.9,
            color: 'var(--color-text-primary)',
            fontStyle: 'italic',
            margin: '0 auto',
            maxWidth: '36rem',
          }}
        >
          Our Father in heaven, hallowed be your name,<br />
          your kingdom come, your will be done,<br />
          on earth as it is in heaven.<br />
          Give us today our daily bread.<br />
          And forgive us our debts, as we also have forgiven our debtors.<br />
          And lead us not into temptation, but deliver us from the evil one.
        </blockquote>
      </section>
    </WayLayout>
  );
}
