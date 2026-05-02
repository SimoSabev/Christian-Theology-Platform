// src/components/ornament/SectionMark.tsx

const GLYPHS = {
  section: '§',
  cross: '☩',
  patee: '✠',
  longCross: '✟',
  plusCircle: '⊕',
  chiRho: '☧',
  diamond: '◆',
} as const;

type Glyph = keyof typeof GLYPHS;

type Props = { glyph: Glyph; className?: string; size?: number };

/** Decorative section glyph in gold. Always aria-hidden. */
export default function SectionMark({ glyph, className = '', size = 18 }: Props) {
  return (
    <span
      aria-hidden
      className={className}
      style={{ color: 'var(--color-accent-gold)', fontSize: size, lineHeight: 1 }}
    >
      {GLYPHS[glyph]}
    </span>
  );
}
