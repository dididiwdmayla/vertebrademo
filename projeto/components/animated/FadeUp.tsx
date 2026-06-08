'use client';

/**
 * FadeUp Wrapper Component
 * Animates children parsing from bottom to top on scroll intersection.
 * Dependencies: motion/react
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeUp({ children, delay = 0, duration = 0.6, className = '' }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
