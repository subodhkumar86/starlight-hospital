import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Globe, Sun, Moon } from 'lucide-react';

export const CmsHeader = () => {
  const { logoutAdmin, hospitalInfo, appointments, enquiries, themeMode, toggleTheme } = useApp();

  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;
  const unreadCount = enquiries.filter((e) => e.status === 'Unread').length;

  return (
    <header className="cms-header-root" style={{
      backgroundColor: 'var(--primary-navy)',
      color: '#ffffff',
      height: '68px',
      padding: '0 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Brand & Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 800,
          flexShrink: 0
        }}>
          <ShieldCheck size={20} />
        </div>
        <div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
            Starlight <span style={{ color: 'var(--accent-teal-light)' }}>CMS</span>
          </div>
          <div className="cms-sub-title" style={{ fontSize: '0.7rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
            {hospitalInfo.name} Management
          </div>
        </div>
      </div>

      {/* Right Controls & Quick Exit */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Status Alerts Pill */}
        <div className="cms-alerts-pill" style={{ display: 'flex', gap: '0.35rem' }}>
          {pendingCount > 0 && (
            <span className="badge badge-pending" style={{ fontSize: '0.7rem' }}>
              {pendingCount} Apt
            </span>
          )}
          {unreadCount > 0 && (
            <span className="badge badge-unread" style={{ fontSize: '0.7rem' }}>
              {unreadCount} Msg
            </span>
          )}
        </div>

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
            flexShrink: 0
          }}
          title="Toggle Visual Mode"
        >
          {themeMode === 'dark' ? <Sun size={14} style={{ color: '#f59e0b' }} /> : <Moon size={14} />}
        </button>

        <button
          onClick={logoutAdmin}
          className="btn btn-sm btn-outline cms-exit-btn"
          style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#ffffff', padding: '0.3rem 0.65rem', fontSize: '0.78rem' }}
        >
          <Globe size={14} /> <span className="cms-exit-text">Live Site</span>
        </button>

        <div className="cms-admin-profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '0.75rem' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'var(--accent-teal)', color: '#ffffff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem' }}>
            AD
          </div>
          <div className="cms-admin-name" style={{ fontSize: '0.78rem' }}>
            <div style={{ fontWeight: 700, color: '#ffffff' }}>Admin</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cms-sub-title, .cms-admin-name { display: none !important; }
          .cms-header-root { padding: 0 0.85rem !important; }
        }
        @media (max-width: 480px) {
          .cms-alerts-pill { display: none !important; }
        }
      `}</style>
    </header>
  );
};

