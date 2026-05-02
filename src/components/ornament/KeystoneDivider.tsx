// src/components/ornament/KeystoneDivider.tsx
import RuleHairline from './RuleHairline';

type Props = { glyph?: string; className?: string };

/**
 * Section break: hairline → centered diamond glyph in gold → hairline.
 * Default glyph is a small filled diamond ◆.
 */
export default function KeystoneDivider({ glyph = '◆', className = '' }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden>
      <RuleHairline className="flex-1" />
      <span style={{ color: 'var(--color-accent-gold)', fontSize: 12 }}>{glyph}</span>
      <RuleHairline className="flex-1" />
    </div>
  );
}
