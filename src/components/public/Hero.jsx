import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  PhoneCall,
  ShieldAlert,
  Award,
  Users,
  CheckCircle,
  Stethoscope,
  Clock,
  Sparkles,
  Activity
} from 'lucide-react';

export const Hero = () => {
  const { hospitalInfo } = useApp();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0b1528 0%, #1e293b 60%, #0f766e 100%)',
      color: '#ffffff',
      padding: '5.5rem 0 6rem 0',
      overflow: 'hidden'
    }}>
      {/* Dynamic backdrop glows */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '550px',
        height: '550px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column Text & CTAs */}
          <div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent-teal-light)'
              }}>
                <Sparkles size={16} /> Premier Healthcare in Jajo, Ikorodu
              </div>

              {/* Live Operational Triage Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#34d399'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399' }} className="animate-pulse-dot"></span>
                <span>24/7 Triage Active</span>
              </div>
            </div>

            <h1 style={{
              fontSize: '3.25rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
            }}>
              World-Class Healthcare with <span style={{ color: 'var(--accent-teal-light)' }}>Compassion & Excellence</span>
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '2.25rem',
              maxWidth: '580px'
            }}>
              At <strong>Starlight Hospital</strong> (*{hospitalInfo.tagline}*), we provide comprehensive medical consultations, obstetrics, paediatrics, surgical operations, and 24/7 emergency response for families across Lagos.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button
                onClick={() => scrollToSection('appointment')}
                className="btn btn-primary btn-lg"
              >
                <Calendar size={20} /> Book Appointment
              </button>
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="btn btn-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.3)' }}
              >
                <PhoneCall size={20} style={{ color: 'var(--accent-teal-light)' }} /> Call Hotline ({hospitalInfo.emergencyPhone})
              </a>
            </div>

            {/* Micro Highlights */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-teal-light)' }} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>24/7 Emergency Care</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-teal-light)' }} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>Specialist Doctors</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <CheckCircle size={20} style={{ color: 'var(--accent-teal-light)' }} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>Modern Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Right Column Glass Cards Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="glass-dark animate-float" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(13, 148, 136, 0.25)', color: 'var(--accent-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldAlert size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#ffffff' }}>24/7 Emergency Services</h3>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Always ready for urgent care</p>
                  </div>
                </div>
                <span className="badge badge-confirmed" style={{ fontSize: '0.75rem' }}>Active 24/7</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                Fully staffed surgical, maternity, and trauma resuscitation units equipped with emergency ambulances and on-call consultants.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div className="glass-dark" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-cyan-light)', lineHeight: 1 }}>15+</div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '4px' }}>Specialist Doctors</div>
              </div>
              <div className="glass-dark" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-teal-light)', lineHeight: 1 }}>10,000+</div>
                <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '4px' }}>Patients Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
