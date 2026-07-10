// src/components/motion/PageTransition.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { motionDuration, motionEase } from './motion';

export default function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: motionDuration.slow, ease: motionEase.out }}
    >
      {children}
    </motion.div>
  );
}
