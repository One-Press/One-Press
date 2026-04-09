import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { FiArrowRight, FiLayers, FiLayout, FiCode, FiTrendingUp, FiShoppingCart } from "react-icons/fi";

const AppleProductServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Reveal animation for cards and headers
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power4.out" }
    );
  }, []);

  const services = [
    {
      id: "branding",
      title: "Branding & Identity",
      path: "/branding",
      icon: <FiLayers />,
      desc: "Creating unique brand identities that connect with your audience and reflect core values."
    },
    {
      id: "uiux",
      title: "Web Design & UI/UX",
      path: "/uiux",
      icon: <FiLayout />,
      desc: "Pixel-perfect interfaces designed with a focus on user journey and conversion optimization."
    },
    {
      id: "dev",
      title: "Web Development",
      path: "/dev",
      icon: <FiCode />,
      desc: "High-performance websites engineered for speed, security, and long-term scalability."
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      path: "/marketing",
      icon: <FiTrendingUp />,
      desc: "Data-driven growth strategies that increase brand awareness and drive sales."
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      path: "/ecommerce",
      icon: <FiShoppingCart />,
      desc: "Custom storefronts and payment integrations designed to maximize your online revenue."
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <header className="mb-24 text-center">
          <span className="service-card text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-6 block">
            Our Expertise
          </span>
          <h1 className="service-card text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-8">
            Digital <br /> 
            <span className="text-white/20">Solutions.</span>
          </h1>
          <p className="service-card text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between imagination and execution. Explore our masterfully crafted services designed to scale your brand.
          </p>
        </header>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => navigate(service.path)}
              className="service-card group bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl text-[#7CFC00] mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#7CFC00] opacity-60 group-hover:opacity-100 transition-opacity">
                Explore Service <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}

          {/* --- Special CTA Card --- */}
          <div 
            onClick={() => navigate('/contact')}
            className="service-card bg-[#7CFC00] p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-black group cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">
              Need a <br /> Custom Plan?
            </h3>
            <p className="text-black/70 font-bold text-sm mb-8 uppercase tracking-wide">
              Let's build something unique.
            </p>
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl group-hover:rotate-45 transition-transform duration-500">
              <FiArrowRight />
            </div>
          </div>
        </div>

        {/* --- Strategy Section Link --- */}
        <section className="service-card border-t border-white/10 pt-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">
              The <span className="text-[#7CFC00]">Strategy</span> Behind the Success.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We don't just provide services; we provide results. Every project is backed by a rigorous strategic process designed to ensure market dominance.
            </p>
          </div>
          <button 
            onClick={() => navigate('/strategies')}
            className="px-12 py-6 rounded-full border border-white/20 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all shrink-0"
          >
            View Our Strategies
          </button>
        </section>

      </div>
    </div>
  );
};

export default AppleProductServices;