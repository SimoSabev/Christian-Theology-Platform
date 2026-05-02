// src/components/ornament/Eyebrow.tsx
import { CSSProperties, ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; style?: CSSProperties };

/**
 * Small all-caps gold label, e.g.
 *   <Eyebrow>PART · I · COSMOLOGICAL · § 1.1.1</Eyebrow>
 */
export default function Eyebrow({ children, className = '', style }: Props) {
  return <div className={`t-eyebrow ${className}`} style={style}>{children}</div>;
}
