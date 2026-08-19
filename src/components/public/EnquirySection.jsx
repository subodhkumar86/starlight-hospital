import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const EnquirySection = () => {
  const { hospitalInfo, addEnquiry } = useApp();

  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.senderName || !formData.message) {
      alert("Please fill in your name and message text.");
      return;
    }

    addEnquiry(formData);
    setSubmitted(true);
    setFormData({
      senderName: '',
      senderEmail: '',
      senderPhone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Contact & Enquiries</span>
          <h2 className="section-title">Get In Touch With Starlight Hospital</h2>
          <p className="section-subtitle">
            Have questions about HMO coverage, antenatal packages, surgical costs, or hospital visits? Drop us a message below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Left Column Contact Cards */}
          <div>
            <div style={{ backgroundColor: 'var(--primary-navy)', color: '#ffffff', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                Starlight Hospital Triage
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Our administration and medical counselling team will review your message immediately upon submission in the Hospital CMS.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(13, 148, 136, 0.25)', color: 'var(--accent-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-teal-light)', textTransform: 'uppercase' }}>HOSPITAL LOCATION</div>
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', marginTop: '2px', lineHeight: 1.5 }}>
                      {hospitalInfo.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(2, 132, 199, 0.25)', color: 'var(--accent-cyan-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase' }}>DIRECT HOTLINES</div>
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', marginTop: '2px' }}>
                      {hospitalInfo.phoneNumbers.join(' / ')}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(13, 148, 136, 0.25)', color: 'var(--accent-teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-teal-light)', textTransform: 'uppercase' }}>EMAIL INQUIRIES</div>
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', marginTop: '2px' }}>
                      {hospitalInfo.email}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(2, 132, 199, 0.25)', color: 'var(--accent-cyan-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan-light)', textTransform: 'uppercase' }}>WORKING HOURS</div>
                    <div style={{ fontSize: '0.95rem', color: '#ffffff', marginTop: '2px', lineHeight: 1.5 }}>
                      {hospitalInfo.operatingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Enquiry Form */}
          <div className="card" style={{ padding: '2.25rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--status-confirmed-bg)',
                  color: 'var(--status-confirmed-text)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
                  Message Sent to CMS Admin!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0.75rem 0 1.5rem 0' }}>
                  Your enquiry has been successfully logged in our Hospital CMS portal. Our desk team will reply via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
                  Send An Enquiry Message
                </h3>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Chief Tunde Bakare"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 08023456789"
                      value={formData.senderPhone}
                      onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g. tunde@company.ng"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject / Topic</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. HMO Coverage inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message / Enquiry Details *</label>
                  <textarea
                    className="form-control"
                    placeholder="Write your questions or notes here..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  <Send size={18} /> Submit Enquiry to Hospital CMS
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
