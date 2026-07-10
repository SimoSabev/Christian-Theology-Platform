// src/components/way/WayPageHeader.tsx

interface WayPageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  eyebrow?: string;
}

export default function WayPageHeader({ title, subtitle, icon, eyebrow }: WayPageHeaderProps) {
  return (
    <header
      style={{
        textAlign: 'center',
        padding: '2.5rem 1.5rem 2rem',
        borderBottom: '1px solid var(--color-accent-gold)',
        marginBottom: '2rem',
      }}
    >
      {icon && (
        <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', lineHeight: 1 }}>{icon}</div>
      )}
      {eyebrow && (
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.625rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginBottom: '0.75rem',
          }}
        >
          {eyebrow}
        </div>
      )}
      <h1
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          lineHeight: 1.15,
          color: 'var(--color-text-primary)',
          margin: '0 0 0.5rem',
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontStyle: 'italic',
            fontSize: '1.125rem',
            color: 'var(--color-text-secondary)',
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
