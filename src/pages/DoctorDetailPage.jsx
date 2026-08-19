import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Clock, Calendar, ArrowLeft, Award, Stethoscope } from 'lucide-react';

export const DoctorDetailPage = () => {
  const { id } = useParams();
  const { doctors } = useApp();
  const navigate = useNavigate();

  const doctor = doctors.find((d) => d.id === parseInt(id) || d.name.toLowerCase().includes(id.toLowerCase())) || doctors[0];

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <button
          onClick={() => navigate('/doctors')}
          className="btn btn-outline btn-sm"
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} /> Back to Specialists Directory
        </button>

        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <img
              src={doctor.image}
              alt={doctor.name}
              style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--accent-teal)' }}
            />
            <div>
              <span className="pill-label">{doctor.department}</span>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-navy)' }}>{doctor.name}</h1>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)', marginTop: '4px' }}>{doctor.title}</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '6px' }}>{doctor.qualifications} ({doctor.experience} experience)</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.75rem' }}>
              Professional Biography
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {doctor.bio}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <Clock size={24} style={{ color: 'var(--accent-teal)' }} />
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Clinic Consultation Schedule</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{doctor.availability}</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <button onClick={() => navigate('/doctors')} className="btn btn-outline">Back to Roster</button>
            <Link to="/appointment" className="btn btn-primary btn-lg">
              <Calendar size={20} /> Book Appointment with {doctor.name.split(' ')[1] || 'Doctor'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
