import React from 'react';
// We use the exact folder name from your screenshot
import TopHeroSection from '../Services_Section/TopHeroSection';
import StepByStepServices from '../Services_Section/StepByStepServices';
import Footer from "../components/layout/Footer";

const ServicesPage = () => {
  return (
    <div className="pt-20 bg-white">
      {/* SECTION 1: The Visual Hero */}
      <TopHeroSection />

      {/* SECTION 2: The 4-Step Process (Branding, UI/UX, Dev, Marketing) */}
      <StepByStepServices />

      {/* FOOTER TIP: You can add your Footer component here later */}
      <Footer />
    </div>
  );
};

export default ServicesPage;