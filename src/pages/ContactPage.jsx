import React from 'react';
import { EnquirySection } from '../components/public/EnquirySection';

export const ContactPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Get In Touch</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          Contact Starlight Hospital
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Have questions about HMO coverage, antenatal packages, or hospital visits? Send us an enquiry below.
        </p>
      </div>

      <EnquirySection />
    </div>
  );
};
