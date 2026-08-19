import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, X, Stethoscope, User, Newspaper, HelpCircle, ArrowRight } from 'lucide-react';

export const CommandPaletteModal = () => {
  const { services, doctors, news, openModal, setViewMode } = useApp();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!open) return null;

  const filteredServices = services.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase()));
  const filteredDoctors = doctors.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.department.toLowerCase().includes(query.toLowerCase()));
  const filteredNews = news.filter(n => n.title.toLowerCase().includes(query.toLowerCase()) || n.category.toLowerCase().includes(query.toLowerCase()));

  const handleSelectService = (srv) => {
    setOpen(false);
    openModal('service', srv);
  };

  const handleSelectDoctor = (doc) => {
    setOpen(false);
    openModal('doctor', doc);
  };

  const handleSelectNews = (art) => {
    setOpen(false);
    openModal('newsReader', art);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9950,
        backgroundColor: 'rgba(11, 21, 40, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '10vh',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}
      onClick={() => setOpen(false)}
    >
      <div
        className="animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          width: '100%',
          maxWidth: '620px',
          overflow: 'hidden',
          border: '1px solid var(--border-light)'
        }}
      >
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-light)', gap: '0.75rem' }}>
          <Search size={20} style={{ color: 'var(--accent-teal)' }} />
          <input
            type="text"
            placeholder="Search doctors, specialties, health articles... (Esc to exit)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1.05rem', fontFamily: 'inherit', color: 'var(--primary-navy)' }}
            autoFocus
          />
          <button onClick={() => setOpen(false)} style={{ background: '#f1f5f9', border: 'none', borderRadius: 'var(--radius-sm)', padding: '0.2rem 0.5rem', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: 'var(--text-muted)' }}>
            ESC
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '1rem' }}>
          {query.trim() === '' && (
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              SUGGESTED QUICK SEARCHES
            </div>
          )}

          {/* Services Category */}
          {filteredServices.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                MEDICAL DEPARTMENTS ({filteredServices.length})
              </div>
              {filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => handleSelectService(srv)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'background 0.15s', marginBottom: '0.25rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Stethoscope size={16} style={{ color: 'var(--accent-teal)' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--primary-navy)' }}>{srv.title}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{srv.category}</span>
                </div>
              ))}
            </div>
          )}

          {/* Doctors Category */}
          {filteredDoctors.length > 0 && (
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-cyan)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                SPECIALIST DOCTORS ({filteredDoctors.length})
              </div>
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => handleSelectDoctor(doc)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'background 0.15s', marginBottom: '0.25rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <User size={16} style={{ color: 'var(--accent-cyan)' }} />
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '0.92rem', color: 'var(--primary-navy)' }}>{doc.name}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({doc.title})</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{doc.department}</span>
                </div>
              ))}
            </div>
          )}

          {/* News Category */}
          {filteredNews.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#8b5cf6', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                HEALTH ARTICLES & ADVICE ({filteredNews.length})
              </div>
              {filteredNews.map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelectNews(art)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'background 0.15s', marginBottom: '0.25rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Newspaper size={16} style={{ color: '#8b5cf6' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary-navy)' }}>{art.title}</span>
                  </div>
                  <span className="badge badge-tag" style={{ fontSize: '0.7rem' }}>{art.category}</span>
                </div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && filteredDoctors.length === 0 && filteredNews.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              No matches found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
