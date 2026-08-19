import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Edit2, Trash2, Clock, UserCheck, X } from 'lucide-react';

export const CmsDoctors = () => {
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useApp();

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    title: 'Consultant Physician',
    department: 'General Medicine',
    qualifications: 'MBBS, FWACP',
    experience: '8+ Years Experience',
    bio: '',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
    availability: 'Mon - Fri (9:00 AM - 4:00 PM)'
  });

  const handleOpenCreate = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      name: '',
      title: 'Consultant Physician',
      department: 'General Medicine',
      qualifications: 'MBBS, FWACP',
      experience: '8+ Years Experience',
      bio: '',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
      availability: 'Mon - Fri (9:00 AM - 4:00 PM)'
    });
    setShowModal(true);
  };

  const handleOpenEdit = (doc) => {
    setIsEditing(true);
    setEditingId(doc.id);
    setFormData({
      name: doc.name,
      title: doc.title,
      department: doc.department,
      qualifications: doc.qualifications,
      experience: doc.experience,
      bio: doc.bio,
      image: doc.image,
      availability: doc.availability
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    if (isEditing && editingId) {
      updateDoctor(editingId, formData);
    } else {
      addDoctor(formData);
    }

    setShowModal(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the medical roster?`)) {
      deleteDoctor(id);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            Specialist Doctors & Roster CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Manage consultant physicians, surgical specialists, and clinical consultation schedules.
          </p>
        </div>

        <button onClick={handleOpenCreate} className="btn btn-primary">
          <Plus size={18} /> Add New Specialist Doctor
        </button>
      </div>

      <div className="grid-3">
        {doctors.map((doc) => (
          <div key={doc.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <img
                src={doc.image}
                alt={doc.name}
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-teal)' }}
              />
              <div>
                <span className="badge badge-tag" style={{ fontSize: '0.7rem' }}>{doc.department}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-navy)', marginTop: '2px' }}>{doc.name}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{doc.title}</div>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem', flexGrow: 1 }}>
              {doc.bio || `${doc.qualifications} (${doc.experience})`}
            </p>

            <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} style={{ color: 'var(--accent-teal)' }} /> {doc.availability}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '0.85rem' }}>
              <button onClick={() => handleOpenEdit(doc)} className="btn btn-sm btn-secondary" style={{ flex: 1 }}>
                <Edit2 size={14} /> Edit Profile
              </button>
              <button onClick={() => handleDelete(doc.id, doc.name)} className="btn btn-sm btn-danger">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Doctor Modal Form */}
      {showModal && (
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
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '640px', padding: '1.5rem', maxHeight: '92vh', overflowY: 'auto', position: 'relative' }}>

            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
              {isEditing ? 'Edit Doctor Profile' : 'Add New Specialist Doctor'}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="form-group">
                  <label>Full Doctor Name *</label>
                  <input type="text" className="form-control" placeholder="e.g. Dr. Emmanuel Adeleke" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <select className="form-control" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })}>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Diagnostics">Diagnostics</option>
                  </select>
                </div>
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label>Official Title</label>
                  <input type="text" className="form-control" placeholder="e.g. Chief Consultant Obstetrician" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Qualifications</label>
                  <input type="text" className="form-control" placeholder="e.g. MBBS, FWACS" value={formData.qualifications} onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })} />
                </div>
              </div>

              <div className="form-group">
                <label>Clinic Schedule / Availability</label>
                <input type="text" className="form-control" placeholder="e.g. Mon, Wed, Fri (9:00 AM - 4:00 PM)" value={formData.availability} onChange={(e) => setFormData({ ...formData, availability: e.target.value })} />
              </div>

              <div className="form-group">
                <label>Professional Bio / Profile Summary</label>
                <textarea className="form-control" rows={3} placeholder="Brief background..." value={formData.bio} onChange={(e) => setFormData({ ...formData, bio: e.target.value })}></textarea>
              </div>

              <div className="form-group">
                <label>Doctor Photo Image URL</label>
                <input type="text" className="form-control" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-outline">Cancel</button>
                <button type="submit" className="btn btn-primary">{isEditing ? 'Save Profile Changes' : 'Add Doctor to CMS'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
