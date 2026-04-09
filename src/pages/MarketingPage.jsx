import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrendingUp, FiBarChart2, FiSearch, FiMail, FiArrowRight, FiPieChart } from "react-icons/fi";
import gsap from 'gsap';

const MarketingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Marketing reveal animation
    gsap.fromTo(".mkt-reveal", 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power4.out" }
    );
  }, []);

  const strategies = [
    {
      title: "Search Engine Optimization",
      desc: "Dominating search rankings with high-intent keywords and technical SEO that keeps you ahead of the curve.",
      icon: <FiSearch />
    },
    {
      title: "Paid Acquisition (PPC)",
      desc: "Hyper-targeted ad campaigns on Google and Social Media designed for maximum ROI and minimum waste.",
      icon: <FiTrendingUp />
    },
    {
      title: "Performance Marketing",
      desc: "Turning data into decisions. We track every click, conversion, and dollar to ensure your budget works harder.",
      icon: <FiBarChart2 />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="mb-24">
          <span className="mkt-reveal text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
            Service / Growth Marketing
          </span>
          <h1 className="mkt-reveal text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
            Growth <br /> 
            <span className="text-white/20">Accelerated.</span>
          </h1>
          <p className="mkt-reveal text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            Visibility is the new currency. We deploy aggressive, data-backed marketing strategies that turn passive scrollers into loyal customers and brand advocates.
          </p>
        </header>

        {/* --- Marketing Impact Image --- */}
        <div className="mkt-reveal w-full h-[50vh] md:h-[65vh] rounded-[3rem] overflow-hidden mb-24 relative border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Marketing Data Analytics"
            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4">
             {["+250% Traffic", "4.8x ROI", "Global Reach", "Precision Targeting"].map((stat, i) => (
               <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest italic">
                  {stat}
               </div>
             ))}
          </div>
        </div>

        {/* --- Strategy Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {strategies.map((s, i) => (
            <div key={i} className="mkt-reveal group bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:bg-[#181818] transition-all duration-500">
              <div className="w-16 h-16 bg-[#7CFC00]/10 rounded-2xl flex items-center justify-center text-3xl text-[#7CFC00] mb-8 group-hover:bg-[#7CFC00] group-hover:text-black transition-all">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Data Visualization Section --- */}
        <section className="mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="mkt-reveal order-2 md:order-1">
             <div className="relative p-8 bg-[#111] rounded-[3rem] border border-white/5 overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                   <h4 className="text-sm font-mono text-gray-500 uppercase">Quarterly Growth Report</h4>
                   <FiPieChart className="text-[#7CFC00]" />
                </div>
                <div className="space-y-8">
                   {[
                     { label: 'Organic Search', val: '88%', w: 'w-[88%]' },
                     { label: 'Conversion Rate', val: '94%', w: 'w-[94%]' },
                     { label: 'Social Engagement', val: '76%', w: 'w-[76%]' }
                   ].map((item, idx) => (
                     <div key={idx}>
                        <div className="flex justify-between mb-2">
                           <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                           <span className="text-[#7CFC00] font-mono">{item.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className={`h-full bg-[#7CFC00] ${item.w} transition-all duration-1000 delay-500`} />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
          <div className="mkt-reveal order-1 md:order-2">
             <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                Data-Driven <br /> <span className="text-[#7CFC00]">Dominance.</span>
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We don't guess; we calculate. Our marketing engine analyzes competitor weaknesses and market gaps to place your brand where it matters most.
             </p>
             <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-zinc-800" />
                   ))}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Trusted by 50+ Global Brands</p>
             </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <div className="mkt-reveal bg-white rounded-[3rem] p-12 md:p-20 text-center text-black relative">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">
            Ready to <br /> Go <span className="text-[#7CFC00]">Viral?</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-4 mx-auto bg-black text-white px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Scale My Business 
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;