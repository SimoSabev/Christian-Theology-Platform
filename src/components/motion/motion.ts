// src/components/motion/motion.ts
//
// Motion tokens. Components MUST import durations/easings from here
// rather than hardcoding numbers.

export const motionDuration = {
  fast: 0.15,    // seconds — for framer-motion
  base: 0.45,
  slow: 0.6,
} as const;

export const motionEase = {
  out: [0.22, 1, 0.36, 1] as const, // ease-out-quart
} as const;

export const motionStagger = {
  prose: 0.08, // 80ms between children in scroll-reveal lists
} as const;

// Convenience presets for framer-motion <motion.*> elements.
export const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.slow, ease: motionEase.out },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: motionDuration.base, ease: motionEase.out } },
} as const;
