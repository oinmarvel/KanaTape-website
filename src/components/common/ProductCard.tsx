import React from 'react';
import type { Product } from '@/data/products';
import { Button } from './Button';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="relative pt-[75%] bg-gray-200">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Image not available
          </div>
        )}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.badge}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">
            {product.price}
          </span>
          <Button
            as="a"
            href={getWhatsAppUrl(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="gap-2"
          >
            <FaWhatsapp size={16} /> Order
          </Button>
        </div>
      </div>
    </div>
  );
};
