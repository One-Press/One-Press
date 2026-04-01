import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "LuxeStay Real Estate",
    type: "Web Development",
    description:
      "Developed a custom property management system with an integrated 3D virtual tour API, increasing lead conversion by 35% for a premium New York realtor.",
    color: "bg-[#7CFC00]", // Matching your Neon Green brand
  },
  {
    id: 2,
    name: "CryptoVault Wallet",
    type: "UI/UX Design",
    description:
      "A high-security FinTech redesign focusing on simplified asset management. We reduced transaction abandonment rates by 50% through intuitive user flows.",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Aura Skincare Global",
    type: "E-Commerce",
    description:
      "Scaled a luxury Shopify Plus store globally. Implemented advanced SEO and Meta Ads strategy resulting in a 4.5x Return on Ad Spend (ROAS).",
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "Zenith Tech Identity",
    type: "Branding",
    description:
      "Engineered a complete visual language for an AI startup, from logo architecture to pitch deck design, helping them secure $12M in Series A funding.",
    color: "bg-amber-400",
  },
];

export default function UniverseProjects() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#0b0f2a,_#02030a)] text-white font-sans">
      
      {/* 🌞 Center (Sun / Agency Core) */}
      <div className="absolute text-center z-10">
        <h1 className="text-4xl font-black tracking-tighter uppercase italic">
          ONE <span className="text-[#7CFC00]">PRESS</span>
        </h1>
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-60 mt-2">
          Dominating the Digital Galaxy
        </p>
      </div>

      {/* 🪐 Orbits (Planets) */}
      {projects.map((project, index) => {
        // Adjusted sizes for better spacing in production
        const sizes = [280, 420, 580, 750]; 
        const duration = [25, 35, 45, 55]; // Varying speeds for organic feel

        return (
          <div
            key={project.id}
            onClick={() => setActive(project)}
            className="absolute rounded-full border border-white/5 animate-spin flex items-start justify-center cursor-pointer"
            style={{
              width: sizes[index],
              height: sizes[index],
              animationDuration: `${duration[index]}s`,
            }}
          >
            {/* Planet - The Project Bubble */}
            <div
              className={`w-14 h-14 rounded-full ${project.color} flex items-center justify-center text-[8px] font-bold text-black uppercase tracking-tighter text-center px-2 transition-all duration-500 hover:scale-150 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]`}
              style={{
                // Counter-rotate the text so it stays upright while the orbit spins
                animation: `reverse-spin ${duration[index]}s linear infinite`,
              }}
            >
              {project.type}
            </div>
          </div>
        );
      })}

      {/* 🌌 Modal (Case Study Detail) */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#111] border border-[#7CFC00]/30 p-10 rounded-[2.5rem] w-full max-w-md text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${active.color} text-black`}>
              {active.type}
            </span>
            <h2 className="text-3xl font-black mb-4 tracking-tighter uppercase italic">
              {active.name}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
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

      {/* Injecting the reverse spin to keep text readable */}
      <style jsx>{`
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}