// src/components/way/RetreatProgress.tsx

interface Props {
  completedDays: number[];
  totalDays?: number;
}

function CandleSVG({ lit }: { lit: boolean }) {
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 40"
      aria-hidden
      style={{ animation: lit ? 'candleFlicker 2.5s ease-in-out infinite' : undefined }}
    >
      <rect x="7" y="18" width="6" height="20" rx="1" fill="var(--color-accent-gold)" opacity={lit ? 0.9 : 0.2} />
      <ellipse cx="10" cy="14" rx="4" ry="6" fill={lit ? 'var(--color-accent-gold)' : '#999'} opacity={lit ? 1 : 0.3} />
      {lit && (
        <ellipse cx="10" cy="9" rx="2" ry="3" fill="#f5d078" opacity={0.7} />
      )}
    </svg>
  );
}

export default function RetreatProgress({ completedDays, totalDays = 7 }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '0.75rem',
        padding: '0.5rem 0',
      }}
      aria-label={`${completedDays.length} of ${totalDays} days completed`}
    >
      {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
        <div
          key={day}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}
          title={`Day ${day}${completedDays.includes(day) ? ' — completed' : ''}`}
        >
          <CandleSVG lit={completedDays.includes(day)} />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.5rem',
              letterSpacing: '0.1em',
              color: completedDays.includes(day) ? 'var(--color-accent-gold)' : 'var(--color-text-secondary)',
            }}
          >
            {day}
          </span>
        </div>
      ))}
    </div>
  );
}
