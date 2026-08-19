import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="pill-label">Patient Confidentiality</span>
          <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Starlight Hospital Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
            How we protect patient health data, medical records, and online confidentiality in accordance with medical ethics.
          </p>
        </div>

        <div className="card privacy-card" style={{ padding: '2rem', lineHeight: 1.8, color: 'var(--text-main)' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <ShieldCheck size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>1. Patient Data Protection Principles</h2>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            At Starlight Hospital (*DEO MEDICE*), we hold patient confidentiality as a sacred medical obligation. Any personal or diagnostic data collected during online appointment booking, laboratory testing, or medical consultation is strictly protected and shared only with attending clinical staff.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <Lock size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>2. Electronic Health Record (EHR) Security</h2>
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            Appointment details, medical history notes, and laboratory reports submitted via our portal are encrypted and accessible exclusively by verified medical administrators and assigned consultant physicians.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>
            <FileText size={28} />
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>3. Patient Rights & Data Access</h2>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>
            Patients have full rights to request printed copies of their clinical summary, laboratory reports, or antenatal progress records at our health records unit in Jajo, Ikorodu.
          </p>
        </div>
      </div>
    </div>
  );
};
