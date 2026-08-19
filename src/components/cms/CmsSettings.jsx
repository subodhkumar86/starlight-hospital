import React from 'react';
import { useApp } from '../../context/AppContext';
import { RefreshCw, Download, Database, ShieldCheck, HardDrive, Info } from 'lucide-react';

export const CmsSettings = () => {
  const { hospitalInfo, news, appointments, enquiries, resetToSeedData, showToast } = useApp();

  const handleExportJSON = () => {
    const exportData = {
      hospitalInfo,
      news,
      appointments,
      enquiries,
      exportedAt: new Date().toISOString()
    };
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `starlight_hospital_cms_export_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Export Completed', 'CMS Database exported successfully to JSON file.', 'success');
  };

  const handleResetData = () => {
    if (window.confirm("WARNING: This will overwrite all custom articles, appointments, and enquiries with default demonstration seed data. Continue?")) {
      resetToSeedData();
    }
  };

  return (
    <div className="cms-page-container">
      <div style={{ marginBottom: '2rem' }}>

        <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--primary-navy)' }}>
          CMS System Settings & Tools
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Data backup, demonstration seed reset, and system configuration.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '2rem' }}>
        {/* Reset & Backup Actions */}
        <div className="card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Database size={20} style={{ color: 'var(--accent-teal)' }} /> CMS Data Management
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Export all stored articles, patient appointments, and enquiries for offline archiving, or restore original seed data.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button
              onClick={handleExportJSON}
              className="btn btn-secondary"
              style={{ justifyContent: 'flex-start' }}
            >
              <Download size={18} /> Export Full CMS Database (JSON File)
            </button>

            <button
              onClick={handleResetData}
              className="btn btn-outline"
              style={{ justifyContent: 'flex-start', color: '#b91c1c', borderColor: '#fca5a5' }}
            >
              <RefreshCw size={18} /> Reset Database to Default Seed Data
            </button>
          </div>
        </div>

        {/* Hospital Configuration Details */}
        <div className="card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--accent-teal)' }} /> Registered Facility Details
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700 }}>FACILITY NAME</div>
              <div style={{ fontWeight: 700, color: 'var(--primary-navy)' }}>{hospitalInfo.name} ({hospitalInfo.tagline})</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700 }}>ADDRESS</div>
              <div>{hospitalInfo.address}</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700 }}>HOTLINES</div>
              <div>{hospitalInfo.phoneNumbers.join(', ')}</div>
            </div>

            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700 }}>STORAGE PROTOCOL</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
                <HardDrive size={14} /> React Context + LocalStorage API (Zero Backend Required)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
