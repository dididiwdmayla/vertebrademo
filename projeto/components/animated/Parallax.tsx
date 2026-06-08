'use client';

/**
 * Parallax Wrapper Component
 * Creates a subtle scroll-based vertical translation for nested elements (like images).
 * Dependencies: motion/react
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
