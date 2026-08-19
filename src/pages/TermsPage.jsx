import React from 'react';
import { ShieldCheck, HeartPulse, Activity } from 'lucide-react';

export const TermsPage = () => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="pill-label">Clinical Terms</span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Terms of Medical Care & Admission
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            General terms governing consultations, emergency triage, hospital admissions, and HMO billing.
          </p>
        </div>

        <div className="card terms-card" style={{ padding: '2rem', lineHeight: 1.8, color: 'var(--text-main)' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <Activity size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>1. Emergency Triage Priorities</h2>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            Patients presenting at our 24/7 Emergency Room are triaged based on medical severity. Critical trauma, acute respiratory distress, and active labor cases take immediate clinical priority.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <HeartPulse size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>2. HMO Clearance & Billing</h2>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            HMO registered patients must present valid primary ID and HMO membership cards at consultation desk. Additional specialized procedures outside pre-approved plans require authorization code verification.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <ShieldCheck size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>3. Appointment Confirmation Policy</h2>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>
            Online booking requests generate a reference voucher. Final clinic time slots are confirmed by our triage desk via phone or SMS prior to specialist arrival.
          </p>
        </div>
      </div>
    </div>
  );
};
