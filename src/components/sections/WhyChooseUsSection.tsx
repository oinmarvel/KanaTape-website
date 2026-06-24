import React from 'react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary text-surface-container-lowest px-gutter">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-display-lg text-headline-lg mb-16 fade-up">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
          {/* Point 1 */}
          <div className="p-md bg-white/10 rounded-lg backdrop-blur-sm fade-up text-center border border-white/5">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4">oven_gen</span>
            <h3 className="font-title-md mb-2">Resep Rumahan</h3>
            <p className="text-sm opacity-80">Warisan keluarga yang disempurnakan selama bertahun-tahun.</p>
          </div>
          {/* Point 2 */}
          <div className="p-md bg-white/10 rounded-lg backdrop-blur-sm fade-up text-center border border-white/5">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4">eco</span>
            <h3 className="font-title-md mb-2">Bahan Premium</h3>
            <p className="text-sm opacity-80">Menggunakan bahan baku kualitas ekspor tanpa pengawet.</p>
          </div>
          {/* Point 3 */}
          <div className="p-md bg-white/10 rounded-lg backdrop-blur-sm fade-up text-center border border-white/5">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4">local_shipping</span>
            <h3 className="font-title-md mb-2">Pengiriman Cepat</h3>
            <p className="text-sm opacity-80">Dikirim sesaat setelah keluar dari oven (Freshly Baked).</p>
          </div>
          {/* Point 4 */}
          <div className="p-md bg-white/10 rounded-lg backdrop-blur-sm fade-up text-center border border-white/5">
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4">verified</span>
            <h3 className="font-title-md mb-2">Kualitas Terjamin</h3>
            <p className="text-sm opacity-80">QC ketat untuk memastikan rasa yang konsisten di tiap gigitan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
