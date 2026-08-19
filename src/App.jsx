import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Modal } from './components/common/Modal';
import { ToastContainer } from './components/common/Toast';
import { CommandPaletteModal } from './components/common/CommandPaletteModal';
import { EmergencyFloatingButton } from './components/public/EmergencyFloatingButton';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { NewsPage } from './pages/NewsPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { HealthInformationPage } from './pages/HealthInformationPage';
import { HealthArticlePage } from './pages/HealthArticlePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { EmergencyPage } from './pages/EmergencyPage';
import { InsuranceHmoPage } from './pages/InsuranceHmoPage';
import { PatientPortalPage } from './pages/PatientPortalPage';
import { PatientTestimonialsPage } from './pages/PatientTestimonialsPage';
import { CareersPage } from './pages/CareersPage';
import { FaqPage } from './pages/FaqPage';

// CMS Components
import { CmsHeader } from './components/cms/CmsHeader';
import { CmsSidebar } from './components/cms/CmsSidebar';
import { CmsDashboard } from './components/cms/CmsDashboard';
import { CmsNews } from './components/cms/CmsNews';
import { CmsAppointments } from './components/cms/CmsAppointments';
import { CmsEnquiries } from './components/cms/CmsEnquiries';
import { CmsDoctors } from './components/cms/CmsDoctors';
import { CmsSettings } from './components/cms/CmsSettings';

const MainLayout = () => {
  const { viewMode, cmsTab } = useApp();

  if (viewMode === 'cms') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <CmsHeader />
        <div className="cms-shell" style={{ display: 'flex', flexGrow: 1, minHeight: 'calc(100vh - 68px)' }}>
          <CmsSidebar />
          <main style={{ flexGrow: 1, overflowY: 'auto' }}>
            {cmsTab === 'dashboard' && <CmsDashboard />}
            {cmsTab === 'news' && <CmsNews />}
            {cmsTab === 'appointments' && <CmsAppointments />}
            {cmsTab === 'enquiries' && <CmsEnquiries />}
            {cmsTab === 'doctors' && <CmsDoctors />}
            {cmsTab === 'settings' && <CmsSettings />}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/health-information" element={<HealthInformationPage />} />
          <Route path="/health-information/:slug" element={<HealthArticlePage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms-disclaimer" element={<TermsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/hmo-insurance" element={<InsuranceHmoPage />} />
          <Route path="/patient-portal" element={<PatientPortalPage />} />
          <Route path="/testimonials" element={<PatientTestimonialsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      <Footer />
      <EmergencyFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout />
        <Modal />
        <CommandPaletteModal />
        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}
