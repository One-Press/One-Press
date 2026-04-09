import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiCreditCard, FiPackage, FiActivity, FiArrowRight, FiShield } from "react-icons/fi";
import gsap from 'gsap';

const EcommercePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // E-commerce reveal animation
    gsap.fromTo(".eco-reveal", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  const features = [
    {
      title: "Storefront Design",
      desc: "Custom-built shopping experiences that combine aesthetic beauty with high-speed product discovery.",
      icon: <FiShoppingCart />
    },
    {
      title: "Payment Systems",
      desc: "Secure, multi-currency payment gateway integrations ensuring global sales and customer trust.",
      icon: <FiCreditCard />
    },
    {
      title: "Inventory Control",
      desc: "Automated stock management and fulfillment workflows to streamline your entire operation.",
      icon: <FiPackage />
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 selection:bg-[#7CFC00] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Hero Section --- */}
        <header className="mb-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="eco-reveal text-[#7CFC00] font-mono text-sm uppercase tracking-[0.5em] mb-4 block">
              Service / E-commerce
            </span>
            <h1 className="eco-reveal text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              Sell <br /> 
              <span className="text-white/20">Anything.</span>
            </h1>
            <p className="eco-reveal text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
              We turn visitors into buyers. Our e-commerce solutions are engineered to reduce cart abandonment and maximize the lifetime value of every customer.
            </p>
          </div>
          <div className="eco-reveal flex-1 w-full bg-[#111] p-8 rounded-[3rem] border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8">
                <FiActivity className="text-[#7CFC00] animate-pulse" />
             </div>
             <div className="space-y-4">
                <div className="h-2 w-24 bg-[#7CFC00] rounded-full" />
                <div className="h-32 w-full bg-white/5 rounded-2xl" />
                <div className="grid grid-cols-3 gap-2">
                   <div className="h-10 bg-white/5 rounded-lg" />
                   <div className="h-10 bg-white/5 rounded-lg" />
                   <div className="h-10 bg-[#7CFC00] rounded-lg" />
                </div>
             </div>
             <p className="mt-8 text-[10px] font-mono text-gray-600 uppercase tracking-widest">Optimized Checkout Flow v4.1</p>
          </div>
        </header>

        {/* --- Image Grid Showcase --- */}
        <div className="eco-reveal grid md:grid-cols-2 gap-6 mb-32">
          <div className="h-[50vh] rounded-[3rem] overflow-hidden border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" 
              alt="Retail Experience"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="h-[50vh] rounded-[3rem] overflow-hidden border border-white/5 bg-[#111] flex items-center justify-center p-12">
             <div className="text-center">
                <FiShield className="text-8xl text-[#7CFC00] mb-6 mx-auto opacity-20" />
                <h3 className="text-2xl font-black uppercase italic mb-4">Secured Transactions</h3>
                <p className="text-gray-500 text-sm max-w-xs mx-auto">SSL Encryption and PCI compliance are standard in every store we deploy.</p>
             </div>
          </div>
        </div>

        {/* --- Core Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((f, i) => (
            <div key={i} className="eco-reveal group bg-[#111] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#7CFC00]/30 transition-all">
              <div className="text-4xl text-[#7CFC00] mb-8 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- Tech Platforms --- */}
        <section className="mb-32 text-center">
           <h2 className="text-3xl font-black uppercase italic mb-12 opacity-20 tracking-[0.2em]">Partnering with the Best</h2>
           <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
              {["Shopify", "WooCommerce", "Stripe", "Magento", "BigCommerce"].map((brand, i) => (
                <span key={i} className="text-xl font-black uppercase italic">{brand}</span>
              ))}
           </div>
        </section>

        {/* --- Final CTA Section --- */}
        <div className="eco-reveal bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center border border-white/10 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#7CFC00] rounded-full blur-[120px] opacity-10" />
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-none">
            Your Brand <br /> <span className="text-[#7CFC00]">Globally.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-4 mx-auto bg-[#7CFC00] text-black px-12 py-6 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-2xl"
          >
            Open Your Store 
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcommercePage;