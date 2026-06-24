import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { APP_CONFIG } from '@/constants/config';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CTASection } from '@/components/sections/CTASection';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{APP_CONFIG.businessName} | Artisan Cassava Delights</title>
        <meta name="description" content="Kana Tape & Kitchen provides the best, high-quality traditional Indonesian tape singkong. Order now for a delicious treat!" />
      </Helmet>

      <HeroSection />
      <FeaturedProductsSection />
      <AboutSection />
      <WhyChooseUsSection />
      <CatalogSection />
      <GallerySection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
};
