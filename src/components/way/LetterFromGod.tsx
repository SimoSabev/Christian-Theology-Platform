// src/components/way/LetterFromGod.tsx

const LETTER_PARAGRAPHS = [
  'My beloved child,',
  'Before you knew my name, I knew yours. Before you drew your first breath, I had already determined the days allotted to you, the gifts placed within you, and the path — however winding — that would bring you here. I saw you in the womb, and I called you beloved. Not because of what you would become or what you would accomplish. Simply because you exist, and you are mine.',
  'I have been with you through the seasons you barely survived. The losses that hollowed you out. The failures that convinced you to hide. The nights when the silence felt like evidence that no one was listening. I was there. Not as a distant observer, but as close as your own breathing — closer still. I have wept with you. I have waited for you. I have never stopped watching the road for your return.',
  'You carry a weight that was never meant for you to carry alone. The judgements you have pronounced against yourself — the verdict that you are not enough, that you have failed too many times, that it is too late for anything to change — these are not my verdicts. I speak another word over you: Forgiven. Beloved. Mine. I sent my Son into the world not to condemn it, but because I could not bear to lose you.',
  'I know what you are afraid of. I know the questions that keep you awake. I know the doubts you rarely voice, and the longing underneath the doubts — the longing to be truly known and truly loved. That longing is not a weakness. It is the shape of the hollow I made in you, so that only I could fill it.',
  'I am not angry with you. I am not keeping a tally of what you owe. I cancelled that debt at a cost you will only fully understand when you see me face to face. What I am is patient, and persistent, and more in love with you than any human vocabulary has ever found words to express. The breadth and length and height and depth of it surpass knowledge — but it is real, and it is yours.',
  'Come. Not when you are ready, not when you have cleaned yourself up, not when you have earned the right. Come now, as you are. The door is open. The table is set. The robe is already prepared. I have been watching the road.',
  'Yours, forever and without condition —',
  'Your Father',
];

export default function LetterFromGod() {
  return (
    <div
      style={{
        background: 'var(--color-bg-primary)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '6px',
        padding: 'clamp(2rem, 5vw, 3.5rem)',
        maxWidth: '42rem',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        A Devotional Meditation — Not Scripture
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        {LETTER_PARAGRAPHS.map((para, i) => {
          const isOpening = i === 0;
          const isClosing = i >= LETTER_PARAGRAPHS.length - 2;

          return (
            <p
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: isOpening || isClosing ? '1rem' : '1.0625rem',
                lineHeight: 1.9,
                color: 'var(--color-text-primary)',
                margin: 0,
                fontWeight: isClosing ? 400 : 400,
                fontStyle: isClosing && i === LETTER_PARAGRAPHS.length - 1 ? 'italic' : 'normal',
                textIndent: !isOpening && !isClosing ? '2em' : undefined,
                marginTop: isClosing && i === LETTER_PARAGRAPHS.length - 2 ? '1rem' : undefined,
              }}
            >
              {para}
            </p>
          );
        })}
      </div>

      <div
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)' }} />
        <span style={{ color: 'var(--color-accent-gold)', fontSize: '0.875rem' }}>◆</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.3)' }} />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.8125rem',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          marginTop: '1rem',
          marginBottom: 0,
          lineHeight: 1.65,
        }}
      >
        Drawn from John 3:16; Romans 8:38–39; Jeremiah 29:11; Psalm 139; Luke 15:20; Ephesians 3:18
      </p>
    </div>
  );
}
