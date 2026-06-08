'use client';

/**
 * About Section
 * Presenting the artist in a brutalist asymmetric layout.
 */

import Image from 'next/image';
import { CONTENT } from '@/lib/content';
import FadeUp from '../animated/FadeUp';
import Parallax from '../animated/Parallax';
import aboutImage from '@/src/assets/images/regenerated_image_1779686398045.jpg';

export default function About() {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0">
            <Parallax offset={40} className="w-full h-full">
              <Image
                src={aboutImage}
                alt={CONTENT.about.artistName}
                fill
                className="object-cover image-dark-filter grayscale"
                referrerPolicy="no-referrer"
              />
            </Parallax>
            {/* Decorative border */}
            <div className="absolute -inset-4 border border-border-subtle z-0 pointer-events-none hidden md:block" />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.1} className="mb-6">
              <h2 className="font-mono text-xs tracking-widest text-text-secondary uppercase">
                O Artista
              </h2>
            </FadeUp>
            
            <div className="mb-8">
              <h3 className="font-display text-5xl md:text-6xl tracking-tight text-text-primary drop-shadow-sm">
                {CONTENT.about.artistName}
              </h3>
            </div>

            <div className="space-y-6 text-text-secondary font-sans text-[15px] leading-relaxed max-w-2xl">
              {CONTENT.about.bio.map((paragraph, idx) => (
                <FadeUp key={idx} delay={0.3 + (idx * 0.1)}>
                  <p>{paragraph}</p>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.6} className="mt-12 pt-8 border-t border-border-subtle">
              <ul className="flex flex-wrap gap-2">
                {CONTENT.about.tags.map((tag) => (
                  <li key={tag}>
                    <span className="px-3 py-1.5 border border-border-subtle text-[9px] text-text-primary font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
          
        </div>
      </div>
    </section>
  );
}
