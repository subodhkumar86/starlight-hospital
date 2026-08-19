import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Calendar,
  Menu,
  X,
  Stethoscope,
  ChevronRight,
  UserCheck,
  Moon,
  Sun,
  Search
} from 'lucide-react';

export const Navbar = () => {
  const { hospitalInfo, viewMode, setViewMode, openModal, themeMode, toggleTheme } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path, sectionId) => {
    setMobileMenuOpen(false);
    if (viewMode !== 'public') {
      setViewMode('public');
    }

    if (location.pathname !== path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const triggerSearchModal = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--bg-card)', boxShadow: 'var(--shadow-sm)', borderBottom: '1px solid var(--border-light)' }}>
      {/* Top Banner Bar */}
      <div style={{ backgroundColor: 'var(--primary-navy)', color: '#ffffff', fontSize: '0.85rem', padding: '0.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`tel:${hospitalInfo.emergencyPhone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-teal-light)', fontWeight: 600, fontSize: '0.8rem' }}>
              <Phone size={13} /> 24/7: {hospitalInfo.emergencyPhone}
            </a>
            <span className="nav-location-text" style={{ opacity: 0.3 }}>|</span>
            <span className="nav-location-text" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9, fontSize: '0.8rem' }}>
              <MapPin size={13} /> Jajo Phase 2, Ikorodu
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Quick Search Command Palette Trigger */}
            <button
              onClick={triggerSearchModal}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0.2rem 0.55rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
              title="Search Doctors & Services (Ctrl + K)"
            >
              <Search size={12} style={{ color: 'var(--accent-teal-light)' }} /> Search
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              title={`Switch to ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {themeMode === 'dark' ? <Sun size={14} style={{ color: '#f59e0b' }} /> : <Moon size={14} />}
            </button>

            <button
              onClick={() => openModal('adminLogin')}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'all 0.2s'
              }}
              title="Access Administrative Portal"
            >
              <ShieldCheck size={13} style={{ color: 'var(--accent-cyan-light)' }} /> <span className="nav-cms-btn-text">CMS Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '76px' }}>
          {/* Logo & Motto */}
          <div
            onClick={() => handleNavClick('/', 'hero')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
              flexShrink: 0
            }}>
              <Stethoscope size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1.1 }}>
                Starlight <span style={{ color: 'var(--accent-teal)' }}>Hospital</span>
              </div>
              <div className="nav-tagline" style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.12em' }}>
                {hospitalInfo.tagline}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }} className="desktop-nav">
            <button onClick={() => handleNavClick('/', 'hero')} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</button>
            <button onClick={() => handleNavClick('/about', 'about')} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</button>
            <button onClick={() => handleNavClick('/services', 'services')} className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Departments</button>
            <button onClick={() => handleNavClick('/doctors', 'doctors')} className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}>Specialists</button>
            <button onClick={() => handleNavClick('/emergency')} className={`nav-link ${location.pathname === '/emergency' ? 'active' : ''}`} style={{ color: '#ef4444', fontWeight: 700 }}>Emergency</button>
            <button onClick={() => handleNavClick('/hmo-insurance')} className={`nav-link ${location.pathname === '/hmo-insurance' ? 'active' : ''}`}>HMO Plans</button>
            <button onClick={() => handleNavClick('/patient-portal')} className={`nav-link ${location.pathname === '/patient-portal' ? 'active' : ''}`}>Portal</button>
            <button onClick={() => handleNavClick('/contact', 'contact')} className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</button>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {viewMode === 'cms' ? (
              <button
                onClick={() => setViewMode('public')}
                className="btn btn-outline btn-sm"
                style={{ borderColor: 'var(--accent-teal)', color: 'var(--accent-teal)' }}
              >
                <UserCheck size={16} /> Exit CMS
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('/appointment', 'appointment')}
                className="btn btn-primary btn-sm-mobile btn-shimmer"
              >
                <Calendar size={16} /> <span className="btn-apt-text">Book Appointment</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-navy)', padding: '0.25rem' }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <button onClick={() => handleNavClick('/', 'hero')} className="mobile-nav-link">Home</button>
          <button onClick={() => handleNavClick('/about', 'about')} className="mobile-nav-link">About Us</button>
          <button onClick={() => handleNavClick('/services', 'services')} className="mobile-nav-link">Departments & Services</button>
          <button onClick={() => handleNavClick('/doctors', 'doctors')} className="mobile-nav-link">Doctors Roster</button>
          <button onClick={() => handleNavClick('/emergency')} className="mobile-nav-link" style={{ color: '#ef4444', fontWeight: 800 }}>🚨 24/7 Emergency Triage</button>
          <button onClick={() => handleNavClick('/hmo-insurance')} className="mobile-nav-link">HMO & Insurance Partners</button>
          <button onClick={() => handleNavClick('/patient-portal')} className="mobile-nav-link">Patient Portal & Records</button>
          <button onClick={() => handleNavClick('/testimonials')} className="mobile-nav-link">Patient Stories & Reviews</button>
          <button onClick={() => handleNavClick('/careers')} className="mobile-nav-link">Careers & Vacancies</button>
          <button onClick={() => handleNavClick('/faq')} className="mobile-nav-link">FAQ & Knowledge Base</button>
          <button onClick={() => handleNavClick('/contact', 'contact')} className="mobile-nav-link">Contact & Location</button>
          <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.35rem 0' }}></div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openModal('adminLogin');
            }}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            <ShieldCheck size={16} /> Access CMS Admin Portal
          </button>
        </div>
      )}


      <style>{`
        .nav-link {
          background: none;
          border: none;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-main);
          cursor: pointer;
          transition: color 0.2s;
          padding: 0.5rem 0;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-teal);
          font-weight: 700;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-navy);
          padding: 0.6rem 0;
          cursor: pointer;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 640px) {
          .nav-location-text { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-tagline { display: none !important; }
          .btn-apt-text { display: none !important; }
          .btn-sm-mobile { padding: 0.4rem 0.65rem !important; }
          .nav-cms-btn-text { display: none !important; }
        }
      `}</style>

    </header>
  );
};

