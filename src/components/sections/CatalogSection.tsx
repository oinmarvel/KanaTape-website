import React from 'react';
import { catalogProducts } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const CatalogSection: React.FC = () => {
  return (
    <section className="py-20 px-gutter max-w-container-max mx-auto">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
        {catalogProducts.map((product) => (
          <a 
            key={product.id} 
            href={getWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up space-y-2 group cursor-pointer block"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={product.title} 
                src={product.imageUrl} 
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-on-surface">{product.title}</h4>
                <p className="text-sm text-on-surface-variant">{product.description}</p>
              </div>
              <span className="text-primary font-bold whitespace-nowrap ml-2">{product.price}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
