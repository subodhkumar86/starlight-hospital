import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calculator, ShieldCheck, Check, Calendar, ArrowRight, DollarSign } from 'lucide-react';

export const CostCalculator = () => {
  const { services } = useApp();

  const basePackages = [
    { id: 'gen', name: 'General Medical Consultation', price: 15000, desc: 'Includes Vitals check, GP consultation, and routine prescription.' },
    { id: 'maternity', name: 'Antenatal & Safe Delivery Package', price: 120000, desc: 'Includes full ANC care, routine ultrasound scans, and normal delivery ward.' },
    { id: 'lab', name: 'Comprehensive Diagnostic Lab Screening', price: 35000, desc: 'Includes FBC, Fasting Blood Sugar, Lipid Profile, Liver Function, and Urinalysis.' },
    { id: 'paed', name: 'Childhood Immunization & Wellness Package', price: 25000, desc: 'Includes growth monitoring, routine vaccinations, and paediatric consultation.' },
    { id: 'surgery', name: 'Minor Surgical / Day Surgery Evaluation', price: 65000, desc: 'Includes pre-op screening, minor procedure theatre access, and post-op dressing.' }
  ];

  const addOns = [
    { id: 'ultrasound', name: '3D/4D Pelvic & Abdominal Ultrasound Scan', price: 15000 },
    { id: 'privateWard', name: 'Private Executive Ward Stay (Per Night)', price: 25000 },
    { id: 'hmoCheck', name: 'HMO Co-Payment Pre-Authorization Check', price: 0 },
    { id: 'ecg', name: '12-Lead Digital ECG Cardiac Scan', price: 12000 }
  ];

  const [selectedPkgId, setSelectedPkgId] = useState('gen');
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const currentPkg = basePackages.find((p) => p.id === selectedPkgId) || basePackages[0];

  const toggleAddOn = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = currentPkg.price;
    selectedAddOns.forEach((addonId) => {
      const item = addOns.find((a) => a.id === addonId);
      if (item) total += item.price;
    });
    return total;
  };

  const hmoPartners = ['Reliance HMO', 'Hygeia HMO', 'AXA Mansard Health', 'Total Health Trust', 'Anchor HMO'];

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Transparent Pricing</span>
          <h2 className="section-title">Medical Care Cost Estimator & HMO Partners</h2>
          <p className="section-subtitle">
            Calculate estimated healthcare packages for your family in Ikorodu. Starlight Hospital also accepts leading HMO health plans.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'start' }} className="calc-grid">
          {/* Left Column Package Selector */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={20} style={{ color: 'var(--accent-teal)' }} /> Select Primary Medical Service
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {basePackages.map((pkg) => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      border: `2px solid ${isSelected ? 'var(--accent-teal)' : 'var(--border-light)'}`,
                      backgroundColor: isSelected ? 'rgba(13, 148, 136, 0.05)' : '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--primary-navy)' }}>{pkg.name}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>{pkg.desc}</div>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-teal)', flexShrink: 0, marginLeft: '1rem' }}>
                      ₦{pkg.price.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--primary-navy)' }}>
              Optional Add-on Diagnostics & Wards:
            </h4>
            <div className="calc-addons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {addOns.map((addon) => {
                const isChecked = selectedAddOns.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: `1px solid ${isChecked ? 'var(--accent-cyan)' : 'var(--border-light)'}`,
                      backgroundColor: isChecked ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.85rem'
                    }}
                  >
                    <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '1px solid var(--accent-cyan)', backgroundColor: isChecked ? 'var(--accent-cyan)' : 'transparent', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {isChecked && <Check size={12} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>{addon.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {addon.price === 0 ? 'Free HMO Screening' : `+₦${addon.price.toLocaleString()}`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Total Estimate & HMO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem', background: 'linear-gradient(135deg, var(--primary-navy), #1e293b)', color: '#ffffff', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-teal-light)', letterSpacing: '0.1em' }}>
                ESTIMATED PACKAGE TOTAL
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1rem 0', lineHeight: 1 }}>
                ₦{calculateTotal().toLocaleString()}
              </div>

              <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Estimated total includes selected consultation package and add-ons. Final billing is subject to individual triage prescription.
              </div>

              <button
                onClick={scrollToAppointment}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <Calendar size={18} /> Schedule Consultation For Package
              </button>
            </div>

            {/* HMO Partners Box */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <ShieldCheck size={20} style={{ color: 'var(--accent-teal)' }} />
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)' }}>Accepted HMO Health Plans</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                We partner with primary health maintenance organizations in Nigeria:
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {hmoPartners.map((hmo) => (
                  <span key={hmo} className="badge badge-tag" style={{ fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}>
                    {hmo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .calc-addons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>

  );
};
