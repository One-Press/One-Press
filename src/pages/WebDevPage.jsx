import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCode, FiCpu, FiGlobe, FiShield, FiArrowRight, FiTerminal } from "react-icons/fi";
import gsap from 'gsap';
import Footer from "../components/layout/Footer";


const WebDevPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Technical reveal animation
    gsap.fromTo(".dev-reveal", 
      { opacity: 0, x: -20 }, 
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  const stack = [
    {
      title: "Frontend Engineering",
      desc: "Building high-speed, interactive interfaces using React, Next.js, and modern CSS frameworks for seamless UX.",
      icon: <FiCode />
    },
    {
      title: "Backend & Scalability",
      desc: "Robust server-side logic and database architecture designed to handle thousands of concurrent users.",
      icon: <FiCpu />
    },
    {
      title: "Secure Deployment",
      desc: "Bank-grade security protocols and optimized hosting environments for 99.9% uptime and safety.",
      icon: <FiShield />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="dev-reveal text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
              Service / Engineering
            </span>
            <h1 className="dev-reveal text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              Clean <br /> 
              <span className="text-white/20">Code.</span>
            </h1>
            <p className="dev-reveal text-white-500 text-lg md:text-xl leading-relaxed">
              We don't just build websites; we engineer high-performance digital engines. Every line of code is written for speed, SEO, and long-term scalability.
            </p>
          </div>
          <div className="dev-reveal hidden md:block pb-4">
            <div className="bg-[#111] p-6 rounded-3xl border border-white/5 font-mono text-[#7CFC00] text-xs">
              <p className="opacity-50 text-white mb-2">// System Status</p>
              <p className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7CFC00] rounded-full animate-pulse" /> Optimizing Performance...</p>
              <p className="mt-1">Build: Stable v2.4.0</p>
            </div>
          </div>
        </header>

        {/* --- Full-Width Tech Image --- */}
        <div className="dev-reveal w-full h-[40vh] md:h-[60vh] rounded-[3rem] overflow-hidden mb-24 relative border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
            alt="Development Code"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 -translate-y-1/2 z-20 hidden md:block">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Engineered for <br /><span className="text-[#7CFC00]">Performance.</span></h2>
          </div>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stack.map((item, i) => (
            <div key={i} className="dev-reveal group bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/30 transition-all duration-500">
              <div className="text-4xl text-[#7CFC00] mb-8 group-hover:translate-x-2 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-white-500 leading-relaxed group-hover:text-white-300 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Technical Specs Section --- */}
        <section className="mb-32">
          <div className="bg-[#111] rounded-[3rem] p-10 md:p-16 border border-white/5 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <FiTerminal className="text-[#7CFC00] text-2xl" />
                <h2 className="text-3xl font-black uppercase italic tracking-tight">Core Competencies</h2>
              </div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                {["React / Next.js", "Node.js / Express", "PostgreSQL / Mongo", "AWS / Vercel", "API Architecture", "Performance SEO"].map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white-400 group cursor-default">
                    <span className="w-1.5 h-1.5 bg-[#7CFC00] rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full md:w-auto">
                <div className="bg-black/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                   <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-mono text-white-500">Lighthouse Report</span>
                      <span className="text-[#7CFC00] text-xs font-mono italic">Efficiency: 100%</span>
                   </div>
                   <div className="space-y-6">
                      {[{l: 'Performance', v: 'w-full'}, {l: 'Accessibility', v: 'w-[98%]'}, {l: 'Best Practices', v: 'w-full'}].map((bar, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                             <span>{bar.l}</span>
                             <span className="text-[#7CFC00]">Excellent</span>
                          </div>
                          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className={`${bar.v} h-full bg-[#7CFC00]`} />
                          </div>
                        </div>
                      ))}
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <div className="dev-reveal bg-[#7CFC00] rounded-[3rem] p-12 md:p-20 text-center text-black relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <FiGlobe className="text-[15rem] rotate-12" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none relative z-10">
            Build something <br /> <span className="text-white">Unstoppable.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-4 mx-auto bg-black text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-all relative z-10 shadow-2xl"
          >
            Launch Your Project 
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebDevPage;