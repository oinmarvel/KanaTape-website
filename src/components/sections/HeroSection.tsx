import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-5 md:px-8" style={{ maxWidth: '1200px', margin: '0 auto' }} id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="fade-up space-y-5 md:space-y-6 order-2 md:order-1">
          <div className="flex flex-wrap gap-3">
            <span className="border border-secondary/40 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Halal</span>
            <span className="border border-secondary/40 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Homemade</span>
            <span className="border border-secondary/40 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Fresh Every Day</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 800 }} className="text-secondary">
            Olahan Tape Premium dengan{' '}
            <span className="italic" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Cita Rasa Rumahan</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            Menghadirkan kehangatan tradisi Indonesia melalui penganan tape fermentasi pilihan yang diolah dengan standar pâtisserie modern. Setiap gigitan adalah perpaduan sempurna antara kelembutan tekstur dan rasa manis yang autentik.
          </p>
          <div className="flex flex-row gap-4 pt-2">
            <a
              className="bg-primary text-on-primary px-7 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg active:scale-95 text-sm"
              href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan produk.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-lg" /> Pesan via WhatsApp
            </a>
            <a
              className="border-2 border-secondary text-secondary px-7 py-3.5 rounded-full font-bold flex items-center justify-center hover:bg-secondary/5 transition-all text-sm"
              href="#produk"
            >
              Lihat Produk
            </a>
          </div>
        </div>
        <div className="relative fade-up order-1 md:order-2 mt-4 md:mt-0">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] md:w-[120%] md:h-[120%] bg-primary-fixed/20 blur-3xl rounded-full"></div>
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-2xl rotate-2 md:rotate-3 relative z-10 max-w-sm md:max-w-none mx-auto">
            <img
              className="w-full aspect-square object-cover rounded-lg"
              alt="Chiffon Tape Cake"
              src="/chiffon_slice.JPG"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-secondary text-white p-3 md:p-4 rounded-lg shadow-xl hidden md:block">
              <p className="font-bold">100% Organik</p>
              <p className="text-sm opacity-80">Dari Petani Lokal</p>
            </div>
          </div>
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-primary-container rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
