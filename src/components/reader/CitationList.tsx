type Props = { sources: string[]; className?: string };

export default function CitationList({ sources, className = '' }: Props) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {sources.map((s) => (
        <li key={s} className="flex items-start gap-2 t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <span style={{ color: 'var(--color-accent-gold)', marginTop: 4, flexShrink: 0 }}>•</span>
          {s}
        </li>
      ))}
    </ul>
  );
}
