import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, Stethoscope } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HealthInformationPage = () => {
  const { news } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', 'General Health', 'Maternal Health', 'Paediatrics', 'Hospital News'];

  const articles = useMemo(() => news.filter((article) => {
    const term = query.trim().toLowerCase();
    return article.status === 'Published'
      && (category === 'All' || article.category === category)
      && (!term || `${article.title} ${article.excerpt} ${article.content}`.toLowerCase().includes(term));
  }), [news, category, query]);

  return (
    <div style={{ backgroundColor: 'var(--bg-light)', minHeight: '70vh' }}>
      <section style={{ background: 'linear-gradient(125deg, var(--primary-navy), #123b5d)', color: '#fff', padding: '5.5rem 0 4.5rem' }}>
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <span className="pill-label" style={{ backgroundColor: 'rgba(45, 212, 191, .15)', color: 'var(--accent-teal-light)', borderColor: 'rgba(94, 234, 212, .35)' }}>
            <BookOpen size={14} /> Patient Education Centre
          </span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, margin: '1rem 0' }}>Health Information</h1>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Practical, clinician-reviewed guidance to help you make informed decisions for yourself and your family.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1 1 260px' }}>
              <Search size={18} style={{ position: 'absolute', top: '12px', left: '12px', color: 'var(--text-light)' }} />
              <input className="form-control" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search health topics..." style={{ paddingLeft: '2.5rem' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`btn btn-sm ${item === category ? 'btn-primary' : 'btn-outline'}`} style={{ borderRadius: '999px' }}>{item}</button>)}
            </div>
          </div>

          {articles.length ? <div className="grid-3">
            {articles.map((article) => (
              <article className="card" key={article.id} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={article.coverImage} alt="" style={{ height: '205px', width: '100%', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="pill-label" style={{ alignSelf: 'flex-start', marginBottom: '.8rem' }}>{article.category}</span>
                  <h2 style={{ color: 'var(--primary-navy)', fontSize: '1.25rem', lineHeight: 1.35, marginBottom: '.65rem' }}>{article.title}</h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '.92rem', flexGrow: 1 }}>{article.excerpt}</p>
                  <Link to={`/health-information/${article.slug || article.id}`} className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start', marginTop: '1.25rem' }}>Read guidance <ArrowRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div> : <div className="card" style={{ padding: '3.5rem', textAlign: 'center' }}><Stethoscope size={32} style={{ color: 'var(--accent-teal)', marginBottom: '1rem' }} /><h2>No matching guidance yet</h2><p style={{ color: 'var(--text-muted)' }}>Try another search term or select a different topic.</p></div>}
        </div>
      </section>
    </div>
  );
};
