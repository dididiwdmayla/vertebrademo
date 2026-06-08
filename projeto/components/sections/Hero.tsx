'use client';

/**
 * Hero Section
 * Main impact area. Large typography and a dark hero image.
 */

import Image from 'next/image';
import { CONTENT } from '@/lib/content';
import { STUDIO_CONFIG } from '@/lib/config';
import FadeUp from '../animated/FadeUp';
import Parallax from '../animated/Parallax';

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden min-h-[100svh] md:min-h-[90svh] 2xl:min-h-[80svh]">
      {/* Camada 1: imagem de fundo com overlay forte */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="absolute inset-0 z-[2]" 
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.90) 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeUp delay={0.2} className="mb-6">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-text-secondary uppercase">
            {STUDIO_CONFIG.city}
          </p>
        </FadeUp>

        <div className="w-[1200px] max-w-full">
          <svg
            className="w-full h-auto block mx-auto drop-shadow-[4px_6px_0_rgba(0,0,0,0.9)] mb-8 select-none pointer-events-none"
            viewBox="0 0 1400 280"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            <defs>
              <mask id="vertebra-mask-hero">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="52%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontFamily: 'var(--font-pirata), serif' }}
                  fontSize="240"
                  fontWeight="400"
                  fill="white"
                  letterSpacing="0"
                >
                  VERTEBRA
                </text>
              </mask>
            </defs>
            
            <foreignObject
              x="0"
              y="0"
              width="100%"
              height="100%"
              mask="url(#vertebra-mask-hero)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 50%',
                  transform: 'scale(0.8)',
                  transformOrigin: 'center center'
                }}
              >
                <source src="/tinta.mp4" type="video/mp4" />
              </video>
            </foreignObject>
            
            {/* Contorno vermelho escuro POR CIMA do vídeo */}
            <text
              x="50%"
              y="52%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontFamily: 'var(--font-pirata), serif', paintOrder: 'stroke' }}
              fontSize="240"
              fontWeight="400"
              fill="none"
              stroke="#5C0A0A"
              strokeWidth="2"
            >
              VERTEBRA
            </text>
          </svg>
        </div>

        <FadeUp delay={0.6} className="max-w-2xl">
          <p className="font-sans text-[15px] md:text-[17px] text-text-secondary leading-relaxed text-balance">
            {CONTENT.hero.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={0.8} className="mt-12">
           <a
            href={`https://wa.me/${STUDIO_CONFIG.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 border border-border-subtle text-text-primary tracking-widest text-[11px] font-mono uppercase hover:bg-accent hover:border-accent transition-all duration-400"
          >
            {CONTENT.contact.ctaText}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
