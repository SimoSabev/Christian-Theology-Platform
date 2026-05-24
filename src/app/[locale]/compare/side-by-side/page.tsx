'use client';

import { Eyebrow, KeystoneDivider } from '@/components/ornament';
import DoctrineDiff from '@/components/compare/DoctrineDiff';

export default function SideBySidePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <Eyebrow className="mb-3">COMPARE · SIDE BY SIDE</Eyebrow>
        <h1 className="t-h1 mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>Tradition Comparison</h1>
        <p className="t-body" style={{ color: 'var(--color-text-secondary)' }}>
          Select two traditions to see their positions on each doctrine highlighted side by side.
        </p>
      </div>
      <KeystoneDivider className="mb-10" />
      <DoctrineDiff />
    </div>
  );
}
