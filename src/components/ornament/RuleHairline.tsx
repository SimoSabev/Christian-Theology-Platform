// src/components/ornament/RuleHairline.tsx
type Props = { className?: string };

/** 1px gold gradient horizontal rule (transparent → gold → transparent). */
export default function RuleHairline({ className = '' }: Props) {
  return (
    <div
      className={className}
      style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--color-accent-gold), transparent)',
      }}
      aria-hidden
    />
  );
}
