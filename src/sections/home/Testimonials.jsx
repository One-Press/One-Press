import React from "react";

const TESTIMONIALS = [
  { name: "John Doe", role: "CEO, Tech Corp", text: "Amazing results! The team delivered exactly what we needed.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Sarah Smith", role: "Founder, Design Lab", text: "Truly a professional experience. Their creativity is unmatched.", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Mike Ross", role: "Manager, Finance Inc", text: "Fast turnaround and high-quality work. Highly recommend!", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Emily Blunt", role: "Head of Marketing", text: "They completely transformed our brand identity.", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Alex Rivera", role: "UX Director", text: "The most seamless integration we've ever experienced.", image: "https://randomuser.me/api/portraits/men/5.jpg" },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">
          What our clients say
        </h2>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative flex overflow-hidden group">
        {/* The 'animate-marquee' class is a custom animation we'll define.
            'pause-on-hover' (group-hover:[animation-play-state:paused]) 
            makes it stop when the user wants to read.
        */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* We render the set twice for the infinite loop effect */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="bg-[#111] border border-white/5 p-6 md:p-8 rounded-2xl w-[280px] sm:w-[320px] md:w-[400px] shadow-2xl flex flex-col justify-between flex-shrink-0"
                >
                  <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 whitespace-normal leading-relaxed italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#ccff00]">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm md:text-base">{t.name}</div>
                      <div className="text-[#ccff00] text-[10px] md:text-xs font-mono uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Side Gradients for that "fading" look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />
      </div>

      {/* REQUIRED CSS: Add this to your tailwind.config.js or a Global CSS file */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}