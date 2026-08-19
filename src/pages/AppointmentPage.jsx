import React from 'react';
import { AppointmentSection } from '../components/public/AppointmentSection';

export const AppointmentPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Online Booking</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          Schedule A Consultation
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Book a consultation date with our medical specialists. Submission logs directly into our CMS triage system.
        </p>
      </div>

      <AppointmentSection />
    </div>
  );
};
