import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Heart, Award, CheckCircle2, Building2 } from 'lucide-react';

export const AboutSection = () => {
  const { hospitalInfo } = useApp();

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="about-grid">
          {/* Left Column Image Overlay */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              height: '460px',
              border: '1px solid var(--border-light)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Starlight Hospital Building & Facilities"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            {/* Floating Motto Card */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-1.5rem',
                padding: '1.5rem 2rem',
                borderRadius: 'var(--radius-md)',
                maxWidth: '300px',
                borderLeft: '5px solid var(--accent-teal)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '0.12em' }}>
                HOSPITAL MOTTO
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '4px 0' }}>
                {hospitalInfo.tagline}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                "We Treat, God Heals" - Accessible healthcare built on faith and medical rigor.
              </div>
            </div>
          </div>

          {/* Right Column Text Content */}
          <div>
            <span className="pill-label">About Starlight Hospital</span>
            <h2 className="section-title">
              Providing Exceptional Medical Care to Families in Ikorodu
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Located along Imowo-Nla Road in Jajo Phase 2, Crystal Estate, <strong>Starlight Hospital</strong> was established with a clear mandate: to deliver prompt, practical, and highly skilled healthcare to residents of Jajo, Ikorodu, and Lagos at large.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Our hospital combines modern medical technology, clean sterile facilities, and an expert panel of consultant physicians, obstetricians, paediatricians, and general surgeons to ensure every patient receives personalized attention.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid-2" style={{ gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Heart size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Compassionate Care</h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px' }}>Patient comfort and dignity remain our top priority.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Medical Rigor</h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px' }}>Evidence-based protocols and stringent hygienic standards.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>24/7 Availability</h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px' }}>Round-the-clock emergency triage and admission wards.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Building2 size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Modern Diagnostics</h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '2px' }}>In-house digital ultrasound, ECG, and blood laboratory.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
