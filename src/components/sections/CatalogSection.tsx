import React from 'react';
import { catalogProducts } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const CatalogSection: React.FC = () => {
  return (
    <section className="py-20 px-gutter max-w-container-max mx-auto" id="katalog">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div className="fade-up">
          <h2 className="font-display-lg text-headline-lg text-secondary">Katalog Lengkap</h2>
          <p className="text-on-surface-variant">Pilih menu favorit Anda sekarang.</p>
        </div>
        <div className="flex gap-2 fade-up">
          <button className="bg-primary text-on-primary px-4 py-2 rounded-full text-label-md">Semua</button>
          <button className="bg-white border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full text-label-md hover:bg-surface-container transition-all">Cake</button>
          <button className="bg-white border border-outline-variant text-on-surface-variant px-4 py-2 rounded-full text-label-md hover:bg-surface-container transition-all">Snack</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
        {catalogProducts.map((product) => (
          <a 
            key={product.id} 
            href={getWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up space-y-3 group cursor-pointer block bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={product.title} 
                src={product.imageUrl} 
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex justify-between items-start gap-2 mb-1">
                <h4 className="font-bold text-on-surface leading-tight">{product.title}</h4>
                <span className="text-primary font-bold whitespace-nowrap text-sm">{product.price}</span>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2">{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
