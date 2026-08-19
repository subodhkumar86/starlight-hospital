import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PhoneCall, MessageCircle, X, ShieldAlert } from 'lucide-react';

export const EmergencyFloatingButton = () => {
  const { hospitalInfo, viewMode } = useApp();
  const [open, setOpen] = useState(false);

  // Do not render in CMS view
  if (viewMode === 'cms') return null;

  return (
    <div className="emergency-floating-wrapper" style={{ position: 'fixed', bottom: '1.75rem', left: '1.75rem', zIndex: 8900 }}>
      {open ? (
        <div className="glass-dark animate-fade-in" style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)', maxWidth: '300px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--accent-teal)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.95rem', color: 'var(--accent-teal-light)' }}>
              <ShieldAlert size={18} /> 24/7 Emergency Triage
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.25rem' }}>
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '1rem', lineHeight: 1.5 }}>
            Immediate medical emergency or ambulance dispatch in Jajo, Ikorodu:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <a
              href={`tel:${hospitalInfo.emergencyPhone}`}
              className="btn btn-sm btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <PhoneCall size={14} /> Call Hotline: {hospitalInfo.emergencyPhone}
            </a>

            <a
              href={`https://wa.me/2348053587646?text=Hello%20Starlight%20Hospital,%20I%20have%20an%20emergency%20enquiry`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
              style={{ width: '100%', backgroundColor: '#25D366', color: '#ffffff', justifyContent: 'center' }}
            >
              <MessageCircle size={14} /> Chat on WhatsApp Triage
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{
            backgroundColor: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            padding: '0.7rem 1.1rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(239, 68, 68, 0.45)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'all 0.25s ease'
          }}
          className="animate-pulse"
        >
          <PhoneCall size={16} /> Emergency 24/7
        </button>
      )}

      <style>{`
        @media (max-width: 576px) {
          .emergency-floating-wrapper {
            bottom: 1rem !important;
            left: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

