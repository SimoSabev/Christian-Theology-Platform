// src/components/motion/RevealOnScroll.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp } from './motion';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Trigger only once on first viewport entry (default true). */
  once?: boolean;
};

export default function RevealOnScroll({ children, delay = 0, className, once = true }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
