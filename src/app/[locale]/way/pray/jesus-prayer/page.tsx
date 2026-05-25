import type { Metadata } from 'next';
import WayLayout from '@/components/way/WayLayout';
import WayNavSidebar from '@/components/way/WayNavSidebar';
import WayPageHeader from '@/components/way/WayPageHeader';
import JesusPrayerAmbient from '@/components/way/JesusPrayerAmbient';
import BreathPrayerWidget from '@/components/way/BreathPrayerWidget';

export const metadata: Metadata = {
  title: 'The Jesus Prayer | The Way | Theosis',
  description: '"Lord Jesus Christ, Son of God, have mercy on me, a sinner." The ancient prayer of the hesychast tradition.',
};

export default function JesusPrayerPage() {
  return (
    <WayLayout sidebar={<WayNavSidebar />}>
      <WayPageHeader
        eyebrow="How to Pray"
        title="The Jesus Prayer"
        subtitle="Lord Jesus Christ, Son of God, have mercy on me, a sinner."
        icon="✝"
      />

      <JesusPrayerAmbient />

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.8,
          color: 'var(--color-text-primary)',
          marginBottom: '2rem',
          marginTop: '2rem',
        }}
      >
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
          History
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          The Jesus Prayer has ancient roots in the cry of Bartimaeus — "Jesus, Son of David, have
          mercy on me!" (Mark 10:47) — and the parable of the Pharisee and the Tax Collector, whose
          prayer was simply: "God, have mercy on me, a sinner" (Luke 18:13). By the fifth century,
          the Desert Fathers of Egypt were commending brief, repeated prayers as a path to unceasing
          prayer in the spirit of 1 Thessalonians 5:17.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          The prayer was systematised in the Orthodox hesychast tradition — particularly at Mount
          Athos — reaching its fullest expression in the <em>Philokalia</em>, a fifth-century
          anthology compiled by St. Nikodimos of the Holy Mountain and St. Makarios of Corinth in
          1782. The monks of Athos spoke of the prayer descending from the mind into the heart, so
          that the name of Jesus would pulsate with the very rhythm of the heartbeat. This
          integration of prayer and breathing — "Lord Jesus Christ" on the inhale, "have mercy on
          me, a sinner" on the exhale — became the classic hesychast method.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          The 19th-century Russian classic <em>The Way of a Pilgrim</em> introduced this practice
          to a wider audience through the account of a wandering peasant who sought to practise the
          Apostle Paul's command to "pray without ceasing."
        </p>

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
          How to Practise
        </h2>
        <ol
          style={{
            paddingLeft: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          <li>Find a quiet place. Sit comfortably with your spine upright.</li>
          <li>Close your eyes and breathe slowly.</li>
          <li>On the inhale, say silently or aloud: "Lord Jesus Christ, Son of God."</li>
          <li>On the exhale: "have mercy on me, a sinner."</li>
          <li>Repeat 10–33 times. Orthodox tradition uses a knotted prayer rope (komboskini).</li>
          <li>
            When thoughts arise — as they will — do not fight them. Simply return to the words.
          </li>
          <li>
            The goal is not to feel something. The goal is to consent to God's presence with your
            whole being.
          </li>
        </ol>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.75rem',
          }}
        >
          The Philokalia
        </h2>
        <p>
          For those who wish to go deeper, the <em>Philokalia</em> (Greek: "love of the beautiful")
          is the primary sourcebook of hesychast spirituality. Kallistos Ware's translation and
          commentary makes this treasury accessible to Western readers. The prayer is not magic. It
          is a doorway into the ancient Christian practice of <em>theosis</em> — participation in
          the divine life.
        </p>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(201,168,76,0.2)',
          paddingTop: '2rem',
        }}
      >
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
          Practice Now
        </div>
        <BreathPrayerWidget />
      </div>
    </WayLayout>
  );
}
