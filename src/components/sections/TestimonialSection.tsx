import React from 'react';
import { testimonials } from '@/data/testimonials';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 px-gutter max-w-container-max mx-auto overflow-hidden">
      <h2 className="text-center font-display-lg text-headline-lg text-secondary mb-16 fade-up">Apa Kata Mereka?</h2>
      <div className="flex gap-lg overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
        {testimonials.map((testi, idx) => (
          <div 
            key={testi.id} 
            className={`min-w-full md:min-w-[400px] snap-center bg-white p-lg rounded-lg card-shadow fade-up space-y-4 ${idx === 1 ? 'border-2 border-primary-container' : ''}`}
          >
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="text-body-lg italic text-on-surface-variant">"{testi.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold">
                {testi.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold">{testi.name}</p>
                <p className="text-sm opacity-60">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
