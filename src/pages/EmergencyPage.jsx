import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  PhoneCall,
  ShieldAlert,
  Ambulance,
  MapPin,
  Clock,
  HeartPulse,
  CheckCircle,
  AlertTriangle,
  Send,
  CheckCircle2
} from 'lucide-react';

export const EmergencyPage = () => {
  const { hospitalInfo, showToast } = useApp();

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [dispatchData, setDispatchData] = useState({
    callerName: '',
    phone: '',
    location: '',
    emergencyType: 'Accident / Severe Trauma',
    notes: ''
  });

  const handleDispatchSubmit = (e) => {
    e.preventDefault();
    if (!dispatchData.callerName || !dispatchData.phone || !dispatchData.location) {
      alert("Please provide your name, phone number, and current location.");
      return;
    }
    setRequestSubmitted(true);
    showToast('Emergency Dispatch Request Sent!', 'Starlight Triage Ambulance team notified.', 'success');
  };

  const triageSteps = [
    { title: 'Immediate Call / Alert', desc: 'Call our 24/7 Hotline directly or submit the dispatch form below.' },
    { title: 'Ambulance & Trauma Response', desc: 'Our mobile resuscitation unit equipped with paramedic staff is dispatched.' },
    { title: 'Priority ER Resuscitation', desc: 'Patient bypasses standard queues for immediate consultant triage.' }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <section className="animate-glow" style={{
        background: 'linear-gradient(135deg, #0b1528 0%, #7f1d1d 60%, #991b1b 100%)',
        color: '#ffffff',
        padding: '4.5rem 0 5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(239, 68, 68, 0.25)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 800, color: '#fca5a5', marginBottom: '1.25rem' }}>
              <span className="animate-ring" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }}></span>
              24/7 Emergency Triage & Resuscitation Active
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
              Immediate Emergency <span style={{ color: '#fca5a5' }}>Medical Response</span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#fecaca', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
              Round-the-clock emergency trauma care, maternity delivery resuscitation, and rapid ambulance dispatch for Jajo, Ikorodu, and Lagos environs.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${hospitalInfo.emergencyPhone}`}
                className="btn btn-lg btn-shimmer"
                style={{ backgroundColor: '#ef4444', color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', boxShadow: '0 8px 24px rgba(239, 68, 68, 0.5)' }}
              >
                <PhoneCall size={22} /> Call Hotline: {hospitalInfo.emergencyPhone}
              </a>
              <a
                href="#dispatch-form"
                className="btn btn-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.3)' }}
              >
                <Ambulance size={20} /> Request Ambulance Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Triage Steps & Form */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem', alignItems: 'start' }}>
            {/* Left Column: Rapid Ambulance Dispatch Form */}
            <div id="dispatch-form" className="card glass-card-glow" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#dc2626' }}>
                <Ambulance size={28} />
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)' }}>Rapid Ambulance Dispatch Request</h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Notifies Starlight Emergency Desk instantly</div>
                </div>
              </div>

              {requestSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--status-confirmed-text)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                    Ambulance Dispatch Alert Sent!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Hold line open. Our triage operator is attempting to call <strong>{dispatchData.phone}</strong> immediately.
                  </p>
                  <button onClick={() => setRequestSubmitted(false)} className="btn btn-outline btn-sm">
                    Submit Another Dispatch Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDispatchSubmit}>
                  <div className="form-group">
                    <label>Caller / Patient Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Mr. Babatunde Ogunlesi"
                      value={dispatchData.callerName}
                      onChange={(e) => setDispatchData({ ...dispatchData, callerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number for Operator Callback *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 0803 123 4567"
                      value={dispatchData.phone}
                      onChange={(e) => setDispatchData({ ...dispatchData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Exact Location / Address in Lagos *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Near Jajo Junction, Sabo Ikorodu"
                      value={dispatchData.location}
                      onChange={(e) => setDispatchData({ ...dispatchData, location: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Nature of Emergency</label>
                    <select
                      className="form-control"
                      value={dispatchData.emergencyType}
                      onChange={(e) => setDispatchData({ ...dispatchData, emergencyType: e.target.value })}
                    >
                      <option value="Accident / Severe Trauma">Accident / Severe Trauma</option>
                      <option value="Maternity & Labor Emergency">Maternity & Labor Emergency</option>
                      <option value="Severe Fever / Pediatric Emergency">Severe Fever / Pediatric Emergency</option>
                      <option value="Cardiovascular / Breathing Difficulty">Cardiovascular / Breathing Difficulty</option>
                      <option value="Other Medical Emergency">Other Urgent Condition</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-danger btn-lg btn-shimmer" style={{ width: '100%', marginTop: '1rem' }}>
                    <Send size={18} /> Request Emergency Ambulance Dispatch Now
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: ER Capabilities & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="card card-lift" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldAlert size={20} style={{ color: '#dc2626' }} /> Emergency Unit Features
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                  <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>24/7 On-Call Consultants:</strong> Specialist surgeons, obstetricians, and anaesthetists.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Trauma Resuscitation Suite:</strong> Defibrillators, multiparameter monitors, and central oxygen.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Direct ER Ambulance Ramp:</strong> Zero-delay transfer from mobile ambulance to theatre.</span>
                  </li>
                </ul>
              </div>

              {/* Location Card */}
              <div className="card card-lift" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--primary-navy)', fontWeight: 700 }}>
                  <MapPin size={18} style={{ color: 'var(--accent-teal)' }} /> Emergency Unit Address
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {hospitalInfo.address}
                </p>
                <div style={{ height: '180px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                  <iframe
                    title="ER Location"
                    src={hospitalInfo.googleMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
