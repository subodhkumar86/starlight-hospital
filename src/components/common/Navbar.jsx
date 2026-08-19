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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href={`tel:${hospitalInfo.emergencyPhone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-teal-light)', fontWeight: 600 }}>
              <Phone size={14} /> Emergency 24/7: {hospitalInfo.emergencyPhone}
            </a>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9 }}>
              <MapPin size={14} /> Jajo Phase 2, Ikorodu, Lagos
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {/* Quick Search Command Palette Trigger */}
            <button
              onClick={triggerSearchModal}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              title="Search Doctors & Services (Ctrl + K)"
            >
              <Search size={13} style={{ color: 'var(--accent-teal-light)' }} /> Search (Ctrl+K)
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              title={`Switch to ${themeMode === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {themeMode === 'dark' ? <Sun size={15} style={{ color: '#f59e0b' }} /> : <Moon size={15} />}
            </button>

            <button
              onClick={() => openModal('adminLogin')}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.25rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s'
              }}
              title="Access Administrative Portal"
            >
              <ShieldCheck size={14} style={{ color: 'var(--accent-cyan-light)' }} /> CMS Admin Portal
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
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)'
            }}>
              <Stethoscope size={26} />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1.1 }}>
                Starlight <span style={{ color: 'var(--accent-teal)' }}>Hospital</span>
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
                {hospitalInfo.tagline}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
            <button onClick={() => handleNavClick('/', 'hero')} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</button>
            <button onClick={() => handleNavClick('/about', 'about')} className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</button>
            <button onClick={() => handleNavClick('/services', 'services')} className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Departments</button>
            <button onClick={() => handleNavClick('/doctors', 'doctors')} className={`nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}>Specialists</button>
            <button onClick={() => handleNavClick('/health-information')} className={`nav-link ${location.pathname.startsWith('/health-information') ? 'active' : ''}`}>Health Information</button>
            <button onClick={() => handleNavClick('/contact', 'contact')} className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</button>
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {viewMode === 'cms' ? (
              <button
                onClick={() => setViewMode('public')}
                className="btn btn-outline btn-sm"
                style={{ borderColor: 'var(--accent-teal)', color: 'var(--accent-teal)' }}
              >
                <UserCheck size={16} /> Exit CMS to Site
              </button>
            ) : (
              <button
                onClick={() => handleNavClick('/appointment', 'appointment')}
                className="btn btn-primary"
              >
                <Calendar size={16} /> Book Appointment
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-navy)' }}
              className="mobile-toggle"
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
          gap: '1rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <button onClick={() => handleNavClick('/', 'hero')} className="mobile-nav-link">Home</button>
          <button onClick={() => handleNavClick('/about', 'about')} className="mobile-nav-link">About Us</button>
          <button onClick={() => handleNavClick('/services', 'services')} className="mobile-nav-link">Departments & Services</button>
          <button onClick={() => handleNavClick('/doctors', 'doctors')} className="mobile-nav-link">Doctors Roster</button>
          <button onClick={() => handleNavClick('/health-information')} className="mobile-nav-link">Health Information</button>
          <button onClick={() => handleNavClick('/contact', 'contact')} className="mobile-nav-link">Contact & Location</button>
          <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.5rem 0' }}></div>
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
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary-navy);
          padding: 0.5rem 0;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
