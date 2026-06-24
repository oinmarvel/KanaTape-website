import React from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { FaWhatsapp } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-gutter max-w-container-max mx-auto" id="kontak">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg items-start">
        <div className="fade-up space-y-md">
          <h2 className="font-display-lg text-headline-lg text-secondary">Hubungi Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Talun+Kacang+RT+04+RT+03+Kandri+Gunungpati"
              target="_blank"
              rel="noopener noreferrer"
              className="p-md bg-white rounded-lg shadow-sm border border-outline-variant/30 hover:shadow-md hover:border-primary/30 transition-all group block"
            >
              <span className="material-symbols-outlined text-primary mb-2 group-hover:scale-110 transition-transform inline-block">location_on</span>
              <h4 className="font-bold">Alamat</h4>
              <p className="text-sm text-on-surface-variant">Jl. Talun Kacang RT 04 RT 03 Kandri, Gunungpati</p>
            </a>
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
            <FaWhatsapp className="text-xl" /> Chat via WhatsApp Sekarang
          </a>
        </div>
        <div className="fade-up h-full min-h-[300px] md:min-h-[450px]">
          <div className="rounded-lg overflow-hidden shadow-2xl border border-outline-variant/30 h-full">
            <iframe
              title="Lokasi Kana Tape & Kitchen"
              src="https://maps.google.com/maps?q=-7.0475,110.3635&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
