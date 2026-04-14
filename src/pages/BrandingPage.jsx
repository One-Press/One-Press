import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiPenTool, FiLayers, FiTarget, FiArrowRight } from "react-icons/fi";
import gsap from 'gsap';
import Footer from "../components/layout/Footer";


const BrandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth entry animation for the hero text
    gsap.fromTo(".brand-reveal", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  const features = [
    {
      title: "Visual Identity",
      desc: "Logos, color palettes, and typography that command attention and stay memorable.",
      icon: <FiPenTool />
    },
    {
      title: "Brand Strategy",
      desc: "Defining your voice, mission, and positioning to outperform competitors.",
      icon: <FiTarget />
    },
    {
      title: "Brand Guidelines",
      desc: "A complete blueprint ensuring your brand looks perfect across every platform.",
      icon: <FiLayers />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="mb-24">
          <span className="brand-reveal text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
            Service / Branding
          </span>
          <h1 className="brand-reveal text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
            Identity <br /> 
            <span className="text-white/20">That Leads.</span>
          </h1>
          <p className="brand-reveal text-white-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            We don't just design logos; we build visual legacies. Our branding process connects your business values with human emotions.
          </p>
        </header>

        {/* --- Image Showcase --- */}
        <div className="brand-reveal w-full h-[50vh] md:h-[70vh] rounded-[3rem] overflow-hidden mb-24 border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" 
            alt="Branding Showcase"
            className="w-full h-full object-cover whitescale hover:whitescale-0 transition-all duration-1000"
          />
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <div key={i} className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/30 transition-all group">
              <div className="text-3xl text-[#7CFC00] mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic">{f.title}</h3>
              <p className="text-white-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* --- The Process --- */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16">
            The <span className="text-[#7CFC00]">Blueprint</span>
          </h2>
          <div className="space-y-4">
            {["Discovery & Moodboarding", "Conceptual Design", "Refinement & Feedback", "Final Asset Delivery"].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 p-8 bg-[#111] rounded-3xl border border-white/5 hover:bg-[#151515] transition-colors">
                <span className="text-[#7CFC00] font-mono text-xl">0{idx + 1}</span>
                <span className="text-xl md:text-2xl font-bold uppercase tracking-tight">{step}</span>
                <FiCheckCircle className="ml-auto text-white-700 group-hover:text-[#7CFC00]" />
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA --- */}
        <div className="bg-[#7CFC00] rounded-[3rem] p-12 md:p-20 text-center text-black relative overflow-hidden">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Ready for a <br /> Brand Evolution?
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-3 mx-auto bg-black text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl"
          >
            Start Your Identity Project 
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandingPage;