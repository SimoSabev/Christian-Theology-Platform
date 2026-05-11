'use client';

import { useState } from 'react';
import type { Objection } from '@/data/arguments/types';

type Props = { objections: Objection[]; className?: string };

export default function ObjectionGrid({ objections, className = '' }: Props) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {objections.map((obj) => {
        const isOpen = open.has(obj.id);
        return (
          <div key={obj.id} style={{ border: '1px solid var(--color-border)', borderRadius: 4, overflow: 'hidden' }}>
            <button
              onClick={() => toggle(obj.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-start"
              style={{ background: isOpen ? 'rgba(212, 168, 83, 0.04)' : 'transparent' }}
            >
              <div className="flex items-center gap-3">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent-red)', flexShrink: 0, display: 'inline-block' }} />
                <span className="t-body text-sm" style={{ color: 'var(--color-text-primary)' }}>{obj.title}</span>
              </div>
              <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="px-4 py-3" style={{ border: '1px solid rgba(239,68,68,0.25)', borderRadius: 4, background: 'rgba(239,68,68,0.04)' }}>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-accent-red)' }}>OBJECTION</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{obj.description}</p>
                  </div>
                  <div className="px-4 py-3" style={{ border: '1px solid rgba(20,184,166,0.25)', borderRadius: 4, background: 'rgba(20,184,166,0.04)' }}>
                    <div className="t-eyebrow mb-2" style={{ color: 'var(--color-accent-teal)' }}>RESPONSE</div>
                    <p className="t-body text-sm" style={{ color: 'var(--color-text-secondary)' }}>{obj.response}</p>
                  </div>
                </div>
                {obj.sources.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {obj.sources.map((s) => (
                      <span key={s} className="t-meta px-2 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: 2 }}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
