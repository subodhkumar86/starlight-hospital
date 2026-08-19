import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

export const AppointmentSection = () => {
  const { services, doctors, addAppointment, printAppointmentVoucher } = useApp();

  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    department: 'General Medical Consultation',
    doctor: 'Any Available Specialist',
    preferredDate: '',
    preferredTime: '10:00 AM',
    reason: ''
  });

  const [submittedApt, setSubmittedApt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.patientPhone || !formData.preferredDate) {
      alert("Please complete required patient name, phone number, and preferred date.");
      return;
    }

    const created = addAppointment(formData);
    setSubmittedApt(created);
    setFormData({
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      department: 'General Medical Consultation',
      doctor: 'Any Available Specialist',
      preferredDate: '',
      preferredTime: '10:00 AM',
      reason: ''
    });
  };

  return (
    <section id="appointment" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Online Consultation</span>
          <h2 className="section-title">Schedule A Medical Appointment</h2>
          <p className="section-subtitle">
            Fill in your preferred date and department. Your booking request will automatically register in our Hospital CMS for triage confirmation.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="card appointment-form-card" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-xl)' }}>

            {submittedApt ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--status-confirmed-bg)',
                  color: 'var(--status-confirmed-text)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                  Appointment Request Received!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong>{submittedApt.patientName}</strong>. Your appointment request for <strong>{submittedApt.department}</strong> on <strong>{submittedApt.preferredDate}</strong> at <strong>{submittedApt.preferredTime}</strong> has been logged in our CMS database.
                </p>

                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'inline-block', marginBottom: '2rem', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>APPOINTMENT REFERENCE ID</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '0.05em' }}>
                    {submittedApt.id}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--status-pending-text)', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                    <ShieldCheck size={14} /> Registered in Hospital CMS (Pending Confirmation)
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => printAppointmentVoucher(submittedApt)}
                    className="btn btn-secondary"
                  >
                    <Printer size={18} /> Print Confirmation Slip
                  </button>
                  <button
                    onClick={() => setSubmittedApt(null)}
                    className="btn btn-primary"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="form-group">
                    <label>Full Patient Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Oluwaseun Adesanya"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 08031234567"
                      value={formData.patientPhone}
                      onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="e.g. patient@example.com"
                      value={formData.patientEmail}
                      onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Select Specialty / Department *</label>
                    <select
                      className="form-control"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      required
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.title}>{srv.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Preferred Doctor (Optional)</label>
                    <select
                      className="form-control"
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    >
                      <option value="Any Available Specialist">Any Available Specialist</option>
                      {doctors.map((doc) => (
                        <option key={doc.id} value={doc.name}>{doc.name} ({doc.department})</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Preferred Consultation Date *</label>
                    <input
                      type="date"
                      className="form-control"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label>Time Slot Preference</label>
                    <select
                      className="form-control"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    >
                      <option value="08:30 AM">Morning Session (08:30 AM)</option>
                      <option value="10:00 AM">Morning Session (10:00 AM)</option>
                      <option value="11:30 AM">Late Morning (11:30 AM)</option>
                      <option value="02:00 PM">Afternoon Session (02:00 PM)</option>
                      <option value="04:30 PM">Evening Session (04:30 PM)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Reason for Visit / Symptoms</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Brief note (e.g. Antenatal registration, Fever, Lab test)"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', maxWidth: '380px' }}
                  >
                    <Calendar size={18} /> Confirm & Submit Appointment Request
                  </button>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.75rem' }}>
                    🔒 Direct submission to Starlight Hospital CMS Triage Team
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .appointment-form-card { padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

