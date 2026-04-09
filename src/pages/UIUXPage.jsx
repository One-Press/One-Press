import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLayout, FiSmartphone, FiMousePointer, FiZap, FiArrowRight } from "react-icons/fi";
import gsap from 'gsap';

const UIUXPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Animation for reveal elements
    gsap.fromTo(".uiux-reveal", 
      { opacity: 0, scale: 0.95, y: 20 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.15, ease: "power4.out" }
    );
  }, []);

  const capabilities = [
    {
      title: "User Experience (UX)",
      desc: "Wireframing and user-flow mapping designed to eliminate friction and maximize conversion rates.",
      icon: <FiMousePointer />
    },
    {
      title: "User Interface (UI)",
      desc: "Pixel-perfect, high-fidelity designs that align with your brand's premium identity.",
      icon: <FiLayout />
    },
    {
      title: "Responsive Design",
      desc: "Flawless performance across all devices, from ultra-wide monitors to mobile screens.",
      icon: <FiSmartphone />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="mb-24">
          <span className="uiux-reveal text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
            Service / UI-UX Design
          </span>
          <h1 className="uiux-reveal text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
            Digital <br /> 
            <span className="text-white/20">Intuition.</span>
          </h1>
          <p className="uiux-reveal text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            We bridge the gap between complex functionality and effortless design. Our UI/UX strategy focuses on creating interfaces that users don't just use—they enjoy.
          </p>
        </header>

        {/* --- Featured Image Showcase --- */}
        <div className="uiux-reveal relative w-full h-[60vh] rounded-[3rem] overflow-hidden mb-24 group border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" 
            alt="UI Design Interface"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10">
            <div className="flex items-center gap-2 bg-[#7CFC00] text-black px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              <FiZap /> High Fidelity Standards
            </div>
          </div>
        </div>

        {/* --- Capability Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {capabilities.map((item, i) => (
            <div key={i} className="uiux-reveal bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/30 transition-all duration-500 group">
              <div className="text-4xl text-[#7CFC00] mb-8 group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Design Philosophy Section --- */}
        <section className="mb-32 grid md:grid-cols-2 gap-20 items-center">
          <div className="uiux-reveal">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              Function <br /> <span className="text-[#7CFC00]">Follows Form.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our design laboratory focuses on psychological triggers that drive user engagement. We analyze heatmaps, user behavior, and industry trends to build layouts that convert.
            </p>
            <ul className="space-y-4">
              {["User Journey Mapping", "Interactive Prototyping", "A/B Testing Layouts", "Accessibility (WCAG) Compliance"].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-[#7CFC00] rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="uiux-reveal bg-[#111] aspect-square rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden">
             <div className="absolute w-full h-full border-2 border-[#7CFC00]/10 rounded-full animate-pulse" />
             <FiLayout className="text-[12rem] text-white/5" />
             <div className="absolute text-center">
                <p className="text-[#7CFC00] font-mono text-5xl font-black italic">99%</p>
                <p className="uppercase text-[10px] tracking-[0.3em] text-gray-500">User Satisfaction</p>
             </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <div className="uiux-reveal bg-[#151515] rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative">
          <div className="absolute inset-0 bg-[#7CFC00]/5 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">
            Let's Design <br /> Your <span className="text-[#7CFC00]">Future.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-4 mx-auto bg-white text-black px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-[#7CFC00] transition-all"
          >
            Start Designing 
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIUXPage;