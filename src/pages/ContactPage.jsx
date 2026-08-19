import React from 'react';
import { EnquirySection } from '../components/public/EnquirySection';

export const ContactPage = () => {
  return (
    <div style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span className="pill-label">Get In Touch</span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Contact Starlight Hospital
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
          Have questions about HMO coverage, antenatal packages, or hospital visits? Send us an enquiry below.
        </p>
      </div>


      <EnquirySection />
    </div>
  );
};
