import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-gutter w-full max-w-container-max mx-auto overflow-hidden" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div className="fade-up space-y-md">
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-label-md font-semibold">Halal</span>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-label-md font-semibold">Homemade</span>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-label-md font-semibold">Fresh Every Day</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-secondary leading-tight">
            Olahan Tape Premium dengan <span className="text-primary">Cita Rasa Rumahan</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Menghadirkan kehangatan tradisi Indonesia melalui penganan tape fermentasi pilihan yang diolah dengan standar pãtisserie modern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan produk.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">whatshot</span> Pesan via WhatsApp
            </a>
            <a
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-secondary/5 transition-all"
              href="#produk"
            >
              Lihat Produk
            </a>
          </div>
        </div>
        <div className="relative fade-up">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-fixed/20 blur-3xl rounded-full"></div>
          <div className="bg-white p-4 rounded-lg shadow-2xl rotate-3 relative z-10">
            <img
              className="w-full aspect-square object-cover rounded-lg"
              alt="Chiffon Tape Cake"
              src="chiffon_slice.jpg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-lg shadow-xl hidden md:block">
              <p className="font-title-md">100% Organik</p>
              <p className="text-sm opacity-80">Dari Petani Lokal</p>
            </div>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
