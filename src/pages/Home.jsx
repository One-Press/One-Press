import Marquee from "../sections/home/Marquee";
import MidSection from "../sections/home/MidSection";
import Services from "../sections/home/Services"; 
import StatsSection from "../sections/home/StatsSection";
import Workflow from "../sections/home/Workflow";
import Projects from "../sections/home/Projects";
import BrandLogos from "../sections/home/BrandLogos";
import Testimonials from "../sections/home/Testimonials";
import ContactCTA from "../sections/home/ContactCTA";
import Footer from "../components/layout/Footer";
import Hero from "../components/Hero/Hero";
    import { useEffect } from "react";
    import { useLocation } from "react-router-dom";
    import { scroller } from "react-scroll";

    function Home() {
  // MOVE HOOKS INSIDE HERE
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  }, [location]);

  return (
    <>
      {/* <Hero /> */}
      <Hero />
      <Marquee />
      <MidSection />
      <Services />
      <StatsSection />
      <Workflow />
      <Projects />
      <BrandLogos />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </>
  );
}

export default Home;