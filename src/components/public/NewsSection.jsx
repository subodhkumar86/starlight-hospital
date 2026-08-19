import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const NewsSection = () => {
  const { news, openModal } = useApp();
  const [selectedCat, setSelectedCat] = useState('All');

  // Filter only Published articles for the public site
  const publishedNews = news.filter((n) => n.status === 'Published');

  const categories = ['All', 'General Health', 'Maternal Health', 'Paediatrics', 'Hospital News'];

  const filteredNews = selectedCat === 'All'
    ? publishedNews
    : publishedNews.filter((n) => n.category === selectedCat);

  return (
    <section id="news" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Health Education & Blog</span>
          <h2 className="section-title">Latest Medical News & Health Tips</h2>
          <p className="section-subtitle">
            Stay informed with healthcare advice, disease prevention guidelines, and hospital updates curated by our medical experts.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {categories.map((cat) => (
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

        {filteredNews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            No published articles found in this category.
          </div>
        ) : (
          <div className="grid-3">
            {filteredNews.map((article) => (
              <div key={article.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem'
                  }}>
                    <span className="badge badge-tag" style={{ backgroundColor: 'var(--accent-teal)', color: '#ffffff', border: 'none' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={13} /> {article.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '0.6rem', lineHeight: 1.35 }}>
                    {article.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {article.excerpt}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      By {article.author}
                    </span>

                    <button
                      onClick={() => openModal('newsReader', article)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-teal)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
