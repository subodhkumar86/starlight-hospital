import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  MessageSquare,
  UserCheck,
  Settings,
  Sparkles
} from 'lucide-react';

export const CmsSidebar = () => {
  const { cmsTab, setCmsTab, news, appointments, enquiries, doctors } = useApp();

  const pendingApts = appointments.filter((a) => a.status === 'Pending').length;
  const unreadEnq = enquiries.filter((e) => e.status === 'Unread').length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: <LayoutDashboard size={18} /> },
    { id: 'news', label: 'News & Health Blog', icon: <Newspaper size={18} />, badge: news.length },
    { id: 'appointments', label: 'Patient Appointments', icon: <Calendar size={18} />, alertCount: pendingApts },
    { id: 'enquiries', label: 'Enquiries & Messages', icon: <MessageSquare size={18} />, alertCount: unreadEnq },
    { id: 'doctors', label: 'Doctor Roster CMS', icon: <UserCheck size={18} />, badge: doctors.length },
    { id: 'settings', label: 'CMS System Settings', icon: <Settings size={18} /> }
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--bg-card)',
      borderRight: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.5rem 1rem',
      flexShrink: 0
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '0.1em', padding: '0 0.75rem', marginBottom: '0.75rem' }}>
          CMS MODULES
        </div>

        {navItems.map((item) => {
          const isActive = cmsTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCmsTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                backgroundColor: isActive ? 'rgba(13, 148, 136, 0.15)' : 'transparent',
                color: isActive ? 'var(--accent-teal)' : 'var(--text-main)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {item.icon}
                <span>{item.label}</span>
              </div>

              {item.alertCount ? (
                <span className="badge badge-unread" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>
                  {item.alertCount}
                </span>
              ) : item.badge !== undefined ? (
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-light)', padding: '0.1rem 0.45rem', borderRadius: 'var(--radius-full)' }}>
                  {item.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Quick Storage Status Footer */}
      <div style={{
        backgroundColor: 'var(--bg-light)',
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-light)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-teal)', marginBottom: '4px' }}>
          <Sparkles size={14} /> LocalStorage Sync Active
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          All article edits, doctors & appointments save automatically in real time.
        </div>
      </div>
    </aside>
  );
};
