import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mrs. Toyin Babalola",
      location: "Crystal Estate, Ikorodu",
      text: "I delivered my twin baby girls at Starlight Hospital. Dr. Blessing Okonjo and the maternity nurses were exceptionally attentive throughout my antenatal and delivery. DEO MEDICE indeed!",
      rating: 5,
      date: "August 2026"
    },
    {
      id: 2,
      name: "Engr. Kayode Ogundele",
      location: "Jajo Phase 2, Lagos",
      text: "When my father had a severe hypertensive crisis at midnight, Starlight Hospital's emergency triage received us immediately. Quick laboratory testing and doctor intervention saved his life.",
      rating: 5,
      date: "July 2026"
    },
    {
      id: 3,
      name: "Chioma Nwachukwu",
      location: "Imowo-Nla, Ikorodu",
      text: "Clean atmosphere, friendly reception, and very reasonable pricing. Dr. Chidi in Paediatrics took great care of my 3-year-old son when he was down with severe malaria.",
      rating: 5,
      date: "August 2026"
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Patient Feedback</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real experiences from families across Ikorodu who trust Starlight Hospital for their medical care.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((item) => (
            <div key={item.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" />
                  ))}
                </div>
                <Quote size={28} style={{ color: 'var(--accent-teal)', opacity: 0.3 }} />
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem', flexGrow: 1 }}>
                "{item.text}"
              </p>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(13, 148, 136, 0.15)',
                  color: 'var(--accent-teal)',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem'
                }}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-navy)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <CheckCircle size={12} style={{ color: 'var(--accent-teal)' }} /> {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
