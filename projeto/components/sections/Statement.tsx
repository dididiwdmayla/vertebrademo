'use client';

/**
 * Statement Section
 * An intermediate breathing section featuring a large editorial text.
 */

import { CONTENT } from '@/lib/content';

export default function Statement() {
  // Splitting into words for brutal typographic impact
  const words = CONTENT.statement.split(' ');

  return (
    <section className="py-40 px-6 overflow-hidden flex items-center justify-center border-y border-border-subtle">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-serif font-black text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85] tracking-tighter text-text-primary flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, index) => (
            <span 
              key={index} 
              className={index % 2 !== 0 ? 'text-text-secondary italic font-light' : ''}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
