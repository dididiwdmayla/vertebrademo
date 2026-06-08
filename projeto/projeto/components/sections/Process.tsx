'use client';

/**
 * Process Section
 * Step-by-step accordion-like or stacked list explaining how to book.
 */

import { CONTENT } from '@/lib/content';
import FadeUp from '../animated/FadeUp';

export default function Process() {
  return (
    <section id="processo" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <FadeUp>
            <span className="font-mono text-xs tracking-widest text-text-secondary uppercase mb-4 block">
              Protocolo
            </span>
          </FadeUp>
          <div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight text-text-primary drop-shadow-sm">
              {CONTENT.process.title}
            </h2>
          </div>
        </div>

        <div className="space-y-12 md:space-y-0">
          {CONTENT.process.steps.map((step, index) => (
            <FadeUp 
              key={step.id} 
              delay={0.1 * index}
              className="md:grid md:grid-cols-12 md:gap-8 items-start border-t border-border-subtle pt-8 pb-8 md:pb-12"
            >
              <div className="md:col-span-2 mb-4 md:mb-0">
                <div className="overflow-hidden">
                  <span className="block translate-y-0 font-display text-4xl lg:text-5xl text-accent drop-shadow-sm">
                    {step.id}
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-10">
                <h3 className="font-sans font-medium text-[15px] text-text-primary mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
