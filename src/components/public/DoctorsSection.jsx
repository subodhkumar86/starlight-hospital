import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Clock, Calendar, User, Search } from 'lucide-react';

export const DoctorsSection = () => {
  const { doctors } = useApp();
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['All', 'General Medicine', 'Obstetrics & Gynaecology', 'Paediatrics', 'Surgery'];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesDept = selectedDept === 'All' || doc.department === selectedDept;
    const matchesQuery = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesQuery;
  });

  const bookDoctor = (doctor) => navigate('/appointment', { state: { doctor: doctor.name } });

  return (
    <section id="doctors" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Medical Team</span>
          <h2 className="section-title">Meet Our Experienced Specialists</h2>
          <p className="section-subtitle">
            Our medical board comprises compassionate consultants, surgeons, and healthcare specialists dedicated to your family.
          </p>

          {/* Live Search & Department Category Filters */}
          <div style={{ maxWidth: '480px', margin: '1.5rem auto 1.25rem auto', position: 'relative' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search specialist by doctor name, title, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem', borderRadius: 'var(--radius-full)' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--text-light)' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`btn btn-sm ${selectedDept === dept ? 'btn-primary' : 'btn-outline'}`}
                style={{ borderRadius: 'var(--radius-full)' }}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>


        <div className="grid-4">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 21, 40, 0.85), transparent)'
                }}></div>
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', color: '#ffffff' }}>
                  <span className="badge badge-tag" style={{ backgroundColor: 'var(--accent-teal)', color: '#ffffff', border: 'none', fontSize: '0.7rem', marginBottom: '4px' }}>
                    {doc.department}
                  </span>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan-light)' }}>
                    {doc.experience}
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '2px' }}>
                  {doc.name}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
                  {doc.title}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem', flexGrow: 1 }}>
                  {doc.qualifications}
                </div>

                <div style={{ backgroundColor: 'var(--bg-light)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  <Clock size={14} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                  <span>{doc.availability}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Link
                    to={`/doctors/${doc.id}`}
                    className="btn btn-sm btn-outline"
                    style={{ flex: 1 }}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => bookDoctor(doc)}
                    className="btn btn-sm btn-primary"
                    style={{ flex: 1 }}
                  >
                    <Calendar size={14} /> Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
