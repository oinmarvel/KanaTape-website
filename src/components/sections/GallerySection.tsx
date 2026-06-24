import React from 'react';

export const GallerySection: React.FC = () => {
  const images = [
    { src: 'tape_galeri1.JPG', alt: 'Sliced cassava cake on a black stone plate' },
    { src: 'tape_galeri2.JPG', alt: 'Kitchen ingredients flat-lay' },
    { src: 'gethuk_galeri1.JPG', alt: 'Hand picking up a piece of Gethuk Tape' },
    { src: 'chiffon_slicecoklat.JPG', alt: 'Delivery person handing over a box' },
    { src: 'hemi_monyet.jpeg', alt: 'Monyet pecinta tape muffin' },
  ];

  return (
    <section className="py-20 bg-surface-container-low px-gutter" id="galeri">
      <div className="max-w-container-max mx-auto">
        <h2 className="text-center font-display-lg text-headline-lg text-secondary mb-12 fade-up">Galeri Rasa</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-md space-y-md">
          {images.map((img, idx) => (
            <div key={idx} className="fade-up overflow-hidden rounded-lg group">
              <img
                className="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700"
                alt={img.alt}
                src={img.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
