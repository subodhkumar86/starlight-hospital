import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, Quote, MessageSquarePlus, Send, CheckCircle2, Heart } from 'lucide-react';

export const PatientTestimonialsPage = () => {
  const { showToast } = useApp();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Mrs. Adebayo Blessing',
      type: 'Maternity & ANC Care',
      rating: 5,
      comment: 'The obstetrics team at Starlight Hospital ensured a safe delivery for my twins. The private delivery suite and attentive midwife nurses gave me complete peace of mind!',
      date: '12 August 2026'
    },
    {
      id: 2,
      name: 'Chief Kenneth Okafor',
      type: 'Day Surgery & Diagnostics',
      rating: 5,
      comment: 'Prompt pre-operative evaluation and sterile surgery. I was discharged same day with clear medication guidelines. Highly professional consultants.',
      date: '04 July 2026'
    },
    {
      id: 3,
      name: 'Dr. (Mrs) Folashade Alabi',
      type: 'Paediatric Care',
      rating: 5,
      comment: 'The Special Care Baby Unit and paediatricians managed my newborn jaundice with excellent phototherapy equipment. I am eternally grateful.',
      date: '28 June 2026'
    },
    {
      id: 4,
      name: 'Engr. Tunde Lawal',
      type: '24/7 Emergency Care',
      rating: 5,
      comment: 'Brought my elderly mother during a late-night respiratory emergency. The ER triage team admitted her immediately with zero queue delays. Top-notch hospital in Ikorodu.',
      date: '15 May 2026'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    type: 'General Consultation',
    rating: 5,
    comment: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created = {
      id: Date.now(),
      ...newReview,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    setReviews([created, ...reviews]);
    setSubmitted(true);
    showToast('Thank You!', 'Your patient feedback has been published.', 'success');
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', paddingBottom: '5rem' }}>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-navy) 0%, #1e293b 60%, var(--accent-teal) 100%)',
        color: '#ffffff',
        padding: '4.5rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="pill-label" style={{ backgroundColor: 'rgba(13, 148, 136, 0.2)', color: 'var(--accent-teal-light)' }}>
            <Heart size={14} /> Patient Recovery Stories
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', margin: '0.75rem 0' }}>
            Patient Stories & <span style={{ color: 'var(--accent-teal-light)' }}>Testimonials</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Read real recovery experiences from families treated at Starlight Hospital in Jajo, Ikorodu.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            {/* Left Column: Reviews List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {reviews.map((rev) => (
                <div key={rev.id} className="card card-lift" style={{ padding: '1.75rem', position: 'relative' }}>
                  <Quote size={32} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', opacity: 0.1, color: 'var(--accent-teal)' }} />
                  <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b', marginBottom: '0.65rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" />
                    ))}
                  </div>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "{rev.comment}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--primary-navy)' }}>{rev.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>{rev.type}</div>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rev.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Submit Feedback Form */}
            <div className="card glass-card-glow" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem', color: 'var(--accent-teal)' }}>
                <MessageSquarePlus size={24} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)' }}>Share Your Healing Story</h3>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={42} style={{ color: 'var(--status-confirmed-text)', marginBottom: '0.85rem' }} />
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Thank You for Your Feedback!</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>Your story has been added to our patient testimonials.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline btn-sm">Submit Another Review</button>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview}>
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Mrs. Funke Adesanya"
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Medical Care Received</label>
                    <select
                      className="form-control"
                      value={newReview.type}
                      onChange={(e) => setNewReview({ ...newReview, type: e.target.value })}
                    >
                      <option value="General Consultation">General Medical Consultation</option>
                      <option value="Maternity & ANC Care">Maternity & ANC Care</option>
                      <option value="Paediatric Care">Paediatric Care</option>
                      <option value="Surgery & Operating Theatre">Surgery & Operating Theatre</option>
                      <option value="24/7 Emergency Care">24/7 Emergency Care</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Rating (1 to 5 Stars)</label>
                    <select
                      className="form-control"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 - Outstanding Care)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                      <option value={3}>⭐⭐⭐ (3 - Satisfactory)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Experience / Words of Encouragement *</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Share how our doctors and nurses helped your recovery..."
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-shimmer" style={{ width: '100%' }}>
                    <Send size={18} /> Submit Patient Testimonial
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
