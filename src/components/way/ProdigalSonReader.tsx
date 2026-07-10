// src/components/way/ProdigalSonReader.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

const VERSES: { verse: number; text: string }[] = [
  { verse: 11, text: 'And he said, "There was a man who had two sons.' },
  { verse: 12, text: 'And the younger of them said to his father, \'Father, give me the share of property that is coming to me.\' And he divided his property between them.' },
  { verse: 13, text: 'Not many days later, the younger son gathered all he had and took a journey into a far country, and there he squandered his property in reckless living.' },
  { verse: 14, text: 'And when he had spent everything, a severe famine arose in that country, and he began to be in need.' },
  { verse: 15, text: 'So he went and hired himself out to one of the citizens of that country, who sent him into his fields to feed pigs.' },
  { verse: 16, text: 'And he was longing to be fed with the pods that the pigs ate, and no one gave him anything.' },
  { verse: 17, text: 'But when he came to himself, he said, \'How many of my father\'s hired servants have more than enough bread, but I perish here with hunger!' },
  { verse: 18, text: 'I will arise and go to my father, and I will say to him, "Father, I have sinned against heaven and before you.' },
  { verse: 19, text: 'I am no longer worthy to be called your son. Treat me as one of your hired servants."' },
  { verse: 20, text: 'And he arose and came to his father. But while he was still a long way off, his father saw him and felt compassion, and ran and embraced him and kissed him.' },
  { verse: 21, text: 'And the son said to him, \'Father, I have sinned against heaven and before you. I am no longer worthy to be called your son.\'' },
  { verse: 22, text: 'But the father said to his servants, \'Bring quickly the best robe, and put it on him, and put a ring on his hand, and shoes on his feet.' },
  { verse: 23, text: 'And bring the fattened calf and kill it, and let us eat and celebrate.' },
  { verse: 24, text: 'For this my son was dead, and is alive again; he was lost, and is found.\' And they began to celebrate.' },
  { verse: 25, text: 'Now his older son was in the field, and as he came and drew near to the house, he heard music and dancing.' },
  { verse: 26, text: 'And he called one of the servants and asked what these things meant.' },
  { verse: 27, text: 'And he said to him, \'Your brother has come, and your father has killed the fattened calf, because he has received him back safe and sound.\'' },
  { verse: 28, text: 'But he was angry and refused to go in. His father came out and entreated him,' },
  { verse: 29, text: 'but he answered his father, \'Look, these many years I have served you, and I never disobeyed your command, yet you never gave me a young goat, that I might celebrate with my friends.' },
  { verse: 30, text: 'But when this son of yours came, who has devoured your property with prostitutes, you killed the fattened calf for him!\'' },
  { verse: 31, text: 'And he said to him, \'Son, you are always with me, and all that is mine is yours.' },
  { verse: 32, text: 'It was fitting to celebrate and be glad, for this your brother was dead, and is alive; he was lost, and is found.\'"' },
];

const COMMENTARY: Record<number, string> = {
  16: 'The far country always ends the same way. Every path that leads away from the Father leads, eventually, here: hungry, alone, feeding what belongs to someone else. It is not punishment — it is simply where that road goes.',
  20: 'The father runs. In the ancient Near East, a man of honour would never run — it was undignified. But love is not interested in dignity. The father had been watching. He runs before the rehearsed apology can be delivered.',
  24: 'Dead, and alive. Lost, and found. The Gospel does not say "reformed" or "improved." It says alive. Something beyond rehabilitation — resurrection.',
  32: 'The elder brother is perhaps the most uncomfortable character in the parable — because he is so recognisable. He has been faithful, present, obedient. And he is furious. The question the parable leaves open: will he go in?',
};

const CHARACTERS = [
  { label: 'The Father', reflection: 'The one who runs before the speech is finished, who restores without conditions, who comes out again even for the one who stayed and resented. Is there someone in your life toward whom you are called to be this kind of father or mother?' },
  { label: 'The Son', reflection: 'The one who leaves, wastes everything, and finds himself in the far country. He "comes to himself" only in the pigpen. Have you ever been in your own version of the far country — and what brought you to yourself?' },
  { label: 'The Elder Brother', reflection: 'He never left. He has done everything right. And he cannot enter the party. Which failure is harder to recover from: wasting your inheritance or performing faithfully while your heart stays outside?' },
];

export default function ProdigalSonReader() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const scrolled = Math.max(0, windowH - top);
      const pct = Math.min(1, scrolled / (height + windowH));
      setProgress(Math.round(pct * 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* Progress bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '3px',
          background: 'rgba(201,168,76,0.15)',
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'var(--color-accent-gold)',
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      <div
        style={{
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.55rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '1.5rem',
          }}
        >
          Luke 15:11–32 · ESV
        </div>

        {VERSES.map((v, i) => (
          <div key={v.verse}>
            <div style={{ display: 'flex', gap: '0.875rem', padding: '0.5rem 0' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.6rem',
                  color: 'var(--color-text-secondary)',
                  paddingTop: '0.375rem',
                  flexShrink: 0,
                  width: '1.5rem',
                  textAlign: 'right',
                }}
              >
                {v.verse}
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
                {v.text}
              </p>
            </div>

            {COMMENTARY[v.verse] && (
              <div
                style={{
                  margin: '0.75rem 0 0.75rem 2.375rem',
                  padding: '0.875rem 1rem',
                  borderLeft: '2px solid var(--color-accent-gold)',
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.75,
                  background: 'rgba(201,168,76,0.04)',
                }}
              >
                {COMMENTARY[v.verse]}
              </div>
            )}

            {[16, 20, 24].includes(v.verse) && (
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid rgba(201,168,76,0.15)',
                  margin: '1rem 0',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Characters section */}
      <div
        style={{
          borderTop: '1px solid rgba(201,168,76,0.2)',
          paddingTop: '2rem',
          marginTop: '1rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '1.25rem',
          }}
        >
          Which character are you today?
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {CHARACTERS.map((c) => (
            <div
              key={c.label}
              style={{
                flex: '1 1 220px',
                background: 'var(--color-bg-elevated)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '6px',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.125rem',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.625rem',
                }}
              >
                {c.label}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {c.reflection}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
