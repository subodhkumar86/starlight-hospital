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
    { id: 'dashboard', label: 'Dashboard Overview', short: 'Dashboard', icon: <LayoutDashboard size={17} /> },
    { id: 'news', label: 'News & Health Blog', short: 'Articles', icon: <Newspaper size={17} />, badge: news.length },
    { id: 'appointments', label: 'Patient Appointments', short: 'Appointments', icon: <Calendar size={17} />, alertCount: pendingApts },
    { id: 'enquiries', label: 'Enquiries & Messages', short: 'Messages', icon: <MessageSquare size={17} />, alertCount: unreadEnq },
    { id: 'doctors', label: 'Doctor Roster CMS', short: 'Doctors', icon: <UserCheck size={17} />, badge: doctors.length },
    { id: 'settings', label: 'CMS System Settings', short: 'Settings', icon: <Settings size={17} /> }
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR (Visible > 820px) */}
      <aside className="cms-desktop-sidebar">
        <div className="cms-nav-group">
          <div className="cms-nav-header" style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '0.1em', padding: '0 0.75rem', marginBottom: '0.5rem' }}>
            CMS MODULES
          </div>
          {navItems.map((item) => {
            const isActive = cmsTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCmsTab(item.id)}
                className={`cms-nav-item ${isActive ? 'active' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
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

      {/* MOBILE TOP TAB BAR (Visible <= 820px) */}
      <nav className="cms-mobile-tab-bar">
        <div className="cms-mobile-tabs-scroll">
          {navItems.map((item) => {
            const isActive = cmsTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCmsTab(item.id)}
                className={`cms-mobile-tab-pill ${isActive ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.short}</span>
                {item.alertCount ? (
                  <span className="badge badge-unread" style={{ fontSize: '0.65rem', padding: '0.1rem 0.35rem', borderRadius: 'var(--radius-full)' }}>
                    {item.alertCount}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};


