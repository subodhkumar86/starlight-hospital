import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  UserCheck,
  Search,
  FileText,
  Calendar,
  Download,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Printer,
  Sparkles
} from 'lucide-react';

export const PatientPortalPage = () => {
  const { appointments, printAppointmentVoucher, showToast } = useApp();

  const [searchRef, setSearchRef] = useState('');
  const [searchedApt, setSearchedApt] = useState(null);
  const [searchedPerformed, setSearchedPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchRef.trim()) return;

    const found = appointments.find(
      (a) => a.id.toLowerCase() === searchRef.trim().toLowerCase() ||
             a.patientPhone.includes(searchRef.trim()) ||
             a.patientName.toLowerCase().includes(searchRef.trim().toLowerCase())
    );

    setSearchedApt(found || null);
    setSearchedPerformed(true);
    if (found) {
      showToast('Patient File Found', `Loaded record for ${found.patientName}`, 'success');
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-navy) 0%, #0f766e 100%)',
        color: '#ffffff',
        padding: '4.5rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="pill-label" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--accent-teal-light)' }}>
            <UserCheck size={14} /> Self-Service Patient Hub
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', margin: '0.75rem 0' }}>
            Starlight Patient <span style={{ color: 'var(--accent-teal-light)' }}>Portal</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Check your consultation booking status, view assigned doctor details, and generate printable appointment reference slips.
          </p>
        </div>
      </section>

      {/* Lookup Card */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="card glass-card-glow" style={{ padding: '2.25rem', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={22} style={{ color: 'var(--accent-teal)' }} /> Appointment Record Lookup
            </h3>

            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flexGrow: 1, minWidth: '260px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Appointment Ref ID (e.g. APT-1001) or Phone Number..."
                  value={searchRef}
                  onChange={(e) => setSearchRef(e.target.value)}
                  style={{ paddingLeft: '2.5rem' }}
                  required
                />
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-light)' }} />
              </div>
              <button type="submit" className="btn btn-primary btn-shimmer" style={{ padding: '0.75rem 1.75rem' }}>
                Search Record
              </button>
            </form>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}>
              💡 Tip: Enter the Ref ID provided when booking online or your registered mobile phone number.
            </div>
          </div>

          {/* Search Result Card */}
          {searchedPerformed && (
            <div className="animate-fade-in">
              {searchedApt ? (
                <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--accent-teal)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className={`badge badge-${searchedApt.status.toLowerCase()}`} style={{ fontSize: '0.85rem' }}>
                      Status: {searchedApt.status}
                    </span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      Ref ID: <strong>{searchedApt.id}</strong>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
                    Patient Consultation File
                  </h3>

                  <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem', border: '1px solid var(--border-light)' }}>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>PATIENT NAME</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary-navy)' }}>{searchedApt.patientName}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>DEPARTMENT & ASSIGNED DOCTOR</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-teal)' }}>{searchedApt.department}</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)' }}>{searchedApt.doctor}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>SCHEDULED DATE & TIME</div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{searchedApt.preferredDate} at {searchedApt.preferredTime}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <button onClick={() => printAppointmentVoucher(searchedApt)} className="btn btn-secondary btn-shimmer">
                      <Printer size={18} /> Print Official Consultation Slip
                    </button>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--accent-teal)' }} /> Verified Starlight CMS Record
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                  <FileText size={36} style={{ color: 'var(--text-light)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                    No Record Found
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                    No active appointment found for "<strong>{searchRef}</strong>". Please check your Reference ID or contact our reception desk.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
