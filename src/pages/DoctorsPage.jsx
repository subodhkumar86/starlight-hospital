import React from 'react';
import { DoctorsSection } from '../components/public/DoctorsSection';

export const DoctorsPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Medical Specialists</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          Our Specialist Doctors Roster
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Meet our consultant physicians, obstetricians, paediatricians, and general surgeons in Ikorodu.
        </p>
      </div>

      <DoctorsSection />
    </div>
  );
};
