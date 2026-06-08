'use client';

/**
 * MaskReveal Wrapper Component
 * Animates text natively revealing from left to right like a brush stroke.
 * Ideal for headlines.
 * Dependencies: motion/react
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function MaskReveal({ children, delay = 0, duration = 0.8, className = '' }: MaskRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0 0)' }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
