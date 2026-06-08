'use client';

/**
 * Initial Loader Component
 * Displays a full-screen entry animation showing the studio name letter by letter.
 * Only runs on the first visit per session (using sessionStorage).
 * Dependencies: motion/react, useEffect, useState
 * Gotchas: Blocks initial render briefly, must unmount cleanly.
 */

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface InitialLoaderProps {
  studioName: string;
}

export default function InitialLoader({ studioName }: InitialLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasLoaded = sessionStorage.getItem('vertebra_loaded');
    if (hasLoaded) {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
      return;
    }

    // Set timeout to hide loader after animation completes (approx 1.5s total)
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('vertebra_loaded', 'true');
    }, 2000); // Give it enough time to finish all staggers

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[10000] bg-background-primary flex flex-col items-center justify-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="flex font-display text-4xl md:text-6xl tracking-tight text-text-primary mb-6 ml-[0.05em] drop-shadow-md"
        >
          {studioName.split('').map((char, index) => (
            <motion.span 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="h-[1px] bg-accent"
        />
      </motion.div>
    </AnimatePresence>
  );
}
