import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  MessageSquare,
  Newspaper,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  TrendingUp,
  UserCheck,
  Activity,
  BarChart3,
  PieChart,
  HardDrive
} from 'lucide-react';

export const CmsDashboard = () => {
  const { setCmsTab, news, appointments, enquiries, doctors } = useApp();

  const totalApts = appointments.length;
  const pendingApts = appointments.filter((a) => a.status === 'Pending').length;
  const confirmedApts = appointments.filter((a) => a.status === 'Confirmed').length;

  const totalEnquiries = enquiries.length;
  const unreadEnquiries = enquiries.filter((e) => e.status === 'Unread').length;

  const totalNews = news.length;
  const publishedNews = news.filter((n) => n.status === 'Published').length;

  const departmentMetrics = [
    { name: 'Obstetrics & Gynaecology', percent: 38, color: 'var(--accent-teal)' },
    { name: 'General Medicine', percent: 32, color: 'var(--accent-cyan)' },
    { name: 'Paediatrics & Child Health', percent: 18, color: '#8b5cf6' },
    { name: 'Surgical Services', percent: 12, color: '#f59e0b' }
  ];

  return (
    <div className="cms-page-container">
      <div style={{ marginBottom: '2rem' }}>

        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
          Hospital CMS Dashboard & Analytics
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Real-time metrics for patient appointments, enquiries, clinical capacity, and published health articles.
        </p>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
        {/* Card 1: Appointments */}
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-teal)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>PATIENT APPOINTMENTS</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.1)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Calendar size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1 }}>
            {totalApts}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'flex', gap: '0.75rem' }}>
            <span style={{ color: 'var(--status-pending-text)', fontWeight: 600 }}>{pendingApts} Pending</span>
            <span>•</span>
            <span style={{ color: 'var(--status-confirmed-text)', fontWeight: 600 }}>{confirmedApts} Confirmed</span>
          </div>
        </div>

        {/* Card 2: Enquiries */}
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>GENERAL ENQUIRIES</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(2, 132, 199, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1 }}>
            {totalEnquiries}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'flex', gap: '0.75rem' }}>
            <span style={{ color: '#b91c1c', fontWeight: 600 }}>{unreadEnquiries} Unread</span>
            <span>•</span>
            <span>{totalEnquiries - unreadEnquiries} Handled</span>
          </div>
        </div>

        {/* Card 3: News Articles */}
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #8b5cf6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>NEWS ARTICLES</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Newspaper size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-navy)', lineHeight: 1 }}>
            {totalNews}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            <span style={{ color: '#047857', fontWeight: 600 }}>{publishedNews} Published Live</span>
          </div>
        </div>

        {/* Card 4: Active Doctors Roster */}
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>CLINICAL ROSTER</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCheck size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#047857', lineHeight: 1 }}>
            {doctors.length}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Active Specialists On Duty
          </div>
        </div>
      </div>

      {/* Analytics & Department Breakdown Row */}
      <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PieChart size={18} style={{ color: 'var(--accent-teal)' }} /> Departmental Consultation Volume
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {departmentMetrics.map((dept, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', fontWeight: 600, marginBottom: '4px' }}>
                  <span>{dept.name}</span>
                  <span style={{ color: dept.color, fontWeight: 800 }}>{dept.percent}%</span>
                </div>
                <div style={{ height: '8px', width: '100%', backgroundColor: 'var(--bg-light)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${dept.percent}%`, backgroundColor: dept.color, borderRadius: '4px', transition: 'width 0.6s ease' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Capacity & Triage Speed */}
        <div className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary-navy)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={18} style={{ color: 'var(--accent-cyan)' }} /> Hospital Triage & Facility Capacity
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>AVG. TRIAGE SPEED</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-teal)', margin: '4px 0' }}>14 Mins</div>
              <div style={{ fontSize: '0.75rem', color: '#047857', fontWeight: 600 }}>Fast Response Triage</div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>INPATIENT WARD OCCUPANCY</div>
              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '4px 0' }}>76%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Wards Available 24/7</div>
            </div>
          </div>

          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, backgroundColor: 'rgba(13, 148, 136, 0.08)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(13, 148, 136, 0.2)' }}>
            💡 All patient requests submitted through the public website are synchronized instantly in this portal.
          </div>
        </div>
      </div>

      {/* Quick Action Buttons Bar */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', marginBottom: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)' }}>Quick Administration Actions</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Jump straight to post creation or triage reviews</p>
        </div>
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
          <button onClick={() => setCmsTab('news')} className="btn btn-primary btn-sm">
            <Plus size={16} /> Manage / Add News Article
          </button>
          <button onClick={() => setCmsTab('appointments')} className="btn btn-secondary btn-sm">
            <Calendar size={16} /> Review Appointments ({pendingApts})
          </button>
          <button onClick={() => setCmsTab('doctors')} className="btn btn-outline btn-sm">
            <UserCheck size={16} /> Doctor Roster ({doctors.length})
          </button>
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className="grid-2" style={{ gap: '2rem' }}>
        {/* Recent Appointments */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Recent Patient Appointments</h3>
            <button onClick={() => setCmsTab('appointments')} style={{ background: 'none', border: 'none', color: 'var(--accent-teal)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {appointments.slice(0, 4).map((apt) => (
              <div key={apt.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--primary-navy)' }}>{apt.patientName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{apt.department} • {apt.preferredDate}</div>
                </div>
                <span className={`badge badge-${apt.status.toLowerCase()}`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Recent General Enquiries</h3>
            <button onClick={() => setCmsTab('enquiries')} style={{ background: 'none', border: 'none', color: 'var(--accent-teal)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {enquiries.slice(0, 4).map((enq) => (
              <div key={enq.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-light)' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--primary-navy)' }}>{enq.senderName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '240px' }}>{enq.subject || enq.message}</div>
                </div>
                <span className={`badge badge-${enq.status.toLowerCase()}`}>
                  {enq.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .cms-quick-actions-bar { flex-direction: column !important; align-items: stretch !important; }
          .cms-quick-actions-bar button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  );
};

