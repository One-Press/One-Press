import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Career from "./pages/Career";
import StrategiesPage from "./pages/StrategiesPage";
import BrandingPage from "./pages/BrandingPage";
import UIUXPage from "./pages/UIUXPage";
import WebDevPage from "./pages/WebDevPage";
import MarketingPage from "./pages/MarketingPage";
import EcommercePage from "./pages/EcommercePage";

/**
 * Scroll to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Meta Pixel route tracking
 */
function PixelTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <PixelTracker />

      <Navbar />
      <WhatsAppButton />

      <main
        key={location.pathname}
        className="overflow-hidden min-h-screen bg-[#0a0a0a]"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-study" element={<CaseStudies />} />
          <Route path="/career" element={<Career />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/branding-identy-services" element={<BrandingPage />} />
          <Route path="/web-design-ui-ux-services" element={<UIUXPage />} />
          <Route path="/web-development-services" element={<WebDevPage />} />
          <Route
            path="/seo-digital-marketing-services"
            element={<MarketingPage />}
          />
          <Route
            path="/ecommerce-website-design-services"
            element={<EcommercePage />}
          />
        </Routes>
      </main>

      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;