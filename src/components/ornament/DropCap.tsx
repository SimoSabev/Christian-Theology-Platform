// src/components/ornament/DropCap.tsx
type Props = { letter: string; className?: string };

/**
 * Illuminated drop cap: gold-on-navy filled square, Cinzel 900, bordered.
 * `letter` is the visible glyph; the consuming prose should still
 * begin with the full word (sighted users see drop cap + rest of word;
 * screen readers read the prose normally because the cap is aria-hidden).
 */
export default function DropCap({ letter, className = '' }: Props) {
  return (
    <span
      aria-hidden
      className={`float-left ${className}`}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '4rem',
        lineHeight: 0.85,
        marginRight: '0.75rem',
        marginTop: '0.4rem',
        color: 'var(--color-bg-primary)',
        background: 'linear-gradient(135deg, var(--color-accent-gold), var(--color-accent-gold-light))',
        padding: '0.4rem 0.6rem',
        border: '1px solid var(--color-accent-gold)',
        borderRadius: 4,
        boxShadow: '0 0 24px rgba(212, 168, 83, 0.25)',
      }}
    >
      {letter}
    </span>
  );
}
