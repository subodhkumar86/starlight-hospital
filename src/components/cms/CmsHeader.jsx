import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Globe, Sun, Moon } from 'lucide-react';

export const CmsHeader = () => {
  const { logoutAdmin, hospitalInfo, appointments, enquiries, themeMode, toggleTheme } = useApp();

  const pendingCount = appointments.filter((a) => a.status === 'Pending').length;
  const unreadCount = enquiries.filter((e) => e.status === 'Unread').length;

  return (
    <header style={{
      backgroundColor: 'var(--primary-navy)',
      color: '#ffffff',
      height: '68px',
      padding: '0 1.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Brand & Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 800
        }}>
          <ShieldCheck size={22} />
        </div>
        <div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
            Starlight <span style={{ color: 'var(--accent-teal-light)' }}>CMS Admin</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>
            {hospitalInfo.name} Management Suite
          </div>
        </div>
      </div>

      {/* Right Controls & Quick Exit */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        {/* Status Alerts Pill */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {pendingCount > 0 && (
            <span className="badge badge-pending" style={{ fontSize: '0.75rem' }}>
              {pendingCount} Pending Apt
            </span>
          )}
          {unreadCount > 0 && (
            <span className="badge badge-unread" style={{ fontSize: '0.75rem' }}>
              {unreadCount} Unread Msg
            </span>
          )}
        </div>

        <button
          onClick={toggleTheme}
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Toggle Visual Mode"
        >
          {themeMode === 'dark' ? <Sun size={15} style={{ color: '#f59e0b' }} /> : <Moon size={15} />}
        </button>

        <button
          onClick={logoutAdmin}
          className="btn btn-sm btn-outline"
          style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#ffffff' }}
        >
          <Globe size={15} /> Back to Live Hospital Site
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', borderLeft: '1px solid rgba(255, 255, 255, 0.15)', paddingLeft: '1rem' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'var(--accent-teal)', color: '#ffffff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>
            AD
          </div>
          <div style={{ fontSize: '0.82rem' }}>
            <div style={{ fontWeight: 700, color: '#ffffff' }}>Chief Administrator</div>
            <div style={{ color: 'var(--accent-teal-light)', fontSize: '0.72rem' }}>Starlight Triage</div>
          </div>
        </div>
      </div>
    </header>
  );
};
