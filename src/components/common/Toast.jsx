import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      maxWidth: '380px',
      width: '100%',
      pointerEvents: 'none'
    }}>
      {toasts.map((toast) => {
        let icon = <CheckCircle2 size={20} style={{ color: 'var(--accent-teal)' }} />;
        let borderColor = 'var(--accent-teal)';

        if (toast.type === 'error') {
          icon = <AlertCircle size={20} style={{ color: '#ef4444' }} />;
          borderColor = '#ef4444';
        } else if (toast.type === 'info') {
          icon = <Info size={20} style={{ color: 'var(--accent-cyan)' }} />;
          borderColor = 'var(--accent-cyan)';
        }

        return (
          <div
            key={toast.id}
            className="glass-panel animate-fade-in"
            style={{
              pointerEvents: 'auto',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              borderLeft: `4px solid ${borderColor}`,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '0.75rem',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ marginTop: '2px' }}>{icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--primary-navy)' }}>
                  {toast.title}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {toast.message}
                </div>
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', padding: '2px' }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
