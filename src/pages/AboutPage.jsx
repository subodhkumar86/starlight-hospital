import React from 'react';
import { AboutSection } from '../components/public/AboutSection';
import { GallerySection } from '../components/public/GallerySection';
import { TestimonialsSection } from '../components/public/TestimonialsSection';
import { FaqSection } from '../components/public/FaqSection';

export const AboutPage = () => {
  return (
    <div style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span className="pill-label">Starlight Hospital Identity</span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          About Starlight Hospital
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
          Excellence in healthcare, compassion in action. Learn about our facility in Jajo, Ikorodu, Lagos State.
        </p>
      </div>


      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
};
