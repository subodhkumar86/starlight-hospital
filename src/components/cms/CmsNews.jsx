import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  CheckCircle,
  X,
  Image,
  Calendar,
  User,
  Tag
} from 'lucide-react';

export const CmsNews = () => {
  const { news, addNews, updateNews, deleteNews, openModal } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'General Health',
    excerpt: '',
    content: '',
    author: 'Dr. Emmanuel Adeleke',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    status: 'Published'
  });

  const [showFormModal, setShowFormModal] = useState(false);

  const presetImages = [
    { label: 'Doctor Assessment', url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { label: 'Maternity Care', url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80' },
    { label: 'Paediatrics Care', url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80' },
    { label: 'Hospital Building', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' }
  ];

  const handleOpenCreate = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      title: '',
      category: 'General Health',
      excerpt: '',
      content: '',
      author: 'Dr. Emmanuel Adeleke',
      coverImage: presetImages[0].url,
      status: 'Published'
    });
    setShowFormModal(true);
  };

  const handleOpenEdit = (article) => {
    setIsEditing(true);
    setEditingId(article.id);
    setFormData({
      title: article.title,
      category: article.category,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      coverImage: article.coverImage,
      status: article.status
    });
    setShowFormModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Please fill in article title and content.");
      return;
    }

    if (isEditing && editingId) {
      updateNews(editingId, formData);
    } else {
      addNews(formData);
    }

    setShowFormModal(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete article "${title}"?`)) {
      deleteNews(id);
    }
  };

  const toggleStatus = (article) => {
    const nextStatus = article.status === 'Published' ? 'Draft' : 'Published';
    updateNews(article.id, { status: nextStatus });
  };

  const filteredArticles = news.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === 'All' || art.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div style={{ padding: '2rem' }}>
      {/* Header & New Article CTA */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
            News Articles CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Post new health advice, edit existing articles, or switch status between Published and Draft.
          </p>
        </div>

        <button onClick={handleOpenCreate} className="btn btn-primary">
          <Plus size={18} /> Post New Article
        </button>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', minWidth: '280px', flexGrow: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search articles by title or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-light)' }} />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['All', 'General Health', 'Maternal Health', 'Paediatrics', 'Hospital News'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`btn btn-sm ${selectedCat === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Table */}
      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-light)', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-navy)' }}>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Cover</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Article Title</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Category</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Author</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Date</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>Status</th>
              <th style={{ padding: '1rem 1.25rem', fontWeight: 700, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  No news articles match your filter criteria.
                </td>
              </tr>
            ) : (
              filteredArticles.map((article) => (
                <tr key={article.id} style={{ borderBottom: '1px solid var(--border-light)', transition: 'background-color 0.15s' }}>
                  <td style={{ padding: '0.85rem 1.25rem' }}>
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      style={{ width: '54px', height: '42px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }}
                    />
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--primary-navy)', maxWidth: '280px' }}>
                    {article.title}
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem' }}>
                    <span className="badge badge-tag">{article.category}</span>
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-muted)' }}>
                    {article.author}
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    {article.date}
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem' }}>
                    <button
                      onClick={() => toggleStatus(article)}
                      className={`badge ${article.status === 'Published' ? 'badge-confirmed' : 'badge-pending'}`}
                      style={{ border: 'none', cursor: 'pointer' }}
                      title="Click to toggle status"
                    >
                      {article.status}
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 1.25rem', textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => openModal('newsReader', article)}
                        className="btn btn-sm btn-outline"
                        title="View Article Reader"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        onClick={() => handleOpenEdit(article)}
                        className="btn btn-sm btn-secondary"
                        title="Edit Article"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id, article.title)}
                        className="btn btn-sm btn-danger"
                        title="Delete Article"
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

      {/* CREATE / EDIT ARTICLE MODAL FORM */}
      {showFormModal && (
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
          <div className="animate-fade-in" style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', width: '100%', maxWidth: '720px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}>
            <button
              onClick={() => setShowFormModal(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.5rem' }}>
              {isEditing ? 'Edit News Article' : 'Post New Article to CMS'}
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Article Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Preventing Malaria in Pregnant Mothers"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label>Category</label>
                  <select
                    className="form-control"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="General Health">General Health</option>
                    <option value="Maternal Health">Maternal Health</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Hospital News">Hospital News</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Author Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Dr. Emmanuel Adeleke"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Short Excerpt (Summary for card view)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brief 1-2 sentence overview..."
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Full Article Body / Content *</label>
                <textarea
                  className="form-control"
                  placeholder="Write full article content here..."
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  required
                ></textarea>
              </div>

              {/* Cover Image Picker */}
              <div className="form-group">
                <label>Cover Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                />
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {presetImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, coverImage: img.url })}
                      className="btn btn-sm btn-outline"
                      style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                    >
                      Preset: {img.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Publication Status</label>
                <select
                  className="form-control"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Published">Published (Visible on Live Website)</option>
                  <option value="Draft">Draft (Internal Only)</option>
                </select>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" onClick={() => setShowFormModal(false)} className="btn btn-outline">Cancel</button>
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Save Article Changes' : 'Publish Article to CMS'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
