import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Calendar,
  Clock,
  User,
  Tag,
  CheckCircle,
  Lock,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  BookOpen
} from 'lucide-react';

export const Modal = () => {
  const { activeModal, closeModal, loginAdmin } = useApp();
  const [adminPassword, setAdminPassword] = useState('');

  if (!activeModal || !activeModal.type) return null;

  const { type, payload } = activeModal;

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (loginAdmin(adminPassword)) {
      closeModal();
      setAdminPassword('');
    }
  };

  const scrollToAppointment = () => {
    closeModal();
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9000,
      backgroundColor: 'rgba(11, 21, 40, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.85rem',
      overflowY: 'auto'
    }}>
      <div
        className="animate-fade-in responsive-modal-box"
        style={{
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-main)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          width: '100%',
          maxWidth: type === 'newsReader' ? '760px' : type === 'adminLogin' ? '440px' : '650px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          border: '1px solid var(--border-light)'
        }}
      >

        {/* Modal Header Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-light)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            transition: 'all 0.2s'
          }}
        >
          <X size={20} />
        </button>

        {/* --- SERVICE MODAL --- */}
        {type === 'service' && payload && (
          <div style={{ padding: '2.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              marginBottom: '1.25rem'
            }}>
              <Stethoscope size={28} />
            </div>
            <span className="pill-label">{payload.category}</span>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
              {payload.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {payload.description}
            </p>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary-navy)' }}>
                Key Specialty Highlights & Procedures:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {payload.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.92rem' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={closeModal} className="btn btn-outline">Close</button>
              <button onClick={scrollToAppointment} className="btn btn-primary">
                <Calendar size={18} /> Book Appointment for {payload.title}
              </button>
            </div>
          </div>
        )}

        {/* --- DOCTOR MODAL --- */}
        {type === 'doctor' && payload && (
          <div style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
              <img
                src={payload.image}
                alt={payload.name}
                style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent-teal)' }}
              />
              <div>
                <span className="pill-label">{payload.department}</span>
                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary-navy)' }}>{payload.name}</h2>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginTop: '2px' }}>{payload.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>{payload.qualifications} ({payload.experience})</div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary-navy)' }}>Professional Profile</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{payload.bio}</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
              <Clock size={20} style={{ color: 'var(--accent-teal)' }} />
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>CLINIC CONSULTATION SCHEDULE</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-navy)' }}>{payload.availability}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={closeModal} className="btn btn-outline">Close</button>
              <button onClick={scrollToAppointment} className="btn btn-primary">
                <Calendar size={18} /> Book Consultation with {payload.name.split(' ')[1] || 'Doctor'}
              </button>
            </div>
          </div>
        )}

        {/* --- NEWS READER MODAL --- */}
        {type === 'newsReader' && payload && (
          <div>
            <div style={{ width: '100%', height: '280px', position: 'relative' }}>
              <img
                src={payload.coverImage}
                alt={payload.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(11, 21, 40, 0.95), transparent)'
              }}></div>
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem', color: '#ffffff' }}>
                <span className="badge badge-tag" style={{ backgroundColor: 'var(--accent-teal)', color: '#ffffff', border: 'none', marginBottom: '0.5rem' }}>
                  {payload.category}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
                  {payload.title}
                </h2>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><User size={14} /> {payload.author}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {payload.date}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> {payload.readTime}</span>
              </div>

              <div style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.8, whitespace: 'pre-line' }}>
                {payload.content}
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Published by Starlight Hospital Communications</div>
                <button onClick={closeModal} className="btn btn-outline">Done Reading</button>
              </div>
            </div>
          </div>
        )}

        {/* --- ADMIN LOGIN MODAL --- */}
        {type === 'adminLogin' && (
          <div style={{ padding: '2.25rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(13, 148, 136, 0.1)',
                color: 'var(--accent-teal)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <ShieldCheck size={30} />
              </div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-navy)' }}>Starlight CMS Admin</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                Management portal for news, appointments, and enquiries
              </p>
            </div>

            <form onSubmit={handleAdminLogin}>
              <div className="form-group">
                <label>Admin Access Key</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    className="form-control"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                  />
                  <Lock size={18} style={{ position: 'absolute', right: '12px', top: '12px', color: 'var(--text-light)' }} />
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', marginTop: '4px' }}>
                  Demo access passcode: <strong>admin123</strong>
                </span>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem', padding: '0.85rem' }}
              >
                Enter CMS Dashboard <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
