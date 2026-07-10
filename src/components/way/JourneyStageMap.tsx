// src/components/way/JourneyStageMap.tsx
'use client';

import { JourneyStage } from '@/types/way';

interface Props {
  stages: JourneyStage[];
  currentStageId?: string;
  onSelect: (stage: JourneyStage) => void;
}

export default function JourneyStageMap({ stages, currentStageId, onSelect }: Props) {
  const sorted = [...stages].sort((a, b) => a.order - b.order);
  const currentOrder = sorted.find((s) => s.id === currentStageId)?.order ?? 0;

  return (
    <div style={{ padding: '1rem 0' }}>
      {sorted.map((stage, i) => {
        const isCurrent = stage.id === currentStageId;
        const isPast = stage.order < currentOrder;
        const filled = isCurrent || isPast;

        return (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            {/* Circle + connector */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <button
                onClick={() => onSelect(stage)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: `2px solid ${filled ? 'var(--color-accent-gold)' : 'rgba(201,168,76,0.4)'}`,
                  background: filled ? 'var(--color-accent-gold)' : 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: filled ? '#fff' : 'var(--color-text-secondary)',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
                aria-label={`Select stage: ${stage.name}`}
              >
                {stage.order}
              </button>
              {i < sorted.length - 1 && (
                <div
                  style={{
                    width: '2px',
                    height: '40px',
                    background: isPast
                      ? 'var(--color-accent-gold)'
                      : 'rgba(201,168,76,0.2)',
                    margin: '4px 0',
                  }}
                />
              )}
            </div>

            {/* Stage info */}
            <div
              style={{
                paddingTop: '0.375rem',
                paddingBottom: i < sorted.length - 1 ? '0' : '0',
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontStyle: 'italic',
                  fontSize: '1.0625rem',
                  color: isCurrent ? 'var(--color-accent-gold)' : 'var(--color-text-primary)',
                  marginBottom: '0.25rem',
                  cursor: 'pointer',
                }}
                onClick={() => onSelect(stage)}
              >
                {stage.name}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.375rem',
                  marginBottom: i < sorted.length - 1 ? '1rem' : 0,
                }}
              >
                {stage.characteristics.slice(0, 2).map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-display)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-secondary)',
                      background: 'rgba(139,115,85,0.08)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '999px',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
