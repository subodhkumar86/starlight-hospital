import React from 'react';
import { NewsSection } from '../components/public/NewsSection';

export const NewsPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Health Education</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          Starlight Health News & Advice
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Medical advice, health tips, and hospital updates published by our chief medical board.
        </p>
      </div>

      <NewsSection />
    </div>
  );
};
