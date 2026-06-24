import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-gutter py-lg w-full max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-2 space-y-4">
          <img src="/logo.png" alt="Kana Tape & Kitchen Logo" className="h-12 md:h-16 w-auto mb-2 opacity-90 brightness-0 invert" />
          <p className="text-surface-variant/80 max-w-sm">
            Menghadirkan kualitas premium dengan sentuhan cinta ibu di setiap olahannya.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-container hover:text-secondary transition-all" href="#">
              <span className="material-symbols-outlined text-xl">face_nod</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-container hover:text-secondary transition-all" href="#">
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-primary-container">Navigasi</h4>
          <ul className="space-y-2 text-surface-variant/80 font-body-md">
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#home">Beranda</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#tentang">Tentang Kami</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#produk">Produk Unggulan</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#kontak">Hubungi Kami</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-primary-container">Legal</h4>
          <ul className="space-y-2 text-surface-variant/80 font-body-md">
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#">Kebijakan Privasi</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#">Syarat &amp; Ketentuan</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#">Kemitraan</a></li>
            <li><a className="hover:text-surface-bright transition-all hover:underline" href="#">Lokasi Toko</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-surface-variant/60">
        &copy; {new Date().getFullYear()} Kana Tape &amp; Kitchen. All rights reserved.
      </div>
    </footer>
  );
};
