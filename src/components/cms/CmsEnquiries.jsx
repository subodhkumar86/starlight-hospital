import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  MessageSquare,
  Search,
  CheckCircle,
  Eye,
  Trash2,
  Mail,
  User,
  Phone,
  Send,
  X,
  Archive
} from 'lucide-react';

export const CmsEnquiries = () => {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useApp();

  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeEnqModal, setActiveEnqModal] = useState(null);
  const [replyText, setReplyText] = useState('');

  const statuses = ['All', 'Unread', 'Read', 'Replied', 'Archived'];

  const filteredEnquiries = enquiries.filter((enq) => {
    const matchesStatus = selectedStatus === 'All' || enq.status === selectedStatus;
    const matchesSearch = enq.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (enq.subject && enq.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          enq.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (enq.senderEmail && enq.senderEmail.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const handleOpenReader = (enq) => {
    setActiveEnqModal(enq);
    if (enq.status === 'Unread') {
      updateEnquiryStatus(enq.id, 'Read');
    }
  };

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText) return;
    alert(`Reply sent to ${activeEnqModal.senderName} (${activeEnqModal.senderEmail || activeEnqModal.senderPhone})!`);
    updateEnquiryStatus(activeEnqModal.id, 'Replied');
    setReplyText('');
    setActiveEnqModal(null);
  };

  const handleDelete = (id, senderName) => {
    if (window.confirm(`Are you sure you want to delete message from ${senderName}?`)) {
      deleteEnquiry(id);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
          General Enquiries & Messages
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Manage incoming messages from patients and corporate partners sent through the website contact form.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', minWidth: '280px', flexGrow: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by sender name, subject, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-light)' }} />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {statuses.map((st) => {
            const count = st === 'All' ? enquiries.length : enquiries.filter((e) => e.status === st).length;
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

      {/* Enquiries Data Table */}
      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-navy)' }}>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Sender</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Contact Info</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Subject / Excerpt</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Status</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnquiries.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No enquiries found matching your filter criteria.
                </td>
              </tr>
            ) : (
              filteredEnquiries.map((enq) => (
                <tr key={enq.id} style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: enq.status === 'Unread' ? 'rgba(254, 242, 242, 0.4)' : 'transparent' }}>
                  <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    {enq.senderName}
                  </td>
                  <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                    <div>{enq.senderPhone || 'No Phone'}</div>
                    <div>{enq.senderEmail || 'No Email'}</div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', maxWidth: '300px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--primary-navy)' }}>{enq.subject || 'General Enquiry'}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {enq.message}
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.25rem' }}>
                    <select
                      className={`badge badge-${enq.status.toLowerCase()}`}
                      value={enq.status}
                      onChange={(e) => updateEnquiryStatus(enq.id, e.target.value)}
                      style={{ border: 'none', cursor: 'pointer', fontWeight: 700, outline: 'none' }}
                    >
                      <option value="Unread">Unread</option>
                      <option value="Read">Read</option>
                      <option value="Replied">Replied</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </td>
                  <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleOpenReader(enq)}
                        className="btn btn-sm btn-primary"
                        title="Read & Respond"
                      >
                        <Eye size={14} /> Read Message
                      </button>
                      <button
                        onClick={() => handleDelete(enq.id, enq.senderName)}
                        className="btn btn-sm btn-danger"
                        title="Delete Message"
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

      {/* ENQUIRY READER MODAL */}
      {activeEnqModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9500,
          backgroundColor: 'rgba(11, 21, 40, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '640px', padding: '2rem', position: 'relative' }}>
            <button
              onClick={() => setActiveEnqModal(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className={`badge badge-${activeEnqModal.status.toLowerCase()}`}>
                {activeEnqModal.status}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {activeEnqModal.id}</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
              {activeEnqModal.subject || 'General Enquiry'}
            </h3>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><User size={14} /> {activeEnqModal.senderName}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Phone size={14} /> {activeEnqModal.senderPhone || 'N/A'}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}><Mail size={14} /> {activeEnqModal.senderEmail || 'N/A'}</span>
            </div>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.25rem', borderRadius: 'var(--radius-md)', fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {activeEnqModal.message}
            </div>

            {/* Quick Reply Form */}
            <form onSubmit={handleSendReply} style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
              <div className="form-group">
                <label>Compose Quick Response</label>
                <textarea
                  className="form-control"
                  placeholder={`Write your response to ${activeEnqModal.senderName}...`}
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => {
                      updateEnquiryStatus(activeEnqModal.id, 'Replied');
                      setActiveEnqModal(null);
                    }}
                    className="btn btn-sm btn-outline"
                  >
                    Mark as Replied
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      updateEnquiryStatus(activeEnqModal.id, 'Archived');
                      setActiveEnqModal(null);
                    }}
                    className="btn btn-sm btn-outline"
                  >
                    <Archive size={14} /> Archive
                  </button>
                </div>

                <button type="submit" className="btn btn-primary btn-sm">
                  <Send size={14} /> Send Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
