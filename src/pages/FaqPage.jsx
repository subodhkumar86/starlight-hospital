import React from 'react';
import { FaqSection } from '../components/public/FaqSection';
import { HelpCircle } from 'lucide-react';

export const FaqPage = () => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-light)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">
          <HelpCircle size={14} /> Knowledge Base & Triage FAQ
        </span>
        <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
          Find answers regarding emergency triage, HMO clearance, antenatal packages, and visiting hours at Starlight Hospital.
        </p>
      </div>

      <FaqSection />
    </div>
  );
};
