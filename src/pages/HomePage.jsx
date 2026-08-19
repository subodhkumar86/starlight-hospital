import React from 'react';
import { Hero } from '../components/public/Hero';
import { AboutSection } from '../components/public/AboutSection';
import { ServicesSection } from '../components/public/ServicesSection';
import { DoctorsSection } from '../components/public/DoctorsSection';
import { AppointmentSection } from '../components/public/AppointmentSection';
import { CostCalculator } from '../components/public/CostCalculator';
import { HealthTools } from '../components/public/HealthTools';
import { GallerySection } from '../components/public/GallerySection';
import { FaqSection } from '../components/public/FaqSection';
import { EnquirySection } from '../components/public/EnquirySection';
import { NewsSection } from '../components/public/NewsSection';
import { TestimonialsSection } from '../components/public/TestimonialsSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentSection />
      <CostCalculator />
      <HealthTools />
      <GallerySection />
      <NewsSection />
      <TestimonialsSection />
      <FaqSection />
      <EnquirySection />
    </>
  );
};
