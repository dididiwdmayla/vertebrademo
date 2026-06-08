'use client';

/**
 * Footer Section
 * Simple, elegant, focusing on the main CTA.
 */

import { CONTENT } from '@/lib/content';
import { STUDIO_CONFIG } from '@/lib/config';
import FadeUp from '../animated/FadeUp';

export default function Footer() {
  return (
    <footer className="bg-background-secondary pt-32 pb-12 px-6 border-t border-border-subtle text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <FadeUp>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight text-text-primary drop-shadow-sm mb-12">
            {CONTENT.contact.title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} className="mb-24">
          <a
            href={`https://wa.me/${STUDIO_CONFIG.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-5 font-mono tracking-[0.2em] text-[11px] text-text-primary uppercase overflow-hidden border border-text-primary"
            data-cursor="hover"
          >
            <span className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-400 ease-out z-0" />
            <span className="relative z-10 transition-colors duration-400">
              {CONTENT.contact.ctaText}
            </span>
          </a>
        </FadeUp>

        <FadeUp delay={0.4} className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border-subtle font-mono text-xs text-text-secondary">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href={STUDIO_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
              Instagram
            </a>
            <a href={`https://wa.me/${STUDIO_CONFIG.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
}
