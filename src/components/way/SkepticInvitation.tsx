// src/components/way/SkepticInvitation.tsx
import { SkepticSection } from '@/types/way';
import TestimonyBlock from './TestimonyBlock';
import ExperimentBlock from './ExperimentBlock';

interface Props {
  section: SkepticSection;
}

const augustineTestimony = {
  id: 'augustine-skeptic',
  name: 'Augustine of Hippo',
  source: 'Confessions, Book I (c. 397 AD)',
  quote: 'Thou madest us for Thyself, and our heart is restless, until it repose in Thee.',
  context:
    'Augustine was one of the most brilliant philosophical minds of late antiquity — a convinced sceptic and Manichaean before his dramatic conversion. His Confessions is addressed entirely to God, and begins with this statement of the problem he had tried for years to deny: that the restlessness he carried was a form of evidence.',
  tradition: 'Catholic',
};

const EXPERIMENT_STEPS = [
  'Read one chapter of John\'s Gospel each day for the next seven days.',
  'Read it as you would a primary source — trying to understand what is being claimed, not immediately agreeing or disagreeing.',
  'After each reading, write one honest sentence about what you noticed.',
  'On day seven, ask yourself: who do you think this person is?',
];

export default function SkepticInvitation({ section }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            color: 'var(--color-text-primary)',
            margin: '0 0 1rem',
            lineHeight: 1.3,
          }}
        >
          {section.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--color-text-secondary)',
            maxWidth: '40rem',
            margin: '0 auto',
          }}
        >
          {section.passage} — a passage worth reading slowly, wherever you currently stand.
        </p>
      </div>

      {/* Verses */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {section.verses.map((verse) => (
          <div key={verse.reference} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-gold)',
                  flexShrink: 0,
                  paddingTop: '0.25rem',
                  minWidth: '5rem',
                }}
              >
                {verse.reference}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: 'var(--color-text-primary)',
                  margin: 0,
                }}
              >
                {verse.text}
              </p>
            </div>
            <div
              style={{
                marginLeft: '6rem',
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.75,
                borderLeft: '2px solid rgba(201,168,76,0.3)',
                paddingLeft: '1rem',
              }}
            >
              {verse.reflection}
            </div>
          </div>
        ))}
      </div>

      {/* Testimony */}
      <TestimonyBlock testimony={augustineTestimony} />

      {/* Experiment */}
      <ExperimentBlock
        title="A 7-Day Reading Experiment"
        description="You don't have to believe any of this to try it. This is not a conversion programme — it's an invitation to read a primary source and notice your own reaction honestly."
        steps={EXPERIMENT_STEPS}
        commitment={7}
      />

      {/* Invitation */}
      <div
        style={{
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.2)',
          borderRadius: '6px',
          padding: '2rem',
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.85,
          color: 'var(--color-text-primary)',
          fontStyle: 'italic',
        }}
      >
        {section.invitation}
      </div>
    </div>
  );
}
