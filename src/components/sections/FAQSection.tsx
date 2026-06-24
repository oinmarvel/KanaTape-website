import React from 'react';
import { faqItems } from '@/data/faq';

export const FAQSection: React.FC = () => {
  return (
    <section className="py-20 bg-surface-container-low px-gutter" id="faq">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center font-display-lg text-headline-lg text-secondary mb-12 fade-up">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4">
          {faqItems.map((faq) => (
            <details key={faq.id} className="bg-white p-md rounded-lg card-shadow fade-up group">
              <summary className="font-bold text-on-surface cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="pt-4 text-on-surface-variant">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
