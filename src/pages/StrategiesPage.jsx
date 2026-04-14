import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTarget, FiSearch, FiCode, FiBarChart, FiArrowRight } from "react-icons/fi";

const STRATEGIES = [
  {
    step: "01",
    title: "Discovery & Analysis",
    desc: "We dive deep into your market, competitors, and audience behavior to find untapped opportunities for growth.",
    icon: <FiSearch />,
    color: "#7CFC00"
  },
  {
    step: "02",
    title: "Strategic Blueprint",
    desc: "We map out a custom digital architecture designed to convert visitors into loyal brand advocates.",
    icon: <FiTarget />,
    color: "#7CFC00"
  },
  {
    step: "03",
    title: "Execution & Build",
    desc: "Our engineering team brings the vision to life using high-performance code and cutting-edge design standards.",
    icon: <FiCode />,
    color: "#7CFC00"
  },
  {
    step: "04",
    title: "Optimization & Scale",
    desc: "Strategy doesn't end at launch. We use real-time data to refine performance and scale your brand globally.",
    icon: <FiBarChart />,
    color: "#7CFC00"
  }
];

const StrategiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-24 max-w-3xl">
          <span className="text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
            The One Press Engine
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">
            Our <span className="text-white/20">Growth</span> <br /> 
            Strategies.
          </h1>
          <p className="text-white-500 text-lg md:text-xl leading-relaxed">
            We don't just build websites; we engineer digital ecosystems. Our data-backed approach ensures every pixel and every line of code serves a business goal.
          </p>
        </header>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {STRATEGIES.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#7CFC00]/10 blur-[80px] group-hover:bg-[#7CFC00]/20 transition-all" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-4xl text-[#7CFC00] bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black text-white/5 font-mono group-hover:text-[#7CFC00]/10 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white-500 leading-relaxed group-hover:text-white-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Section */}
        <div className="bg-[#151515] rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">
              Want a custom <br /> 
              <span className="text-[#7CFC00]">Roadmap?</span>
            </h2>
            <button 
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-3 mx-auto bg-white text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-[#7CFC00] transition-all"
            >
              Start Your Project 
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategiesPage;