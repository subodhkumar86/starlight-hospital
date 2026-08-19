import React from 'react';
import { AboutSection } from '../components/public/AboutSection';
import { GallerySection } from '../components/public/GallerySection';
import { TestimonialsSection } from '../components/public/TestimonialsSection';
import { FaqSection } from '../components/public/FaqSection';

export const AboutPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Starlight Hospital Identity</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          About Starlight Hospital
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
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
