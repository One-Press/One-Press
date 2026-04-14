import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    name: "Vision Edge Services",
    type: "Web Development",
    description: "A professional healthcare website for a US-based company offering Medical Transcription, Billing, Revenue Cycle Management, and Medical Coding.",
    color: "bg-[#7CFC00]",
    live: "https://visionedgeservices.com/",
    images: [
      "/Project-Vision/VP1.jpeg",
      "/Project-Vision/VP2.jpeg",
      "/Project-Vision/VP3.jpeg",
    ],
  },
  {
    id: 2,
    name: "EduMind AI Portal",
    type: "AI / SaaS",
    description: "A smart student portal powered by AI — assignment tracking, personalized study plans, and real-time analytics.",
    color: "bg-blue-500",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "TryDubai Mall",
    type: "E-Commerce",
    description: "A full-featured Shopify store for the UAE market — Electronics, Watches, and Beauty.",
    color: "bg-pink-500",
    live: "https://trydubaimall.com/",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Growth Engine",
    type: "Marketing",
    description: "End-to-end campaigns across Google Ads, Meta Ads, and TikTok delivering measurable ROAS.",
    color: "bg-amber-400",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    name: "RankBoost SEO",
    type: "SEO",
    description: "Comprehensive SEO campaigns delivering first-page Google rankings and organic traffic growth.",
    color: "bg-purple-500",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

// --- Image Modal ---
function ImageModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % project.images.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-[100] p-4 md:p-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col items-center gap-6 w-full max-w-4xl"
      >
        {/* Header */}
        <div className="flex items-end justify-between w-full border-b border-white/10 pb-4">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${project.color} text-black mb-2`}>
              {project.type}
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              {project.name}
            </h2>
            <p className="text-white/60 text-sm mt-2 max-w-xl">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="group flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-[#7CFC00] transition-all">
              ✕
            </div>
            <span className="text-[10px] uppercase font-bold tracking-tighter text-white/30 group-hover:text-[#7CFC00]">Close</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5" style={{ aspectRatio: "16/9" }}>
          <img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={project.name}
            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
          />

          {/* Controls */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white hover:bg-[#7CFC00] hover:text-black transition-all">←</button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 text-white hover:bg-[#7CFC00] hover:text-black transition-all">→</button>
        </div>

        {/* Footer Link */}
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#7CFC00]"
          >
            <span className="h-[1px] w-12 bg-[#7CFC00]/30 group-hover:w-20 transition-all" />
            Launch Live Project
            <span className="h-[1px] w-12 bg-[#7CFC00]/30 group-hover:w-20 transition-all" />
          </a>
        )}
      </div>
    </div>
  );
}

// --- Main Component ---
export default function UniverseProjects() {
  const [active, setActive] = useState(null);

  // Memoized stars to prevent re-renders
  const stars = React.useMemo(() => 
    Array.from({ length: 80 }, () => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      delay: Math.random() * 5 + "s",
    })), []
  );

  // Scales orbits based on screen size (basic responsive adjustment)
  const orbitSizes = [280, 420, 580, 740, 900]; 
  const durations = [20, 30, 45, 60, 75];

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white selection:bg-[#7CFC00] selection:text-black">
      
      {/* 🌌 Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2342&auto=format&fit=crop')] bg-cover bg-center opacity-40 scale-110"
          style={{ animation: "galaxy-float 60s linear infinite" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_5px_white]"
            style={{ 
                top: star.top, 
                left: star.left, 
                width: star.size, 
                height: star.size, 
                animationDelay: star.delay 
            }}
          />
        ))}
      </div>

      {/* 🌞 Central Core */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative group cursor-default">
          <div className="absolute inset-0 bg-[#7CFC00] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#7CFC00]/50 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[inset_0_0_40px_rgba(124,252,0,0.2)]">
            <h1 className="text-center">
              <span className="block text-3xl md:text-5xl font-black italic tracking-tighter leading-none">ONE</span>
              <span className="block text-xs md:text-sm font-bold tracking-[0.4em] text-[#7CFC00] mt-1">PRESS</span>
            </h1>
          </div>
        </div>
      </div>

      {/* 🪐 Orbit System */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute rounded-full border border-white/5 animate-spin-slow pointer-events-none"
            style={{
              width: `${orbitSizes[index]}px`,
              height: `${orbitSizes[index]}px`,
              animationDuration: `${durations[index]}s`,
            }}
          >
            {/* Planet Container - This handles the position on the orbit */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ animation: `reverse-spin ${durations[index]}s linear infinite` }}
            >
              <button
                onClick={() => setActive(project)}
                className={`group relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full ${project.color} transition-transform hover:scale-125 active:scale-95`}
              >
                {/* Orbital Label */}
                <div className="absolute -bottom-8 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase border border-white/20">
                    {project.name}
                </div>
                <span className="text-[9px] md:text-[11px] font-black uppercase text-black leading-tight px-2 text-center">
                  {project.type}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🖼 Modal */}
      {active && <ImageModal project={active} onClose={() => setActive(null)} />}

      <style>{`
        @keyframes galaxy-float {
          0% { transform: scale(1.1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(360deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </section>
  );
}