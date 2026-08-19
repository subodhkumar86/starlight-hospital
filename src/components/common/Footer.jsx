import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  Heart
} from 'lucide-react';

export const Footer = () => {
  const { hospitalInfo, openModal, setViewMode } = useApp();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setViewMode('public');
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--primary-navy)', color: '#ffffff', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        {/* Top Emergency CTA Strip */}
        <div style={{
          background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '4rem',
          boxShadow: 'var(--shadow-xl)'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.85)' }}>
              Need Immediate Medical Assistance?
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
              Our Emergency Triage Team is Available 24 Hours A Day
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="btn"
              style={{ backgroundColor: '#ffffff', color: 'var(--primary-navy)', fontWeight: 700 }}
            >
              <Phone size={18} style={{ color: 'var(--accent-teal)' }} /> Call Emergency Hotline
            </a>
            <button
              onClick={() => handleLinkClick('/appointment')}
              className="btn"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.4)' }}
            >
              Book Online Appointment
            </button>
          </div>
        </div>

        {/* 4 Column Footer Content */}
        <div className="grid-4" style={{ marginBottom: '3.5rem', gap: '2.5rem' }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Stethoscope size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>Starlight Hospital</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-cyan-light)', letterSpacing: '0.12em' }}>{hospitalInfo.tagline}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Providing accessible, practical, and compassionate healthcare for individuals and families in Jajo, Ikorodu, Lagos State.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => openModal('adminLogin')}
                className="btn btn-sm"
                style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.8rem' }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--accent-teal-light)' }} /> Access Hospital CMS Admin
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              <li>
                <button onClick={() => handleLinkClick('/about')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> About Starlight Hospital
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> Medical Specialties & Units
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/doctors')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> Our Specialist Doctors
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/health-information')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> Health Articles & News
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/appointment')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> Schedule Consultation
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} style={{ color: 'var(--accent-teal)' }} /> Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent-teal-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>{hospitalInfo.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent-teal-light)', flexShrink: 0 }} />
                <span>{hospitalInfo.phoneNumbers.join(' / ')}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--accent-teal-light)', flexShrink: 0 }} />
                <span>{hospitalInfo.email}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Clock size={18} style={{ color: 'var(--accent-teal-light)', flexShrink: 0, marginTop: '2px' }} />
                <span>{hospitalInfo.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location Map */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Hospital Location</h4>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '160px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <iframe
                title="Starlight Hospital Location Map"
                src={hospitalInfo.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-light)'
        }}>
          <div>
            © {new Date().getFullYear()} Starlight Hospital ({hospitalInfo.tagline}). All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => handleLinkClick('/privacy')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('/terms')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
              Terms of Care
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
