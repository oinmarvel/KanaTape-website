import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-gutter max-w-container-max mx-auto" id="tentang">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <div className="fade-up relative">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              className="w-full h-[500px] object-cover" 
              alt="Artisan baker dusting a cake with sugar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbb9AgiMUWQLMLp3iNZTWlOTX1deszB50JoGcRqMtnLXP0TV3KRKxBD0WuXx2CUFgcffqCW5_Hb6BSnPYz0a2RzFIiDcNwpCnuxy6U94n_7w6VTuBzQs02N4GVYTr2AH5y_cJV8-Ps67uNChtH74FRB50d_--1oXEhrwMlmPhZ0kkpT2B0DWLx97sJ801qgSRHY2leMvTsGZPbjOx5hu17eg7DhHP71GDoGDAYE9bqkXSI68mxt2exsdQTl3PLjNIil0UgNU6XIuo"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary-container p-8 rounded-lg shadow-xl hidden lg:block max-w-xs">
            <p className="text-secondary font-bold italic">"Kami percaya bahwa setiap gigitan harus membawa kenangan akan rumah."</p>
          </div>
        </div>
        <div className="fade-up space-y-md">
          <h2 className="font-display-lg text-headline-lg text-secondary">Tentang Kana Tape &amp; Kitchen</h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Kana Tape &amp; Kitchen merupakan usaha rumahan yang dikelola langsung oleh <strong>Ibu Sukana</strong>. Seluruh produk dibuat secara manual menggunakan bahan-bahan segar dan berkualitas, mulai dari proses pembuatan tape hingga berbagai olahan lainnya.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Kami selalu mengutamakan kebersihan, kualitas, dan cita rasa agar setiap produk yang diterima pelanggan selalu dalam kondisi terbaik.
          </p>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            Dengan pengalaman dalam mengolah tape dan singkong, Kana Tape &amp; Kitchen menghadirkan berbagai pilihan makanan tradisional dan modern yang cocok dinikmati bersama keluarga maupun dijadikan oleh-oleh.
          </p>
          <div className="grid grid-cols-3 gap-md pt-8">
            <div className="text-center">
              <div className="text-display-lg font-bold text-primary mb-1">1k+</div>
              <div className="text-label-md text-on-surface-variant">Terjual</div>
            </div>
            <div className="text-center border-x border-outline-variant">
              <div className="text-display-lg font-bold text-primary mb-1">100+</div>
              <div className="text-label-md text-on-surface-variant">Pelanggan</div>
            </div>
            <div className="text-center">
              <div className="text-display-lg font-bold text-primary mb-1">100%</div>
              <div className="text-label-md text-on-surface-variant">Homemade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
