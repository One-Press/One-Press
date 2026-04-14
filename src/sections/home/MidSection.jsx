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

  const leftImageUrl =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
  const rightImageUrl =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.to(leftImgRef.current, {
        y: -25,
        rotation: -2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(rightImgRef.current, {
        y: 25,
        rotation: 2,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 -mt-16 bg-white rounded-t-[40px] overflow-hidden"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] items-center gap-10 lg:gap-6">
        
        {/* Left Image */}
        <div className="w-full flex justify-center order-2 lg:order-1">
          <div
            ref={leftImgRef}
            className="w-full max-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white-50"
          >
            <img
              src={leftImageUrl}
              alt="Creative Agency Workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Center Content */}
        <div
          ref={contentRef}
          className="w-full text-center px-4 order-1 lg:order-2"
        >
          <span className="inline-block bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Why One Press
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white-900 mb-4 leading-tight tracking-tight">
            Best Digital Marketing Agencies 
            <br className="hidden sm:block" />
            <span className="text-white-400 italic font-serif">
              Why Choose One Press?
            </span>
          </h2>

          <p className="text-white-500 text-base sm:text-lg lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            In today’s competitive digital landscape, choosing the right
            marketing partner can define your growth. One Press blends
            data-driven strategy with creative execution to deliver real,
            measurable results.

            From SEO and PPC to social media and content marketing, we build
            tailored solutions that boost visibility, attract the right
            audience, and scale your business.

            With full transparency and dedicated support, One Press isn’t just an
            agency  it’s your long-term growth partner.
          </p>

          <div className="flex justify-center transition-all hover:scale-105 active:scale-95 duration-300">
            <Button label="Get Started" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center order-3">
          <div
            ref={rightImgRef}
            className="w-full max-w-[300px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-white-50"
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