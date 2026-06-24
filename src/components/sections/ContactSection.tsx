import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 px-gutter max-w-container-max mx-auto" id="kontak">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <div className="fade-up space-y-md">
          <h2 className="font-display-lg text-headline-lg text-secondary">Hubungi Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div className="p-md bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-2">location_on</span>
              <h4 className="font-bold">Alamat</h4>
              <p className="text-sm text-on-surface-variant">Jl. Pâtisserie No. 45, Bandung, Jawa Barat</p>
            </div>
            <div className="p-md bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-2">schedule</span>
              <h4 className="font-bold">Jam Buka</h4>
              <p className="text-sm text-on-surface-variant">Setiap Hari: 08.00 - 20.00 WIB</p>
            </div>
            <div className="p-md bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-2">phone</span>
              <h4 className="font-bold">WhatsApp</h4>
              <p className="text-sm text-on-surface-variant">+62 812 3456 7890</p>
            </div>
            <div className="p-md bg-white rounded-lg shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-2">share</span>
              <h4 className="font-bold">Instagram</h4>
              <p className="text-sm text-on-surface-variant">@kanatapekitchen</p>
            </div>
          </div>
          <a 
            className="w-full bg-primary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg" 
            href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin bertanya tentang produk.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">chat</span> Chat via WhatsApp Sekarang
          </a>
        </div>
        <div className="fade-up flex items-center justify-center h-full min-h-[400px]">
          <a
            href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin bertanya tentang produk.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-48 h-48 bg-[#25D366] text-white rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500 whatsapp-pulse group"
            aria-label="Chat via WhatsApp"
          >
            <span className="material-symbols-outlined text-[80px] mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>whatshot</span>
            <span className="font-bold text-lg">Hubungi Kami</span>
          </a>
        </div>
      </div>
    </section>
  );
};
