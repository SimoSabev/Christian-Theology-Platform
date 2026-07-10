// src/components/ornament/Marginalia.tsx
import { ReactNode } from 'react';

type Props = { children: ReactNode; side?: 'left' | 'right'; className?: string };

/** Italic side-note pulled to the margin. Renders inline on small screens. */
export default function Marginalia({ children, side = 'right', className = '' }: Props) {
  const align = side === 'left' ? 'lg:-translate-x-full lg:pr-6 lg:text-right' : 'lg:translate-x-full lg:pl-6';
  return (
    <aside
      className={`block lg:absolute lg:max-w-[14rem] italic text-sm ${align} ${className}`}
      style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
    >
      {children}
    </aside>
  );
}
