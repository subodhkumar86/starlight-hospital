import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Stethoscope,
  HeartPulse,
  Baby,
  Activity,
  Microscope,
  BrainCircuit,
  ArrowRight,
  Calendar
} from 'lucide-react';

export const ServicesSection = () => {
  const { services } = useApp();
  const navigate = useNavigate();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope size={26} />;
      case 'HeartPulse': return <HeartPulse size={26} />;
      case 'Baby': return <Baby size={26} />;
      case 'Activity': return <Activity size={26} />;
      case 'Microscope': return <Microscope size={26} />;
      case 'BrainCircuit': return <BrainCircuit size={26} />;
      default: return <Stethoscope size={26} />;
    }
  };

  const bookService = (service) => navigate('/appointment', { state: { service: service.title } });

  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Medical Specialties</span>
          <h2 className="section-title">Comprehensive Healthcare Services</h2>
          <p className="section-subtitle">
            From routine checkups to specialized surgery and emergency resuscitation, our hospital offers complete care.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service) => (
            <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ height: '190px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 21, 40, 0.8), transparent)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#ffffff'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="badge badge-tag" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: 'none', fontSize: '0.7rem' }}>
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--primary-navy)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {service.summary}
                </p>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link
                    to={`/services/${service.id}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-teal)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    View Details <ArrowRight size={14} />
                  </Link>

                  <button
                    onClick={() => bookService(service)}
                    className="btn btn-sm btn-outline"
                    title={`Book consultation for ${service.title}`}
                  >
                    <Calendar size={14} /> Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
