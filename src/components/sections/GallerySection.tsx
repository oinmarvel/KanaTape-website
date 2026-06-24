import React, { useState, useEffect } from 'react';

export const GallerySection: React.FC = () => {
  const images = [
    { src: 'tape_galeri1.JPG', alt: 'Sliced cassava cake on a black stone plate' },
    { src: 'tape_galeri2.JPG', alt: 'Kitchen ingredients flat-lay' },
    { src: 'gethuk_galeri1.JPG', alt: 'Hand picking up a piece of Gethuk Tape' },
    { src: 'chiffon_slicecoklat.JPG', alt: 'Delivery person handing over a box' },
    { src: 'hemi_monyet.jpeg', alt: 'Monyet pecinta tape muffin' },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  return (
    <section className="py-20 bg-surface-container-low px-gutter" id="galeri">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-display-lg text-headline-lg text-secondary mb-12 fade-up">Galeri Rasa</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-md space-y-md">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="fade-up overflow-hidden rounded-lg group cursor-pointer relative"
              onClick={() => openModal(idx)}
            >
              <img
                className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700"
                alt={img.alt}
                src={img.src}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 p-2 z-50"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 bg-black/50 rounded-full"
            onClick={prevImage}
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>
          
          <img 
            src={images[selectedIndex].src} 
            alt={images[selectedIndex].alt}
            className="max-h-full max-w-full object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 bg-black/50 rounded-full"
            onClick={nextImage}
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full font-medium">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};
