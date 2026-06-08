'use client';

/**
 * Portfolio Section
 * Displays a masonry-like grid of tattoo works.
 */

import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import FadeUp from '../animated/FadeUp';
import Parallax from '../animated/Parallax';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 cursor-default">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <FadeUp>
            <span className="font-mono text-xs tracking-widest text-text-secondary uppercase mb-4 block">
              Arquivo
            </span>
          </FadeUp>
          <div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-text-primary drop-shadow-sm">
              Trabalhos
            </h2>
          </div>
        </div>

        {/* CSS-based masonry layout for varied imagery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIO_DATA.map((item, index) => (
            <FadeUp key={item.id} delay={0.1 * (index % 3)} className="break-inside-avoid">
              <div 
                className="relative group overflow-hidden bg-background-secondary"
                data-cursor="portfolio"
              >
                <Parallax offset={20} className="w-full aspect-[4/5]">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    className="object-cover image-dark-filter group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </Parallax>
                
                {/* Hover overlay with info */}
                <div className="absolute inset-x-4 bottom-4 flex justify-start pointer-events-none">
                  <div className="font-mono text-[9px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background-primary/80 px-2 py-1 text-text-primary">
                    {item.style} / {item.size} / {item.placement}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
