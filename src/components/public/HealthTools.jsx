import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Activity, Heart, Baby, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const HealthTools = () => {
  const [activeTab, setActiveTab] = useState('bmi'); // 'bmi' | 'pregnancy'

  // BMI State
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);

  // Pregnancy Due Date State
  const [lmpDate, setLmpDate] = useState('');

  const calculateBmi = () => {
    if (!heightCm || !weightKg) return null;
    const heightM = heightCm / 100;
    const bmi = (weightKg / (heightM * heightM)).toFixed(1);

    let category = 'Normal Weight';
    let color = '#047857';
    let advice = 'Your BMI is in a healthy range. Maintain balanced nutrition and regular physical activity.';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = '#b45309';
      advice = 'Consult our doctors for dietary plans and nutritional supplements.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = '#b45309';
      advice = 'Consider routine cardiovascular screening and lifestyle adjustments.';
    } else if (bmi >= 30) {
      category = 'Obese';
      color = '#b91c1c';
      advice = 'We recommend scheduling a consultation for blood pressure and lipid profile checks.';
    }

    return { bmi, category, color, advice };
  };

  const calculateEdd = () => {
    if (!lmpDate) return null;
    const lmp = new Date(lmpDate);
    if (isNaN(lmp.getTime())) return null;

    // Naegele's rule: LMP + 280 days
    const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
    const eddStr = edd.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    // Gestational age in weeks
    const diffDays = Math.floor((new Date() - lmp) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);

    let trimester = 'First Trimester (Weeks 1 - 12)';
    if (weeks >= 13 && weeks <= 27) trimester = 'Second Trimester (Weeks 13 - 27)';
    else if (weeks >= 28) trimester = 'Third Trimester (Weeks 28 - 40)';

    return { eddStr, weeks, trimester };
  };

  const bmiResult = calculateBmi();
  const eddResult = calculateEdd();

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Interactive Wellness Tools</span>
          <h2 className="section-title">Health & Pregnancy Calculators</h2>
          <p className="section-subtitle">
            Free patient wellness tools to estimate your Body Mass Index (BMI) or calculate expected delivery dates for expectant mothers.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            <button
              onClick={() => setActiveTab('bmi')}
              className={`btn ${activeTab === 'bmi' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Activity size={18} /> BMI & Wellness Calculator
            </button>
            <button
              onClick={() => setActiveTab('pregnancy')}
              className={`btn ${activeTab === 'pregnancy' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Baby size={18} /> Pregnancy Due Date Estimator
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {activeTab === 'bmi' ? (
            <div className="card animate-fade-in" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                Body Mass Index (BMI) Assessment
              </h3>

              <div className="grid-2">
                <div className="form-group">
                  <label>Height: {heightCm} cm</label>
                  <input
                    type="range"
                    min="120"
                    max="220"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
                  />
                </div>

                <div className="form-group">
                  <label>Weight: {weightKg} kg</label>
                  <input
                    type="range"
                    min="30"
                    max="160"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
                  />
                </div>
              </div>

              {bmiResult && (
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginTop: '1.5rem', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)' }}>YOUR CALCULATED BMI</div>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: bmiResult.color, lineHeight: 1, margin: '6px 0' }}>
                    {bmiResult.bmi}
                  </div>
                  <span className="badge" style={{ backgroundColor: `${bmiResult.color}20`, color: bmiResult.color, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    {bmiResult.category}
                  </span>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginTop: '0.5rem' }}>
                    {bmiResult.advice}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="card animate-fade-in" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                Pregnancy Due Date (EDD) Estimator
              </h3>

              <div className="form-group" style={{ maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                <label>First Day of Last Menstrual Period (LMP)</label>
                <input
                  type="date"
                  className="form-control"
                  value={lmpDate}
                  onChange={(e) => setLmpDate(e.target.value)}
                />
              </div>

              {eddResult ? (
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.75rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--accent-teal)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '0.1em' }}>ESTIMATED DUE DATE (EDD)</div>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '6px 0' }}>
                    {eddResult.eddStr}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    Current Gestational Progress: <strong>~{eddResult.weeks} Weeks ({eddResult.trimester})</strong>
                  </div>

                  <button onClick={scrollToAppointment} className="btn btn-primary">
                    <Calendar size={18} /> Book Antenatal ANC Registration
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Please select your Last Menstrual Period date above to calculate your estimated due date.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
