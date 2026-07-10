// src/components/ornament/ArchPanel.tsx
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

/** Wraps a section with faint Romanesque arch SVG behind it. */
export default function ArchPanel({ children, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <svg
        aria-hidden
        viewBox="0 0 600 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        <path d="M50,200 L50,80 Q50,30 100,30 Q150,30 150,80 L150,200" stroke="var(--color-accent-gold)" strokeWidth="1" fill="none" />
        <path d="M225,200 L225,60 Q225,10 300,10 Q375,10 375,60 L375,200" stroke="var(--color-accent-gold)" strokeWidth="1.5" fill="none" />
        <path d="M450,200 L450,80 Q450,30 500,30 Q550,30 550,80 L550,200" stroke="var(--color-accent-gold)" strokeWidth="1" fill="none" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
