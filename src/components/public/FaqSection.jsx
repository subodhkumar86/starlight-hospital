import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: "What documents do I need for Antenatal (ANC) Registration?",
      answer: "For antenatal registration at Starlight Hospital, please bring a valid identification document (NIN, Voter's Card, or Driver's License), any previous medical/obstetric records, and your HMO card if registered under a health insurance provider. Our ANC registration desk runs Monday through Saturday."
    },
    {
      question: "How does HMO coverage and co-payment clearance work?",
      answer: "We partner with major HMO providers in Nigeria (including Reliance HMO, Hygeia HMO, AXA Mansard Health, Total Health Trust, and Anchor HMO). Upon arrival at our reception desk, present your HMO ID card for instant pre-authorization verification by our desk team."
    },
    {
      question: "Are emergency and surgical services available 24/7?",
      answer: "Yes, our emergency triage unit, operating theatres, laboratory diagnostics, and admission wards operate 24 hours a day, 7 days a week, including public holidays. Resident medical officers and on-call consultant surgeons are always on duty."
    },
    {
      question: "What are the outpatient clinic visiting hours?",
      answer: "Outpatient general medical consultations run Monday through Saturday from 8:00 AM to 6:00 PM. Inpatient ward visiting hours for family members are 10:00 AM – 12:00 PM (Morning) and 4:00 PM – 7:00 PM (Evening)."
    },
    {
      question: "Can I book a appointment for laboratory tests or ultrasound online?",
      answer: "Absolutely! You can use our online Appointment Booking form or Cost Estimator tool to schedule your laboratory tests or 3D/4D ultrasound scan. Walk-in diagnostic testing is also available 24/7."
    }
  ];

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="pill-label">Patient Information</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers regarding hospital registration, HMO clearance, emergency triage, and visiting schedules.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    border: `1px solid ${isOpen ? 'var(--accent-teal)' : 'var(--border-light)'}`,
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: isOpen ? 'var(--accent-teal)' : 'var(--primary-navy)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <HelpCircle size={20} style={{ color: isOpen ? 'var(--accent-teal)' : 'var(--text-light)', flexShrink: 0 }} />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: 'var(--text-muted)'
                      }}
                    />
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }} className="animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
