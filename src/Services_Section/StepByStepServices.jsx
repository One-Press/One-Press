import React, { useRef, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'; // ✅ 1. Import ScrollTo
import { useGSAP } from '@gsap/react';
import { useLocation, useNavigate } from 'react-router-dom';

// ✅ 2. Register both plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AppleProductServices = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Service sections - IDs match your Navbar dropdown IDs
  const sections = useMemo(() => [
    {
      id: "branding",
      title: "Branding & Identity",
      desc: "Build a strong and memorable brand with our professional branding services. We create unique brand identities that reflect your business values and connect with your audience.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
      align: "left"
    },
    {
      id: "uiux",
      title: "Web Design & UI/UX",
      desc: "We create visually appealing and user-focused designs that enhance engagement and conversions. Our UI/UX design approach ensures intuitive navigation, modern layouts, and a seamless user journey.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      align: "right"
    },
    {
      id: "dev",
      title: "Web Development",
      desc: "At One Press Solution, we provide custom web development services tailored to your business goals. We build fast, secure, and scalable websites using modern technologies, ensuring seamless performance across all devices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      align: "left"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      desc: "We help businesses grow online with result-driven digital marketing strategies. From social media marketing to paid advertising campaigns, we target the right audience to increase brand awareness, leads, and sales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      align: "right"
    },
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      desc: "We design and develop high-performing e-commerce stores that deliver seamless shopping experiences. Our solutions focus on usability, security, and conversion optimization to maximize your online sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      align: "left"
    }
  ], []);

  // ✅ 3. Updated Navigation Logic (Handles Hash Jumps)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash; // e.g. "#dev"
      
      // Wait for GSAP and the DOM to settle (pinning changes heights)
      const timer = setTimeout(() => {
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: targetId,
              offsetY: 100, // Adjust this to match your Navbar height
              autoKill: false
            },
            ease: "power3.inOut"
          });
          // Force a refresh to ensure all pinned elements are in place
          ScrollTrigger.refresh();
        }
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [location]);

  // ✅ 4. GSAP Animations with ScrollTrigger
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const sectionsEl = gsap.utils.toArray(".scroll-section");

      sectionsEl.forEach((section) => {
        const text = section.querySelector(".text-content");
        const visual = section.querySelector(".visual-content");

        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        })
        .fromTo(text, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(visual, { scale: 0.8, opacity: 0.5 }, { scale: 1, opacity: 1, duration: 0.8 }, "<");
      });

      // Recalculate everything once timelines are built
      ScrollTrigger.refresh();
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white dark:bg-black overflow-x-hidden selection:bg-[#7CFC00] selection:text-black">
      
      {/* HERO SECTION */}
      <header className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="hero-text text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug uppercase italic">
          Digital Excellence.<br />
          <span className="text-gray-400 text-lg md:text-xl uppercase tracking-widest font-mono italic">Masterfully Crafted.</span>
        </h1>
        <p className="hero-text mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          We build, grow, and design the future of digital brands through expert development and strategic marketing.
        </p>
      </header>

      {/* SERVICES MAIN LIST */}
      <main>
        {sections.map((sec) => (
          <section
            id={sec.id} // ✅ Critical for the Navbar to find this section
            key={sec.id}
            className="scroll-section min-h-[80vh] flex items-center py-12 md:py-16"
          >
            <div className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center w-full ${sec.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* TEXT CONTENT */}
              <div className={`text-content ${sec.align === 'right' ? 'md:order-2 text-right' : 'text-left'}`}>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase italic">
                  {sec.title}
                </h2>
                <p className={`text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md ${sec.align === 'right' ? 'ml-auto' : ''}`}>
                  {sec.desc}
                </p>
              </div>

              {/* IMAGE VISUAL */}
              <div className="visual-content relative group w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
                <img
                  src={sec.image}
                  alt={sec.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* CTA FOOTER */}
      <footer className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto bg-zinc-900 dark:bg-[#111] text-white rounded-[3rem] p-12 md:p-16 text-center border border-white/5">
          <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">
            Ready to <span className="text-[#7CFC00]">scale?</span>
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-60 font-light max-w-xl mx-auto">
            Our marketing engine is built to drive traffic, capture leads, and convert users into lifelong customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 rounded-full bg-[#7CFC00] text-black font-black uppercase text-sm tracking-widest hover:scale-105 transition-all active:scale-95 shadow-xl shadow-[#7CFC00]/20"
            >
              Get Your Free Audit
            </button>
            <button 
              onClick={() => navigate('/strategies')}
              className="px-10 py-4 rounded-full border border-white/20 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Our Strategies
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default AppleProductServices;