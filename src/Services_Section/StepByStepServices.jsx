import React, { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const AppleProductServices = () => {
  const containerRef = useRef(null);

  const sections = useMemo(() => [
    {
      id: "dev",
      title: "Development",
      desc: "Building high-performance web applications with clean code and scalable architecture. From React to WordPress, we bring your vision to life.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      align: "left"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      desc: "Data-driven strategies designed to scale your brand. We focus on SEO, SEM, and performance marketing that delivers measurable ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      align: "right"
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      desc: "User-centric interfaces that blend aesthetics with functionality. We design experiences that feel intuitive and look stunning.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      align: "left"
    },
    {
      id: "branding",
      title: "Branding",
      desc: "Defining your identity in a crowded market. We create cohesive brand systems, logos, and voice guidelines that resonate.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
      align: "right"
    }
  ], []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".hero-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      });

      const sectionsEl = gsap.utils.toArray(".scroll-section");

      sectionsEl.forEach((section) => {
        const text = section.querySelector(".text-content");
        const visual = section.querySelector(".visual-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        tl.fromTo(text, 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(visual, 
          { scale: 0.8, opacity: 0.5 }, 
          { scale: 1, opacity: 1, duration: 0.8 }, 
          "<"
        );
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="bg-white dark:bg-black overflow-x-hidden selection:bg-sky-500 selection:text-white"
    >
      {/* HERO SECTION */}
      <header className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="hero-text text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
          Digital Excellence.<br />
          <span className="text-gray-400 text-lg md:text-xl">Masterfully Crafted.</span>
        </h1>
        <p className="hero-text mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          We build, grow, and design the future of digital brands through expert development and strategic marketing.
        </p>
      </header>

      {/* SERVICE SECTIONS */}
      <main>
        {sections.map((sec) => (
          <section 
            key={sec.id} 
            className="scroll-section min-h-[80vh] flex items-center py-12 md:py-16"
            aria-labelledby={`title-${sec.id}`}
          >
            <div className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center w-full ${sec.align === 'right' ? 'md:flex-row-reverse' : ''}`}>

              {/* TEXT AREA */}
              <div className={`text-content ${sec.align === 'right' ? 'md:order-2 text-right' : 'text-left'}`}>
                <h2 
                  id={`title-${sec.id}`}
                  className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
                >
                  {sec.title}
                </h2>
                <p className={`text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md ${sec.align === 'right' ? 'ml-auto' : ''}`}>
                  {sec.desc}
                </p>
              </div>

              {/* IMAGE AREA */}
              <div className="visual-content relative group w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                <img
                  src={sec.image}
                  alt={`${sec.title} showcase`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 border-[1px] border-white/10 rounded-2xl pointer-events-none" />
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* CTA */}
      <footer className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-white text-white dark:text-black rounded-2xl p-12 md:p-16 text-center overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to scale?
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-80 font-light max-w-xl mx-auto">
            Our marketing engine is built to drive traffic, capture leads, and convert users into lifelong customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-sky-500 text-white font-bold text-base hover:bg-sky-400 transition-all active:scale-95 shadow-xl shadow-sky-500/20">
              Get Your Free Audit
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 dark:border-black/20 font-bold text-base hover:bg-white/10 dark:hover:bg-black/5 transition-all">
              Our Strategies
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AppleProductServices;