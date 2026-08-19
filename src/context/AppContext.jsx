import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_HOSPITAL_INFO,
  INITIAL_SERVICES,
  INITIAL_DOCTORS,
  INITIAL_NEWS,
  INITIAL_APPOINTMENTS,
  INITIAL_ENQUIRIES
} from '../data/seedData';

const AppContext = createContext();

const STORAGE_KEYS = {
  NEWS: 'starlight_cms_news_v1',
  APPOINTMENTS: 'starlight_cms_appointments_v1',
  ENQUIRIES: 'starlight_cms_enquiries_v1',
  DOCTORS: 'starlight_cms_doctors_v1',
  THEME: 'starlight_theme_v1',
  ADMIN_SESSION: 'starlight_cms_admin_session_v1'
};

export const AppProvider = ({ children }) => {
  // Navigation & UI View State
  const [viewMode, setViewMode] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'active' ? 'cms' : 'public';
    } catch (_error) {
      return 'public';
    }
  }); // 'public' | 'cms'
  const [cmsTab, setCmsTab] = useState('dashboard'); // 'dashboard' | 'news' | 'appointments' | 'enquiries' | 'doctors' | 'settings'

  // Theme State ('light' | 'dark')
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
    } catch (e) {
      return 'light';
    }
  });

  // Modal & Toast States
  const [activeModal, setActiveModal] = useState({ type: null, payload: null });
  const [toasts, setToasts] = useState([]);

  // Data Stores initialized with localStorage fallback to seed data
  const [news, setNews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      return saved ? JSON.parse(saved) : INITIAL_NEWS;
    } catch (e) {
      return INITIAL_NEWS;
    }
  });

  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch (e) {
      return INITIAL_APPOINTMENTS;
    }
  });

  const [enquiries, setEnquiries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
    } catch (e) {
      return INITIAL_ENQUIRIES;
    }
  });

  const [doctors, setDoctors] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DOCTORS);
      return saved ? JSON.parse(saved) : INITIAL_DOCTORS;
    } catch (e) {
      return INITIAL_DOCTORS;
    }
  });

  // Apply data-theme attribute on document root whenever themeMode changes
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', themeMode);
      if (themeMode === 'dark') {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
      localStorage.setItem(STORAGE_KEYS.THEME, themeMode);
    } catch (e) {
      console.error("Failed to apply theme", e);
    }
  }, [themeMode]);

  // Sync Data to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
    } catch (e) {
      console.error("Failed to save news to localStorage", e);
    }
  }, [news]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
    } catch (e) {
      console.error("Failed to save appointments to localStorage", e);
    }
  }, [appointments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
    } catch (e) {
      console.error("Failed to save enquiries to localStorage", e);
    }
  }, [enquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DOCTORS, JSON.stringify(doctors));
    } catch (e) {
      console.error("Failed to save doctors to localStorage", e);
    }
  }, [doctors]);

  // Toast Helpers
  const showToast = (title, message, type = 'success') => {
    const id = 'toast_' + Date.now() + Math.random().toString(36).substr(2, 4);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Modal Helpers
  const openModal = (type, payload = null) => {
    setActiveModal({ type, payload });
  };

  const closeModal = () => {
    setActiveModal({ type: null, payload: null });
  };

  const toggleTheme = () => {
    const next = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(next);
    showToast('Theme Changed', `Switched to ${next.toUpperCase()} visual mode.`, 'info');
  };

  // This is a front-end demo credential. Replace it with server-side authentication
  // before production deployment; client-side credentials are never secure.
  const loginAdmin = (accessKey) => {
    if (accessKey !== 'admin123') {
      showToast('Access Denied', 'The admin access key is not valid.', 'error');
      return false;
    }

    try {
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'active');
    } catch (_error) {
      // Continue in the current tab if browser storage is unavailable.
    }
    setViewMode('cms');
    setCmsTab('dashboard');
    showToast('Admin Authenticated', 'Welcome to the Starlight Hospital CMS portal.', 'success');
    return true;
  };

  const logoutAdmin = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    } catch (_error) {
      // The visible state still returns the user to the public website.
    }
    setViewMode('public');
    showToast('Signed Out', 'You have returned to the live hospital website.', 'info');
  };

  // --- CRUD ACTIONS FOR NEWS ---
  const addNews = (newsData) => {
    const newArticle = {
      id: 'news-' + Date.now(),
      slug: newsData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: new Date().toISOString().split('T')[0],
      readTime: '4 min read',
      status: newsData.status || 'Published',
      coverImage: newsData.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      ...newsData
    };
    setNews((prev) => [newArticle, ...prev]);
    showToast('Article Created', `"${newArticle.title}" was published to CMS.`, 'success');
    return newArticle;
  };

  const updateNews = (id, updatedData) => {
    setNews((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedData } : item))
    );
    showToast('Article Updated', 'Changes saved successfully.', 'success');
  };

  const deleteNews = (id) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
    showToast('Article Deleted', 'News article was removed.', 'info');
  };

  // --- CRUD ACTIONS FOR APPOINTMENTS ---
  const addAppointment = (formData) => {
    const newApt = {
      id: 'apt-' + Math.floor(1000 + Math.random() * 9000),
      ...formData,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    setAppointments((prev) => [newApt, ...prev]);
    showToast('Appointment Booked!', `Reference ID: ${newApt.id}. We will confirm shortly.`, 'success');
    return newApt;
  };

  const updateAppointmentStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
    showToast('Status Updated', `Appointment ${id} status set to ${newStatus}.`, 'info');
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
    showToast('Appointment Deleted', `Record ${id} removed.`, 'info');
  };

  const exportAppointmentsCSV = () => {
    const headers = ["Ref ID", "Patient Name", "Phone", "Email", "Department", "Doctor", "Preferred Date", "Preferred Time", "Status", "Reason"];
    const rows = appointments.map((a) => [
      a.id,
      `"${a.patientName}"`,
      `"${a.patientPhone || ''}"`,
      `"${a.patientEmail || ''}"`,
      `"${a.department}"`,
      `"${a.doctor}"`,
      a.preferredDate,
      `"${a.preferredTime}"`,
      a.status,
      `"${(a.reason || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `starlight_appointments_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('CSV Exported', 'Appointments list downloaded as CSV.', 'success');
  };

  // --- CRUD ACTIONS FOR ENQUIRIES ---
  const addEnquiry = (formData) => {
    const newEnq = {
      id: 'enq-' + Math.floor(1000 + Math.random() * 9000),
      ...formData,
      status: 'Unread',
      createdAt: new Date().toISOString()
    };
    setEnquiries((prev) => [newEnq, ...prev]);
    showToast('Message Sent', 'Thank you! Our administrative team will respond promptly.', 'success');
    return newEnq;
  };

  const updateEnquiryStatus = (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((enq) => (enq.id === id ? { ...enq, status: newStatus } : enq))
    );
    showToast('Enquiry Updated', `Marked message as ${newStatus}.`, 'info');
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((enq) => enq.id !== id));
    showToast('Enquiry Deleted', `Message ${id} removed.`, 'info');
  };

  // --- CRUD ACTIONS FOR DOCTORS ---
  const addDoctor = (doctorData) => {
    const newDoc = {
      id: 'doc-' + Date.now(),
      image: doctorData.image || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&q=80',
      ...doctorData
    };
    setDoctors((prev) => [...prev, newDoc]);
    showToast('Doctor Added', `${newDoc.name} added to hospital roster.`, 'success');
  };

  const updateDoctor = (id, updatedData) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, ...updatedData } : doc))
    );
    showToast('Doctor Profile Updated', 'Doctor details saved.', 'success');
  };

  const deleteDoctor = (id) => {
    setDoctors((prev) => prev.filter((doc) => doc.id !== id));
    showToast('Doctor Removed', 'Doctor removed from active roster.', 'info');
  };

  // Reset Storage to Seed Data
  const resetToSeedData = () => {
    setNews(INITIAL_NEWS);
    setAppointments(INITIAL_APPOINTMENTS);
    setEnquiries(INITIAL_ENQUIRIES);
    setDoctors(INITIAL_DOCTORS);
    localStorage.removeItem(STORAGE_KEYS.NEWS);
    localStorage.removeItem(STORAGE_KEYS.APPOINTMENTS);
    localStorage.removeItem(STORAGE_KEYS.ENQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.DOCTORS);
    showToast('System Reset', 'All CMS data restored to original seed demo values.', 'info');
  };

  // Print Appointment Confirmation Voucher
  const printAppointmentVoucher = (apt) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to print the appointment voucher.");
      return;
    }
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Starlight Hospital - Appointment Slip (${apt.id})</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #0f172a; max-width: 650px; margin: 0 auto; border: 2px solid #0d9488; border-radius: 12px; }
            .header { text-align: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px; }
            .title { font-size: 24px; font-weight: 800; color: #0b1528; }
            .motto { color: #0284c7; font-weight: 700; font-size: 14px; letter-spacing: 2px; margin-top: 4px; }
            .ref-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 15px; text-align: center; margin: 20px 0; }
            .ref-id { font-size: 28px; font-weight: 800; color: #047857; }
            .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f1f5f9; }
            .label { font-weight: 700; color: #64748b; }
            .value { font-weight: 600; color: #0f172a; }
            .footer { margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">STARLIGHT HOSPITAL</div>
            <div class="motto">DEO MEDICE</div>
            <div style="font-size: 13px; color: #64748b; margin-top: 6px;">Block A Plot 6 & 19, Jajo Phase 2, Crystal Estate, Imowo-Nla Road, Jajo, Ikorodu, Lagos</div>
            <div style="font-size: 13px; color: #0d9488; font-weight: 600;">Hotlines: 08053587646 | 07079333090</div>
          </div>
          <div class="ref-box">
            <div style="font-size: 12px; color: #047857; font-weight: 700;">APPOINTMENT REFERENCE ID</div>
            <div class="ref-id">${apt.id}</div>
            <div style="font-size: 12px; color: #059669;">Status: ${apt.status}</div>
          </div>
          <div class="row"><span class="label">Patient Name:</span><span class="value">${apt.patientName}</span></div>
          <div class="row"><span class="label">Contact Phone:</span><span class="value">${apt.patientPhone || 'N/A'}</span></div>
          <div class="row"><span class="label">Medical Department:</span><span class="value">${apt.department}</span></div>
          <div class="row"><span class="label">Assigned Doctor:</span><span class="value">${apt.doctor}</span></div>
          <div class="row"><span class="label">Consultation Date:</span><span class="value">${apt.preferredDate}</span></div>
          <div class="row"><span class="label">Time Slot:</span><span class="value">${apt.preferredTime}</span></div>
          ${apt.reason ? `<div class="row"><span class="label">Reason / Notes:</span><span class="value">${apt.reason}</span></div>` : ''}
          <div class="footer">
            Please present this confirmation voucher at the Starlight Hospital Triage Reception Desk upon arrival.<br/>
            DEO MEDICE — We Treat, God Heals.
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
  };

  const value = {
    viewMode,
    setViewMode,
    cmsTab,
    setCmsTab,
    themeMode,
    toggleTheme,
    loginAdmin,
    logoutAdmin,
    activeModal,
    openModal,
    closeModal,
    toasts,
    showToast,
    removeToast,
    hospitalInfo: INITIAL_HOSPITAL_INFO,
    services: INITIAL_SERVICES,
    doctors,
    news,
    appointments,
    enquiries,
    addNews,
    updateNews,
    deleteNews,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment,
    exportAppointmentsCSV,
    addEnquiry,
    updateEnquiryStatus,
    deleteEnquiry,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    resetToSeedData,
    printAppointmentVoucher
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
