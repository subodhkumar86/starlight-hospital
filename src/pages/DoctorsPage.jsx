import React from 'react';
import { DoctorsSection } from '../components/public/DoctorsSection';

export const DoctorsPage = () => {
  return (
    <div style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <span className="pill-label">Medical Specialists</span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
          Our Specialist Doctors Roster
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
          Meet our consultant physicians, obstetricians, paediatricians, and general surgeons in Ikorodu.
        </p>
      </div>


      <DoctorsSection />
    </div>
  );
};
