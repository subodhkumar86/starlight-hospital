import React, { useState } from 'react';
import { Activity, Heart, Baby, Calendar, ShieldCheck, Syringe } from 'lucide-react';

export const HealthTools = () => {
  const [activeTab, setActiveTab] = useState('bmi'); // 'bmi' | 'pregnancy' | 'hydration' | 'immunization'

  // BMI State
  const [heightCm, setHeightCm] = useState(170);
  const [weightKg, setWeightKg] = useState(70);

  // Pregnancy Due Date State
  const [lmpDate, setLmpDate] = useState('');

  // Hydration State
  const [userWeight, setUserWeight] = useState(65);

  // Child Immunization DOB State
  const [childDob, setChildDob] = useState('');

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

    const edd = new Date(lmp.getTime() + 280 * 24 * 60 * 60 * 1000);
    const eddStr = edd.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const diffDays = Math.floor((new Date() - lmp) / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);

    let trimester = 'First Trimester (Weeks 1 - 12)';
    if (weeks >= 13 && weeks <= 27) trimester = 'Second Trimester (Weeks 13 - 27)';
    else if (weeks >= 28) trimester = 'Third Trimester (Weeks 28 - 40)';

    return { eddStr, weeks, trimester };
  };

  const calculateHydration = () => {
    const liters = (userWeight * 0.035).toFixed(1);
    const glasses = Math.round(liters * 4);
    const calories = Math.round(userWeight * 30);
    return { liters, glasses, calories };
  };

  const calculateVaccines = () => {
    if (!childDob) return null;
    const dob = new Date(childDob);
    if (isNaN(dob.getTime())) return null;

    const addDays = (days) => {
      const d = new Date(dob.getTime() + days * 24 * 60 * 60 * 1000);
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return [
      { age: 'At Birth', date: addDays(0), vaccines: 'BCG, OPV 0, Hepatitis B (HBV 0)' },
      { age: '6 Weeks', date: addDays(42), vaccines: 'Penta 1, OPV 1, PCV 1, Rota 1' },
      { age: '10 Weeks', date: addDays(70), vaccines: 'Penta 2, OPV 2, PCV 2, Rota 2' },
      { age: '14 Weeks', date: addDays(98), vaccines: 'Penta 3, OPV 3, PCV 3, IPV 1' },
      { age: '9 Months', date: addDays(270), vaccines: 'Measles 1, Yellow Fever, Vitamin A 1' },
      { age: '15 Months', date: addDays(450), vaccines: 'Measles 2 (MMR), Meningococcal' }
    ];
  };

  const bmiResult = calculateBmi();
  const eddResult = calculateEdd();
  const hydResult = calculateHydration();
  const vaccineSchedule = calculateVaccines();

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Interactive Wellness Tools</span>
          <h2 className="section-title">Health & Clinical Calculators</h2>
          <p className="section-subtitle">
            Free patient wellness tools to estimate Body Mass Index (BMI), pregnancy due dates, hydration targets, or infant immunization schedules.
          </p>

          <div className="health-tools-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('bmi')}
              className={`btn ${activeTab === 'bmi' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Activity size={18} /> BMI Assessment
            </button>
            <button
              onClick={() => setActiveTab('pregnancy')}
              className={`btn ${activeTab === 'pregnancy' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Baby size={18} /> Pregnancy Due Date
            </button>
            <button
              onClick={() => setActiveTab('hydration')}
              className={`btn ${activeTab === 'hydration' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Heart size={18} /> Hydration & Calories
            </button>
            <button
              onClick={() => setActiveTab('immunization')}
              className={`btn ${activeTab === 'immunization' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Syringe size={18} /> Infant Immunization
            </button>
          </div>
        </div>


        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {activeTab === 'bmi' && (
            <div className="card animate-fade-in health-tool-card" style={{ padding: '2rem' }}>
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
          )}

          {activeTab === 'pregnancy' && (
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

          {activeTab === 'hydration' && (
            <div className="card animate-fade-in" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                Daily Hydration & Calorie Target Estimator
              </h3>

              <div className="form-group" style={{ maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
                <label>Body Weight: {userWeight} kg</label>
                <input
                  type="range"
                  min="35"
                  max="150"
                  value={userWeight}
                  onChange={(e) => setUserWeight(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-teal)' }}
                />
              </div>

              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>RECOMMENDED DAILY WATER</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '6px 0' }}>
                    {hydResult.liters} Liters
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    (~{hydResult.glasses} standard glasses/day)
                  </div>
                </div>

                <div style={{ backgroundColor: 'var(--bg-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-teal)' }}>ESTIMATED CALORIE TARGET</div>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary-navy)', margin: '6px 0' }}>
                    ~{hydResult.calories} kcal
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Daily energy maintenance baseline
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'immunization' && (
            <div className="card animate-fade-in" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '1.25rem' }}>
                Infant Immunization Schedule Tracker
              </h3>

              <div className="form-group" style={{ maxWidth: '400px', margin: '0 auto 1.5rem auto' }}>
                <label>Child's Date of Birth (DOB)</label>
                <input
                  type="date"
                  className="form-control"
                  value={childDob}
                  onChange={(e) => setChildDob(e.target.value)}
                />
              </div>

              {vaccineSchedule ? (
                <div>
                  <div className="table-responsive" style={{ marginBottom: '1.5rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--bg-light)', borderBottom: '2px solid var(--border-light)', color: 'var(--primary-navy)' }}>
                          <th style={{ padding: '0.75rem' }}>Age Milestone</th>
                          <th style={{ padding: '0.75rem' }}>Expected Date</th>
                          <th style={{ padding: '0.75rem' }}>Required Vaccines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vaccineSchedule.map((v, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                            <td style={{ padding: '0.75rem', fontWeight: 700, color: 'var(--accent-teal)' }}>{v.age}</td>
                            <td style={{ padding: '0.75rem', fontWeight: 600 }}>{v.date}</td>
                            <td style={{ padding: '0.75rem' }}>{v.vaccines}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button onClick={scrollToAppointment} className="btn btn-primary">
                      <Calendar size={18} /> Book Immunization Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Please select your child's birth date above to generate an official WHO immunization schedule timeline.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .health-tool-card { padding: 1.25rem !important; }
          .health-tools-tabs button { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};


