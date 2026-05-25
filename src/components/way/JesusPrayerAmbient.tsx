// src/components/way/JesusPrayerAmbient.tsx

export default function JesusPrayerAmbient() {
  return (
    <section
      style={{
        background: 'var(--color-bg-primary)',
        padding: '4rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--color-text-secondary)',
        }}
      >
        The Jesus Prayer
      </div>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          fontWeight: 400,
          lineHeight: 1.6,
          color: 'var(--color-text-primary)',
          maxWidth: '32rem',
          margin: 0,
          animation: 'jesusBreath 8s ease-in-out infinite',
        }}
      >
        Lord Jesus Christ, Son of God, have mercy on me, a sinner.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '24rem',
          margin: 0,
          lineHeight: 1.65,
        }}
      >
        Κύριε Ἰησοῦ Χριστέ, Υἱέ τοῦ Θεοῦ, ἐλέησόν με τὸν ἁμαρτωλόν.
      </p>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '28rem',
          margin: 0,
          lineHeight: 1.7,
        }}
      >
        Breathe in: <em>Lord Jesus Christ, Son of God,</em>
        <br />
        Breathe out: <em>have mercy on me, a sinner.</em>
      </p>
    </section>
  );
}
