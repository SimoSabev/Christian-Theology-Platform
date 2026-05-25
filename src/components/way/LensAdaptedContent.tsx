'use client';

import { ReactNode } from 'react';
import { useLens } from '@/components/lens';
import { Lens } from '@/components/lens/types';

interface LensAdaptedContentProps {
  children: ReactNode;
  onlyFor?: Lens[];
  exceptFor?: Lens[];
  alternate?: ReactNode;
}

export default function LensAdaptedContent({
  children,
  onlyFor,
  exceptFor,
  alternate,
}: LensAdaptedContentProps) {
  const { lens } = useLens();

  if (onlyFor && !onlyFor.includes(lens)) {
    return alternate ? <>{alternate}</> : null;
  }

  if (exceptFor && exceptFor.includes(lens)) {
    return alternate ? <>{alternate}</> : null;
  }

  return <>{children}</>;
}
