import React from 'react';
import { featuredProducts } from '@/data/products';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-surface-container-low px-gutter overflow-hidden" id="produk">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-display-lg text-headline-lg text-secondary mb-4">Produk Unggulan</h2>
          <p className="text-on-surface-variant">Favorit para pecinta kuliner tradisional modern.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden card-shadow fade-up group flex flex-col">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={product.title} 
                  src={product.imageUrl} 
                  loading="lazy"
                />
                <div className={`absolute top-4 right-4 text-white px-4 py-1 rounded-full text-label-md font-bold ${product.badge === 'Favorite' ? 'bg-tertiary' : product.badge === 'Signature' ? 'bg-secondary' : 'bg-primary'}`}>
                  {product.badge}
                </div>
              </div>
              <div className="p-md flex flex-col flex-grow">
                <h3 className="font-title-md text-title-md mb-2">{product.title}</h3>
                <p className="text-on-surface-variant text-body-md mb-6 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-primary font-bold text-title-md">{product.price}</span>
                  <a 
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-1 font-bold" 
                    href={getWhatsAppUrl(product.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
