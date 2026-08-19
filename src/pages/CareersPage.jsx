import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, UserCheck, CheckCircle2, Send, X, ShieldCheck } from 'lucide-react';

export const CareersPage = () => {
  const { showToast } = useApp();
  const [selectedJob, setSelectedJob] = useState(null);
  const [appSubmitted, setAppSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'Consultant Obstetrician & Gynaecologist',
      department: 'Obstetrics & Gynaecology',
      type: 'Full-Time / On-Call',
      location: 'Jajo, Ikorodu',
      qualifications: 'MBBS, FWACS / FMCOG with 5+ years post-fellowship experience.',
      desc: 'Lead clinical care for high-risk antenatal patients, elective/emergency Caesarean sections, and gynaecological surgeries.'
    },
    {
      id: 2,
      title: 'Resident Medical Officer (General Practitioner)',
      department: 'General Medicine & ER Triage',
      type: 'Full-Time Shift Duty',
      location: 'Jajo, Ikorodu',
      qualifications: 'MBBS with current MDCN practicing license & BLS/ACLS certification.',
      desc: 'Manage outpatient consultation clinic, 24/7 ER initial triage resuscitation, and inpatient ward rounds.'
    },
    {
      id: 3,
      title: 'Registered Midwife Nurse (RN/RM)',
      department: 'Nursing & Maternity Wing',
      type: 'Shift Duty',
      location: 'Jajo, Ikorodu',
      qualifications: 'RN/RM license with NMCN registration & 3+ years labor suite experience.',
      desc: 'Monitor intrapartum labor progression, conduct normal midwife deliveries, and provide immediate newborn care.'
    },
    {
      id: 4,
      title: 'Medical Laboratory Scientist (MLS)',
      department: 'Diagnostic Laboratory',
      type: 'Full-Time',
      location: 'Jajo, Ikorodu',
      qualifications: 'B.MLS with MLSCN practicing license.',
      desc: 'Perform automated hematology, blood chemistry, 3D diagnostic screenings, and emergency blood cross-matching.'
    }
  ];

  const [applicantData, setApplicantData] = useState({
    fullName: '',
    email: '',
    phone: '',
    folioNumber: '',
    coverNote: ''
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setAppSubmitted(true);
    showToast('Application Submitted', `Application received for ${selectedJob.title}`, 'success');
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
            <Briefcase size={14} /> Join Our Medical Team
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, color: '#ffffff', margin: '0.75rem 0' }}>
            Careers at <span style={{ color: 'var(--accent-teal-light)' }}>Starlight Hospital</span>
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto' }}>
            Build your medical career with a compassionate, technology-driven healthcare facility serving families across Lagos.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="grid-2" style={{ gap: '2rem' }}>
            {jobOpenings.map((job) => (
              <div key={job.id} className="card card-lift" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="pill-label" style={{ marginBottom: 0 }}>{job.department}</span>
                    <span className="badge badge-tag" style={{ fontSize: '0.75rem' }}>{job.type}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                    {job.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.85rem' }}>
                    Requirements: {job.qualifications}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {job.desc}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setAppSubmitted(false);
                  }}
                  className="btn btn-primary btn-shimmer"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Apply for Position
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9500,
          backgroundColor: 'rgba(11, 21, 40, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.85rem'
        }}>
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '600px', padding: '1.75rem', maxHeight: '92vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setSelectedJob(null)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={20} />
            </button>

            <span className="badge badge-tag" style={{ marginBottom: '0.5rem' }}>{selectedJob.department}</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
              Apply for {selectedJob.title}
            </h3>

            {appSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={46} style={{ color: 'var(--status-confirmed-text)', marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>Application Submitted!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{applicantData.fullName}</strong>. Our medical administration team will review your qualifications.
                </p>
                <button onClick={() => setSelectedJob(null)} className="btn btn-outline">Close Window</button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit}>
                <div className="form-group">
                  <label>Applicant Full Name *</label>
                  <input type="text" className="form-control" placeholder="e.g. Dr. Chinedu Eze" value={applicantData.fullName} onChange={(e) => setApplicantData({ ...applicantData, fullName: e.target.value })} required />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" className="form-control" placeholder="e.g. doctor@example.com" value={applicantData.email} onChange={(e) => setApplicantData({ ...applicantData, email: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" className="form-control" placeholder="e.g. 0803 123 4567" value={applicantData.phone} onChange={(e) => setApplicantData({ ...applicantData, phone: e.target.value })} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>MDCN / NMCN License Registration Folio No.</label>
                  <input type="text" className="form-control" placeholder="e.g. MDCN/R/12345" value={applicantData.folioNumber} onChange={(e) => setApplicantData({ ...applicantData, folioNumber: e.target.value })} />
                </div>

                <div className="form-group">
                  <label>Brief Cover Summary / Clinical Background</label>
                  <textarea className="form-control" rows={3} placeholder="Summary of clinical experience..." value={applicantData.coverNote} onChange={(e) => setApplicantData({ ...applicantData, coverNote: e.target.value })}></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-shimmer" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={18} /> Submit Medical Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
