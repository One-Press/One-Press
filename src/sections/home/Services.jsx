import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { 
    id: "01", 
    title: "Web & Mobile Development", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "02", 
    title: "Interaction Design", 
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "03", 
    title: "Digital Marketing", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "04", 
    title: "Branding and Strategy", 
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: "05", 
    title: "E-commerce Solutions", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" 
  },
];

const DESC = "We create products, brands, apps & websites for the companies all around the world class digital products";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for the rows
      gsap.from(".service-row", {
        opacity: 0,
        x: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Subtle floating effect for the image
      gsap.to(".image-container", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    gsap.fromTo(imageRef.current, 
      { opacity: 0.6, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] text-white py-20 px-6 md:px-12 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: Image Preview Area */}
        <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative">
          <div className="image-container relative w-full max-w-[280px]">
            
            {/* NEON GREEN MARKER (Positioned UNDER the card) */}
            <div 
              className="absolute -bottom-6 -left-10 w-44 h-16 bg-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.2)] z-0"
              style={{ transform: "rotate(-15deg)" }}
            >
               <div className="w-1.5 h-1.5 bg-black rounded-full absolute right-4 top-1/2 -translate-y-1/2"></div>
            </div>

            {/* ACTUAL IMAGE CARD */}
            <div 
              ref={imageRef}
              className="relative z-10 w-full aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-2xl"
              style={{ transform: "rotate(-8deg)" }}
            >
              <img 
                src={SERVICES[activeIndex].image} 
                alt="Service Preview" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* SMALL ACCENT DOT */}
            <div className="absolute -right-8 bottom-1/4 w-2 h-2 bg-[#ccff00] rounded-full z-10"></div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Services List */}
        <div className="lg:col-span-8 flex flex-col">
          {SERVICES.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => handleHover(index)}
              className="service-row group flex items-start py-9 border-t border-white/10 cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-gray-500 font-bold text-lg mr-8 md:mr-16 pt-1">
                {item.id}
              </span>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  {DESC}
                </p>
              </div>

              <div className="ml-4">
                <FiArrowUpRight className="text-4xl text-gray-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          ))}
          <div className="border-t border-white/10 w-full"></div>
        </div>

      </div>
    </section>
  );
}