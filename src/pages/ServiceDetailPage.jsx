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

        <div className="card service-detail-card" style={{ padding: '2.5rem' }}>
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

          <span className="pill-label">{service.category}</span>
          <h1 className="service-detail-title" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem', lineHeight: 1.2 }}>
            {service.title}
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {service.description}
          </p>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '1rem' }}>
              Specialty Highlights & Procedures:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }} className="grid-2 service-features-grid">
              {service.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.92rem' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-action-btns" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Starlight Hospital Triage • Jajo Phase 2, Ikorodu
            </div>
            <Link to="/appointment" className="btn btn-primary btn-lg" style={{ width: '100%', maxWidth: '320px', justifyContent: 'center' }}>
              <Calendar size={18} /> Schedule Consultation
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .service-detail-card { padding: 1.25rem !important; }
          .service-detail-title { font-size: 1.5rem !important; }
          .service-features-grid { grid-template-columns: 1fr !important; }
          .service-action-btns { flex-direction: column !important; align-items: stretch !important; text-align: center !important; }
          .service-action-btns a { max-width: 100% !important; width: 100% !important; }
        }
      `}</style>
    </div>
  );
};


