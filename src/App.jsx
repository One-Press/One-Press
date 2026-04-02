import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; // Ensure this path is correct
import WhatsAppButton from "./components/layout/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/Blog"; // Added the Blog page we created
import CaseStudies from "./pages/CaseStudies"; // New
import Career from "./pages/Career";
import StrategiesPage from "./pages/StrategiesPage";

/**
 * ScrollToTop Component
 * Forces the window to the top whenever the URL path changes.
 * Without this, if you click a link in the footer, the next page 
 * will load already scrolled to the bottom.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Utility to reset scroll position on navigation */}
      <ScrollToTop />
      
      {/* Fixed Layout Elements */}
      <Navbar />    
      <WhatsAppButton />

      {/* The 'key' attribute here ensures React performs a clean 
          re-mount of the page content on every route change, 
          which is great for GSAP and Framer Motion animations.
      */}
      <main key={location.pathname} className="overflow-hidden min-h-screen bg-[#0a0a0a]">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-study" element={<CaseStudies />} /> {/* New Route */}
          <Route path="/career" element={<Career />} />
          <Route path="/strategies" element={<StrategiesPage />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of every page */}
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