import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '@/utils/whatsapp';
import { cn } from '@/utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Produk', href: '#produk' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={cn(
        'bg-white/80 backdrop-blur-xl fixed top-0 w-full z-[100] transition-all duration-300',
        isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
      )}
    >
      <div className="flex justify-between items-center px-gutter w-full max-w-container-max mx-auto">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Kana Tape & Kitchen Logo" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-md items-center font-body-md">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'transition-colors hover:text-primary',
                index === 0 ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-md"
            href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan produk.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesan Sekarang
          </a>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-secondary focus:outline-none flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-gutter flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary font-bold block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-bold text-center mt-4"
            href={getWhatsAppUrl('Halo Kana Tape & Kitchen, saya ingin memesan produk.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
};
