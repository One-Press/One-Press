import React, { useState } from "react";

const projects = [
  { id: 1, name: "LuxeStay Real Estate", type: "Web Development", description: "Custom property management website with integrated 3D virtual tours. Increased lead conversion by 35%.", color: "bg-[#7CFC00]" },
  { id: 2, name: "CryptoVault Wallet", type: "UI/UX Design", description: "Redesigned a high-security FinTech wallet to simplify asset management. Reduced transaction abandonment by 50%.", color: "bg-blue-500" },
  { id: 3, name: "Aura Skincare Global", type: "E-Commerce", description: "Luxury Shopify Plus store with advanced SEO & Meta Ads, achieving 4.5x ROAS globally.", color: "bg-pink-500" },
  { id: 4, name: "Zenith Tech Identity", type: "Branding", description: "Complete branding for AI startup: logo, pitch deck, and visual language. Helped secure $12M Series A.", color: "bg-amber-400" },
  { id: 5, name: "EcoShop Online", type: "Digital Marketing", description: "Full-funnel eCommerce marketing campaign for EcoShop. Increased online sales by 60% in 3 months.", color: "bg-purple-500" },
  { id: 6, name: "FitLife App", type: "Web Development", description: "Developed a fitness subscription platform with real-time tracking and custom dashboards.", color: "bg-red-500" },
  { id: 7, name: "TravelEase", type: "UI/UX Design", description: "Redesigned travel booking app with improved flows, reducing drop-offs by 40%.", color: "bg-teal-400" },
  { id: 8, name: "BrandNova", type: "Branding", description: "End-to-end branding for a startup: logo, brand guidelines, and pitch deck, boosting investor interest.", color: "bg-orange-400" },
];

export default function UniverseProjects() {
  const [active, setActive] = useState(null);

  const stars = Array.from({ length: 120 }, () => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 2 + "px",
    delay: Math.random() * 3 + "s",
  }));

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white font-sans">
      
      {/* 🌌 Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2000&auto=format&fit=crop"
          alt="Deep Space Galaxy"
          className="w-full h-full object-cover object-center scale-110 opacity-60"
          style={{ animation: "galaxy-float 20s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_90%)]" />
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="absolute bg-white rounded-full opacity-50 animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* 🌞 Sun Core */}
      <div className="absolute z-10 flex items-center justify-center pointer-events-none">
        <div className="relative w-44 h-44 rounded-full bg-[#7CFC00] flex items-center justify-center
                        shadow-[0_0_60px_25px_rgba(124,252,0,0.5)] animate-pulse">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black tracking-tighter text-center">
            ONE <span className="text-white">PRESS</span>
          </h1>
        </div>
        <div className="absolute w-60 h-60 rounded-full bg-[#7CFC00]/30 animate-ping"></div>
      </div>

      {/* 🪐 Orbiting Planets */}{projects.map((project, index) => {
  const orbitSizes = [380, 480, 600, 720, 840, 960, 1080, 1200]; // 👈 increased first orbit
  const durations = [25, 28, 32, 36, 40, 45, 50, 55];

  return (
    <div
      key={project.id}
      onClick={() => setActive(project)}
      className="absolute rounded-full border border-white/10 animate-spin flex items-start justify-center cursor-pointer z-10 group"
      style={{
        width: orbitSizes[index],
        height: orbitSizes[index],
        animationDuration: `${durations[index]}s`,
      }}
    >
      <div
        className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${project.color} flex items-center justify-center text-[10px] md:text-sm font-bold text-black uppercase tracking-tighter text-center px-2 shadow-2xl transition-all duration-500 hover:scale-150 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]`}
        style={{
          animation: `reverse-spin ${durations[index]}s linear infinite`,
          transform: "translateY(-20px)", // 👈 pushes planet away from sun
        }}
      >
        {project.type}
      </div>
    </div>
  );
})}

      {/* 🌌 Project Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] border-2 border-dashed border-gray-800 p-12 rounded-[2.5rem] w-full max-w-lg text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <span className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${active.color} text-black`}>
              {active.type}
            </span>
            <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase italic">
              {active.name}
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              {active.description}
            </p>

            <button
              onClick={() => setActive(null)}
              className="w-full py-4 bg-[#7CFC00] text-black font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              Back to Galaxy
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes galaxy-float {
          0%, 100% { transform: scale(1.1) translate(0px, 0px); }
          50% { transform: scale(1.15) translate(-10px, -5px); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 3s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}