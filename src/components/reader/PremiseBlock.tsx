import type { ArgumentPremise } from '@/data/arguments/types';
import { RuleHairline } from '@/components/ornament';

type Props = {
  premises: ArgumentPremise[];
  conclusion: string;
  className?: string;
};

export default function PremiseBlock({ premises, conclusion, className = '' }: Props) {
  return (
    <div
      className={`px-6 py-5 ${className}`}
      style={{
        border: '1px solid var(--color-accent-gold)',
        borderRadius: 4,
        background: 'rgba(212, 168, 83, 0.04)',
      }}
    >
      {premises.map((p, i) => (
        <p key={p.id} className="t-body mb-2" style={{ color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-gold)', fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
            P{i + 1}.
          </strong>{' '}
          {p.text}
        </p>
      ))}
      <RuleHairline className="my-3" />
      <p className="t-body" style={{ color: 'var(--color-accent-gold-light)' }}>
        <strong style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>∴</strong>{' '}
        {conclusion}
      </p>
    </div>
  );
}
