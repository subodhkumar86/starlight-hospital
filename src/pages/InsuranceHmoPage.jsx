import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2, Search, ArrowRight, HelpCircle, FileText } from 'lucide-react';

export const InsuranceHmoPage = () => {
  const { showToast } = useApp();
  const [searchHmo, setSearchHmo] = useState('');
  const [selectedHmo, setSelectedHmo] = useState(null);

  const hmoList = [
    { name: 'Reliance HMO', tier: 'Primary Partner', desc: 'Full coverage for outpatient consultation, antenatal care, and minor surgery.', status: 'Accepted' },
    { name: 'Hygeia HMO', tier: 'Primary Partner', desc: 'Covers specialist consultations, 3D ultrasound scans, and paediatric care.', status: 'Accepted' },
    { name: 'AXA Mansard Health', tier: 'Gold Partner', desc: 'Includes inpatient executive ward admission, lab screening, and surgeries.', status: 'Accepted' },
    { name: 'Total Health Trust', tier: 'Primary Partner', desc: 'Covers general GP consultations, emergency triage, and immunization.', status: 'Accepted' },
    { name: 'Anchor HMO', tier: 'Registered Partner', desc: 'Covers primary healthcare, antenatal delivery, and diagnostics.', status: 'Accepted' },
    { name: 'Redcare HMO', tier: 'Registered Partner', desc: 'Includes routine lab screening, prescription drugs, and ER treatment.', status: 'Accepted' },
    { name: 'Metro Health HMO', tier: 'Registered Partner', desc: 'Covers general consultations and minor outpatient procedures.', status: 'Accepted' },
    { name: 'Songhai Health Trust', tier: 'Registered Partner', desc: 'Covers paediatric care, obstetrics, and hospital admissions.', status: 'Accepted' }
  ];

  const filteredHmos = hmoList.filter((h) => h.name.toLowerCase().includes(searchHmo.toLowerCase()));

  const handleHmoCheck = (hmo) => {
    setSelectedHmo(hmo);
    showToast('HMO Verification Selected', `Checking pre-authorization rules for ${hmo.name}`, 'info');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e293b 60%, var(--accent-teal) 100%)',
        color: '#ffffff',
        padding: '4.5rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="pill-label" style={{ backgroundColor: 'rgba(13, 148, 136, 0.2)', color: 'var(--accent-teal-light)' }}>
            <ShieldCheck size={14} /> Accredited HMO Partners
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', margin: '0.75rem 0' }}>
            HMO & Health Insurance <span style={{ color: 'var(--accent-teal-light)' }}>Plans Accepted</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Starlight Hospital partners with leading Nigerian Health Maintenance Organizations to provide cashless healthcare for individuals, corporate employees, and families.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          {/* Search Toolbar */}
          <div className="card glass-card-glow" style={{ padding: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flexGrow: 1, minWidth: '260px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search your HMO provider name (e.g. Reliance, Hygeia, AXA)..."
                  value={searchHmo}
                  onChange={(e) => setSearchHmo(e.target.value)}
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-light)' }} />
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-teal)' }}>
                {filteredHmos.length} HMO Partners Verified
              </div>
            </div>
          </div>

          {/* HMO Grid Cards */}
          <div className="grid-3" style={{ marginBottom: '4rem' }}>
            {filteredHmos.map((hmo) => (
              <div
                key={hmo.name}
                className="card card-lift"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge badge-tag" style={{ fontSize: '0.75rem' }}>{hmo.tier}</span>
                    <span className="badge badge-confirmed" style={{ fontSize: '0.72rem' }}>
                      <CheckCircle2 size={12} /> {hmo.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                    {hmo.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {hmo.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleHmoCheck(hmo)}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Verify Plan Clearance
                </button>
              </div>
            ))}
          </div>

          {/* HMO Clearance Process Info */}
          <div className="card glass-card-glow" style={{ padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={24} style={{ color: 'var(--accent-teal)' }} /> How to Access Care via HMO
            </h2>
            <div className="grid-3" style={{ gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 800, color: 'var(--accent-teal)', fontSize: '1.2rem', marginBottom: '0.35rem' }}>Step 1</div>
                <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--primary-navy)' }}>Present HMO Card at Reception</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Bring your valid HMO ID card and primary photo ID to our triage desk in Jajo, Ikorodu.</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 800, color: 'var(--accent-teal)', fontSize: '1.2rem', marginBottom: '0.35rem' }}>Step 2</div>
                <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--primary-navy)' }}>Pre-Authorization Verification</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Our HMO billing officer verifies your authorization code for specialist consultations or lab tests.</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontWeight: 800, color: 'var(--accent-teal)', fontSize: '1.2rem', marginBottom: '0.35rem' }}>Step 3</div>
                <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--primary-navy)' }}>Cashless Consultation</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Proceed to consult physician with zero out-of-pocket expenses for covered benefits.</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link to="/appointment" className="btn btn-primary btn-lg btn-shimmer">
                Book Consultation with HMO Coverage <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
