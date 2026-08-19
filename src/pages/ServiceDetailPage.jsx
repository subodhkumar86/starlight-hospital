import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Stethoscope, CheckCircle, Calendar, ArrowLeft } from 'lucide-react';

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const { services } = useApp();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id) || s.title.toLowerCase().includes(id.toLowerCase())) || services[0];

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <button
          onClick={() => navigate('/services')}
          className="btn btn-outline btn-sm"
          style={{ marginBottom: '2rem' }}
        >
          <ArrowLeft size={16} /> Back to All Departments
        </button>

        <div className="card" style={{ padding: '2.5rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, var(--accent-teal), var(--accent-cyan))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            marginBottom: '1.5rem'
          }}>
            <Stethoscope size={32} />
          </div>

          <span className="pill-label">{service.category}</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem' }}>
            {service.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
            {service.description}
          </p>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
              Specialty Highlights & Procedures:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="grid-2">
              {service.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.98rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.75rem' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Starlight Hospital Triage • Jajo Phase 2, Ikorodu
            </div>
            <Link to="/appointment" className="btn btn-primary btn-lg">
              <Calendar size={20} /> Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
