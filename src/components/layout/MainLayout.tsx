import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { getWhatsAppUrl } from '@/utils/whatsapp';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-[1000] whatsapp-pulse group" 
        href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan produk.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 1" }}>whatshot</span>
      </a>
    </div>
  );
};
