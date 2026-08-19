import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock3, UserRound } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HealthArticlePage = () => {
  const { slug } = useParams();
  const { news } = useApp();
  const article = news.find((item) => item.slug === slug || item.id === slug);
  if (!article || article.status !== 'Published') return <Navigate to="/health-information" replace />;

  return (
    <article style={{ paddingBottom: '5rem', backgroundColor: 'var(--bg-light)' }}>
      <div style={{ height: 'min(44vw, 460px)', minHeight: '280px', position: 'relative', backgroundColor: 'var(--primary-navy)' }}>
        <img src={article.coverImage} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .56 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(11,21,40,.96), rgba(11,21,40,.15))' }} />
        <div className="container" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: '3rem', maxWidth: '980px' }}>
          <span className="pill-label" style={{ backgroundColor: 'var(--accent-teal)', color: '#fff', border: 'none' }}>{article.category}</span>
          <h1 style={{ color: '#fff', maxWidth: '840px', fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15, marginTop: '.9rem' }}>{article.title}</h1>
        </div>
      </div>
      <div className="container" style={{ maxWidth: '850px', paddingTop: '2rem' }}>
        <Link to="/health-information" className="btn btn-outline btn-sm"><ArrowLeft size={16} /> All health information</Link>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', padding: '1.5rem 0', margin: '1.5rem 0', borderBottom: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '.9rem' }}>
          <span><UserRound size={15} /> {article.author}</span><span><CalendarDays size={15} /> {article.date}</span><span><Clock3 size={15} /> {article.readTime}</span>
        </div>
        <p style={{ fontSize: '1.18rem', color: 'var(--text-main)', lineHeight: 1.75, fontWeight: 600, marginBottom: '1.5rem' }}>{article.excerpt}</p>
        <div style={{ whiteSpace: 'pre-line', color: 'var(--text-main)', lineHeight: 1.9, fontSize: '1.02rem' }}>{article.content}</div>
        <div className="card" style={{ marginTop: '3rem', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}><div><strong style={{ color: 'var(--primary-navy)' }}>Need personal medical advice?</strong><div style={{ color: 'var(--text-muted)', fontSize: '.9rem', marginTop: '.2rem' }}>Book a consultation with our clinical team.</div></div><Link to="/appointment" className="btn btn-primary">Book appointment</Link></div>
      </div>
    </article>
  );
};
