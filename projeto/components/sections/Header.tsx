'use client';

/**
 * Header Section Component
 * Fixed sticky header. Becomes slightly solid with a bottom border on scroll.
 */

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'motion/react';
import { STUDIO_CONFIG } from '@/lib/config';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Add event listener directly since useMotionValueEvent can be tricky sometimes with React 19
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-background-primary/90 backdrop-blur-md border-b border-border-subtle' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center">
          <svg
            className="w-[180px] h-[36px] block drop-shadow-sm select-none pointer-events-none"
            viewBox="0 0 200 40"
            preserveAspectRatio="xMidYMid meet"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            <defs>
              <mask id="vertebra-mask-header">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ fontFamily: 'var(--font-pirata), serif' }}
                  fontSize="32"
                  fontWeight="400"
                  fill="white"
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
              mask="url(#vertebra-mask-header)"
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
                  objectPosition: 'center 30%'
                }}
              >
                <source src="/tinta.mp4" type="video/mp4" />
              </video>
            </foreignObject>

            {/* Contorno no logo */}
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontFamily: 'var(--font-pirata), serif', paintOrder: 'stroke' }}
              fontSize="32"
              fontWeight="400"
              fill="none"
              stroke="#5C0A0A"
              strokeWidth="0.5"
            >
              VERTEBRA
            </text>
          </svg>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono tracking-widest text-text-secondary uppercase">
          {['Sobre', 'Portfólio', 'Processo'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="relative py-2 hover:text-text-primary transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={`https://wa.me/${STUDIO_CONFIG.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-3 border border-border-subtle text-text-primary hover:bg-text-primary hover:text-background-primary transition-all duration-400"
          >
            Agendar
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
