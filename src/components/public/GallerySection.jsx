import React, { useState } from 'react';
import { Eye, X, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Sterile Operating Theatre",
      category: "Surgical Wing",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
      desc: "Fully equipped sterile surgical suite for emergency trauma, general operations, and laparoscopy.",
      details: [
        "HEPA air filtration & strict sterility controls",
        "Multi-parameter vital signs monitoring equipment",
        "Dedicated post-anaesthesia recovery bay",
        "24/7 resident anaesthetist & surgical nurses"
      ]
    },
    {
      id: 2,
      title: "Maternal & Delivery Suite",
      category: "Obstetrics",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
      desc: "Private, comfortable labor & delivery rooms staffed by experienced midwife nurses and consultant obstetricians.",
      details: [
        "Private air-conditioned delivery suites",
        "Continuous fetal heart rate monitoring",
        "Immediate neonatal resuscitation equipment",
        "24/7 obstetric emergency coverage"
      ]
    },
    {
      id: 3,
      title: "3D Ultrasound & Diagnostic Lab",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
      desc: "Digital 3D/4D ultrasound scanners, 12-lead ECG, and automated blood chemistry lab analyzers.",
      details: [
        "In-house automated hematology & biochemistry",
        "Obstetric & pelvic 3D/4D ultrasound scanning",
        "Rapid diagnostic testing for malaria & hepatitis",
        "24-hour turnaround for critical lab results"
      ]
    },
    {
      id: 4,
      title: "Special Care Baby Unit (SCBU)",
      category: "Paediatrics",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
      desc: "Specialized incubators, neonatal phototherapy units, and oxygen therapy for newborns.",
      details: [
        "Temperature-controlled infant incubators",
        "Bilirubin phototherapy for neonatal jaundice",
        "Pediatric pulse oximetry monitoring",
        "Consultant paediatrician oversight"
      ]
    },
    {
      id: 5,
      title: "Executive Private Patient Wards",
      category: "Inpatient Ward",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      desc: "Air-conditioned private rooms equipped with en-suite bathrooms, cable TV, and patient call bells.",
      details: [
        "En-suite private bathroom & shower",
        "Adjustable electric patient beds",
        "Direct nurse call intercom system",
        "Comfortable family visitor seating"
      ]
    },
    {
      id: 6,
      title: "24/7 Emergency Triage Unit",
      category: "Emergency Care",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
      desc: "Round-the-clock emergency reception for immediate patient assessment and resuscitation.",
      details: [
        "Direct ambulance access ramp",
        "Emergency crash cart & defibrillator",
        "Immediate triage classification",
        "On-call surgical & medical consultants"
      ]
    }
  ];

  const [activeItem, setActiveItem] = useState(null);

  const scrollToAppointment = () => {
    setActiveItem(null);
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Hospital Infrastructure</span>
          <h2 className="section-title">Facility & Clinical Tour</h2>
          <p className="section-subtitle">
            Click on any unit card below to view detailed clinical equipment specs and facilities at Starlight Hospital.
          </p>
        </div>

        <div className="grid-3">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setActiveItem(item)}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              title={`Click to view ${item.title} details`}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 21, 40, 0.85), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.25rem'
                }}>
                  <div style={{ color: '#ffffff' }}>
                    <span className="badge badge-tag" style={{ backgroundColor: 'var(--accent-teal)', color: '#ffffff', border: 'none', fontSize: '0.7rem', marginBottom: '4px' }}>
                      {item.category}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</h3>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', backgroundColor: 'var(--bg-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{item.desc}</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(13, 148, 136, 0.12)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '0.5rem' }}>
                  <Eye size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLICKABLE LIGHTBOX MODAL */}
      {activeItem && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9900,
          backgroundColor: 'rgba(11, 21, 40, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.85rem'
        }}>
          <div className="animate-fade-in gallery-modal-content" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '720px', maxHeight: '92vh', overflowY: 'auto', border: '1px solid var(--border-light)', position: 'relative' }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: 'rgba(0, 0, 0, 0.6)', color: '#ffffff', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <div className="gallery-modal-img-wrapper" style={{ width: '100%', height: '280px', position: 'relative' }}>
              <img src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11, 21, 40, 0.9), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', color: '#ffffff' }}>
                <span className="badge badge-tag" style={{ backgroundColor: 'var(--accent-teal)', color: '#ffffff', border: 'none', marginBottom: '0.4rem' }}>
                  {activeItem.category}
                </span>
                <h2 className="gallery-modal-title" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff' }}>{activeItem.title}</h2>
              </div>
            </div>

            <div className="gallery-modal-body" style={{ padding: '1.75rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {activeItem.desc}
              </p>

              <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--primary-navy)' }}>
                  Unit Capabilities & Equipment Specs:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {activeItem.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.55rem', alignItems: 'center', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gallery-modal-btns" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveItem(null)} className="btn btn-outline">Close Preview</button>
                <button onClick={scrollToAppointment} className="btn btn-primary">
                  <Calendar size={16} /> Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 576px) {
          .gallery-modal-img-wrapper { height: 200px !important; }
          .gallery-modal-title { font-size: 1.35rem !important; }
          .gallery-modal-body { padding: 1.15rem !important; }
          .gallery-modal-btns { flex-direction: column !important; }
          .gallery-modal-btns button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};

