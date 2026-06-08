'use client';

/**
 * Marquee Section
 * Infinite horizontal scrolling text. CSS only animation.
 */

import { CONTENT } from '@/lib/content';

export default function Marquee() {
  // We duplicate the items to ensure seamless infinite scroll
  const items = [...CONTENT.marquee, ...CONTENT.marquee, ...CONTENT.marquee, ...CONTENT.marquee];

  return (
    <div className="w-full overflow-hidden py-8 border-t border-b border-border-subtle flex items-center">
      <div className="flex w-max animate-marquee">
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-secondary whitespace-nowrap">
              {text}
            </span>
            <span className="mx-8 font-mono text-accent text-xs">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
