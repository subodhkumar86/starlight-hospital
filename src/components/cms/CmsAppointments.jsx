import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  Trash2,
  Eye,
  User,
  Phone,
  Mail,
  FileText,
  X,
  Download,
  Printer
} from 'lucide-react';

export const CmsAppointments = () => {
  const { appointments, updateAppointmentStatus, deleteAppointment, exportAppointmentsCSV, printAppointmentVoucher } = useApp();

  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeAptModal, setActiveAptModal] = useState(null);

  const statuses = ['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'];

  const filteredAppointments = appointments.filter((apt) => {
    const matchesStatus = selectedStatus === 'All' || apt.status === selectedStatus;
    const matchesSearch = apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          apt.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (apt.patientPhone && apt.patientPhone.includes(searchTerm)) ||
                          apt.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDelete = (id, patientName) => {
    if (window.confirm(`Are you sure you want to delete appointment record ${id} for ${patientName}?`)) {
      deleteAppointment(id);
    }
  };

  return (
    <div className="cms-page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>

        <div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Patient Appointments Manager
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            View incoming patient consultation requests, update triage status, and manage clinic schedules.
          </p>
        </div>

        <button onClick={exportAppointmentsCSV} className="btn btn-secondary">
          <Download size={18} /> Export Appointments (CSV)
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', minWidth: '280px', flexGrow: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by patient name, phone, or Ref ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-light)' }} />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {statuses.map((st) => {
            const count = st === 'All' ? appointments.length : appointments.filter((a) => a.status === st).length;
            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`btn btn-sm ${selectedStatus === st ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {st} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Appointments Data Table */}
      <div className="card table-responsive">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', minWidth: '650px' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-navy)' }}>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Ref ID</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Patient Name</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Phone / Contact</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Specialty & Doctor</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Date & Time</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Status</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700, textAlign: 'right' }}>Manage</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No appointments match the selected filter criteria.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((apt) => (
                <tr key={apt.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 800, color: 'var(--accent-teal)' }}>
                    {apt.id}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {apt.patientName}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>
                    {apt.patientPhone || apt.patientEmail || 'N/A'}
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <div style={{ fontWeight: 600 }}>{apt.department}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{apt.doctor}</div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', fontSize: '0.86rem' }}>
                    <div><strong>{apt.preferredDate}</strong></div>
                    <div style={{ color: 'var(--text-muted)' }}>{apt.preferredTime}</div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <select
                      className={`badge badge-${apt.status.toLowerCase()}`}
                      value={apt.status}
                      onChange={(e) => updateAppointmentStatus(apt.id, e.target.value)}
                      style={{ border: 'none', cursor: 'pointer', fontWeight: 700, outline: 'none' }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => setActiveAptModal(apt)}
                        className="btn btn-sm btn-outline"
                        title="View Detailed Patient File"
                      >
                        <Eye size={14} /> Details
                      </button>
                      <button
                        onClick={() => handleDelete(apt.id, apt.patientName)}
                        className="btn btn-sm btn-danger"
                        title="Delete Record"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* APPOINTMENT DETAIL MODAL */}
      {activeAptModal && (
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
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '600px', padding: '1.5rem', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>

            <button
              onClick={() => setActiveAptModal(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className={`badge badge-${activeAptModal.status.toLowerCase()}`} style={{ fontSize: '0.85rem' }}>
                {activeAptModal.status}
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ref ID: <strong>{activeAptModal.id}</strong></span>
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
              Patient Appointment Record
            </h3>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <User size={18} style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>PATIENT NAME</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-navy)' }}>{activeAptModal.patientName}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>PHONE / EMAIL</div>
                  <div style={{ fontSize: '0.95rem' }}>{activeAptModal.patientPhone} {activeAptModal.patientEmail ? `(${activeAptModal.patientEmail})` : ''}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Calendar size={18} style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>APPOINTMENT DATE & TIME</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{activeAptModal.preferredDate} at {activeAptModal.preferredTime}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <FileText size={18} style={{ color: 'var(--accent-teal)' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>DEPARTMENT & DOCTOR</div>
                  <div style={{ fontSize: '0.95rem' }}>{activeAptModal.department} — <em>{activeAptModal.doctor}</em></div>
                </div>
              </div>

              {activeAptModal.reason && (
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem', marginTop: '0.25rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>PATIENT NOTES / REASON</div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-main)', marginTop: '2px' }}>{activeAptModal.reason}</div>
                </div>
              )}
            </div>

            {/* Quick Status Control Buttons */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>Change Appointment Status:</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button onClick={() => updateAppointmentStatus(activeAptModal.id, 'Confirmed')} className="btn btn-sm btn-primary">
                  Mark Confirmed
                </button>
                <button onClick={() => updateAppointmentStatus(activeAptModal.id, 'Completed')} className="btn btn-sm btn-secondary">
                  Mark Completed
                </button>
                <button onClick={() => updateAppointmentStatus(activeAptModal.id, 'Cancelled')} className="btn btn-sm btn-danger">
                  Cancel Booking
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={() => printAppointmentVoucher(activeAptModal)} className="btn btn-sm btn-secondary">
                <Printer size={14} /> Print Voucher
              </button>
              <button onClick={() => setActiveAptModal(null)} className="btn btn-outline">Close Record</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
