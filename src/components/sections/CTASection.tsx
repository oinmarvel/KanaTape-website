import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-gutter bg-primary-container text-on-primary-container relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#675000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </div>
      <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
        <h2 className="font-display-lg text-display-md md:text-display-lg mb-6 md:mb-8">Siap Menikmati Olahan Tape Favorit Anda?</h2>
        <p className="text-body-lg mb-12 opacity-90">Jangan lewatkan kelezatan premium buatan tangan kami. Pesan hari ini untuk pengiriman esok hari!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-body-lg hover:scale-105 transition-all shadow-xl" 
            href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan sekarang.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </a>
          <a 
            className="bg-white/20 backdrop-blur-md border-2 border-secondary/20 text-secondary px-10 py-4 rounded-full font-bold text-body-lg hover:bg-white/30 transition-all" 
            href="#produk"
          >
            Lihat Katalog
          </a>
        </div>
      </div>
    </section>
  );
};
