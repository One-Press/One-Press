import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function MidSection() {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const contentRef = useRef(null);

  // High-reliability production image URLs
  const leftImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
  const rightImageUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Center Content Entrance
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 2. Floating animation for Left Image (Inverse movement)
      gsap.to(leftImgRef.current, {
        y: -30,
        rotation: -3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Floating animation for Right Image
      gsap.to(rightImgRef.current, {
        y: 30,
        rotation: 3,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2, // Offset for organic look
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 lg:py-36 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] items-center gap-16 lg:gap-8">
        
        {/* Left Image Column */}
        <div className="w-full flex justify-center order-2 lg:order-1">
          <div 
            ref={leftImgRef}
            className="w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50"
          >
            <img
              src={leftImageUrl}
              alt="Creative Agency Workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center Content Column */}
        <div 
          ref={contentRef} 
          className="w-full text-center px-4 order-1 lg:order-2"
        >
          <span className="inline-block bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            Global Creative Agency
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tighter">
            We unlock business potential with <span className="text-gray-400 italic font-serif">design.</span>
          </h2>
          <p className="text-gray-500 text-lg lg:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
            From traditional PR to high-end digital storytelling, we bridge the gap between brands and their audiences.
          </p>
          <div className="flex justify-center transition-all hover:scale-105 active:scale-95 duration-300">
            <Button label="Get Started" />
          </div>
        </div>

        {/* Right Image Column */}
        <div className="w-full flex justify-center order-3">
          <div 
            ref={rightImgRef}
            className="w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50"
          >
            <img
              src={rightImageUrl}
              alt="Strategic Team Collaboration"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}