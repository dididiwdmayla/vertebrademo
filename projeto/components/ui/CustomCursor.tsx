'use client';

/**
 * Custom Cursor Component
 * Replaces the default desktop cursor with an elegant tattoo machine cursor.
 * Uses Framer Motion for smooth trailing effects.
 * Dependencies: motion/react, useEffect, useState
 */

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState<'' | 'link' | 'portfolio'>('');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);
  
  // Spring config for smooth follow
  const [springConfig] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return { damping: 50, stiffness: 400, mass: 0.3 };
    }
    return { damping: 30, stiffness: 400, mass: 0.3 };
  });
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(scale, springConfig);

  useEffect(() => {
    // Check if device supports hover
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) return;

    setTimeout(() => {
      setIsVisible(true);
    }, 0);
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // offset by half width (24 / 2)
      cursorY.set(e.clientY - 24); // offset by full height since tip is at bottom (24)
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isPortfolioHover = target.closest('[data-cursor="portfolio"]');
      const isLinkHover = 
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]');

      if (isPortfolioHover) {
        setHoverType('portfolio');
        scale.set(1.5);
      } else if (isLinkHover) {
        setHoverType('link');
        scale.set(1.5);
      } else {
        setHoverType('');
        scale.set(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, scale]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999] flex flex-col items-center justify-end"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <motion.svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="rgba(245,245,245,0.1)" 
        stroke="#F5F5F5" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="flex-shrink-0"
        style={{
          scale: scaleSpring,
          originX: 0.5,
          originY: 1, // Transform origin at 50% 100% to keep needle tip exactly on the pointer
          rotate: 15
        }}
      >
        <path d="M12 18v6" /> 
        <rect x="10" y="10" width="4" height="8" rx="1" /> 
        <path d="M12 10V6" /> 
        <circle cx="9" cy="5" r="2" /> 
        <circle cx="15" cy="5" r="2" /> 
        <path d="M7 5h10" /> 
        <path d="M15 3l-2 2" /> 
      </motion.svg>

      {hoverType === 'portfolio' && (
        <span className="absolute top-[36px] text-[#F5F5F5] font-sans text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
          Ver detalhes
        </span>
      )}
    </motion.div>
  );
}
