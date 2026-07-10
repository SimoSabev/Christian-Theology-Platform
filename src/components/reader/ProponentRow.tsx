type Proponent = { name: string; era: string };
type Props = { proponents: Proponent[]; className?: string };

export default function ProponentRow({ proponents, className = '' }: Props) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {proponents.map((p) => (
        <div
          key={p.name}
          className="t-body text-sm"
          style={{ border: '1px solid var(--color-border)', borderRadius: 2, padding: '6px 14px', color: 'var(--color-text-secondary)' }}
        >
          {p.name}
          <span className="t-meta ms-2" style={{ fontSize: '0.7rem' }}>({p.era})</span>
        </div>
      ))}
    </div>
  );
}
