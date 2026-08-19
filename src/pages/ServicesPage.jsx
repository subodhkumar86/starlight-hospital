import React from 'react';
import { ServicesSection } from '../components/public/ServicesSection';
import { CostCalculator } from '../components/public/CostCalculator';

export const ServicesPage = () => {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="pill-label">Medical Specialties</span>
        <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
          Departments & Services
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Explore our 6 primary medical departments and transparent healthcare package pricing.
        </p>
      </div>

      <ServicesSection />
      <CostCalculator />
    </div>
  );
};
