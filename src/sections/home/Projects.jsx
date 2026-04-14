import { useEffect, useRef, useState, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/ui/Button";


gsap.registerPlugin(ScrollTrigger);

// ─── Project Data ─────────────────────────────────────────────────────────────

const projectData = [
  
  {
    tag: "Web Development",
    title: "Vision Edge Services",
    subtitle: "Healthcare Services PlatformUSA",
    desc: "A professional multi-service healthcare website for a US-based company offering Medical Transcription, Billing, Revenue Cycle Management, and Medical Codingbuilt for trust, clarity, and lead generation.",
    category: "Healthcare",
    year: "2024",
    stack: "WordPress / Custom CSS",
    live: "https://visionedgeservices.com/",
    images: [
      "/Project-Vision/VP1.jpeg",
      "/Project-Vision/VP2.jpeg",
      "/Project-Vision/VP3.jpeg",
    ],
  },
  {
    tag: "AI / SaaS",
    title: "Edu Mind AI",
    subtitle: "AI-Powered Student Portal System",
    desc: "A smart student portal powered by AIfeaturing automated assignment tracking, personalized study plans, real-time performance analytics, and an AI chatbot for instant academic support.",
    category: "EdTech / AI",
    year: "2024",
    stack: "Next.js / OpenAI / Prisma",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    tag: "E-Commerce",
    title: "TryDubai Mall",
    subtitle: "Multi-Category Online StoreUAE",
    desc: "A full-featured Shopify e-commerce store serving the UAE marketoffering Electronics, Health & Fitness, Watches, Beauty, and Home Gadgets with 50% off deals and 1–2 day delivery across UAE.",
    category: "E-Commerce",
    year: "2024",
    stack: "Shopify / Custom Theme",
    live: "https://trydubaimall.com/",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    tag: "Digital Marketing",
    title: "Growth Engine",
    subtitle: "Paid Ads & Social Media Management",
    desc: "End-to-end digital marketing campaigns across Google Ads, Meta Ads, and TikTokdelivering measurable ROAS, lead generation, and brand growth for multiple clients across diverse niches.",
    category: "Digital Marketing",
    year: "2024",
    stack: "Google Ads / Meta / Analytics",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=900&auto=format&fit=crop",
    ],
  },
  {
    tag: "SEO",
    title: "RankBoost",
    subtitle: "Search Engine Optimization Results",
    desc: "Comprehensive SEO campaigns delivering first-page Google rankings, organic traffic growth, and domain authority improvementsbacked by technical audits, content strategy, and white-hat link building.",
    category: "SEO",
    year: "2024",
    stack: "SEMrush / Ahrefs / GSC",
    live: "#",
    images: [
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=900&auto=format&fit=crop",
    ],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────

const ProjectCard = forwardRef(({ project, index, total }, ref) => {
  const [imgIndex, setImgIndex] = useState(0);


  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % project.images.length);
  };
useEffect(() => {
  const interval = setInterval(() => {
    setImgIndex((i) => (i + 1) % project.images.length);
  }, 2000);

  return () => clearInterval(interval);
}, [project.images.length]);

  return (
    <div
      ref={ref}
      className="absolute w-full max-w-6xl opacity-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-10"
    >
      {/* ── LEFT: Content ── */}
      <div className="flex flex-col gap-4">

        {/* Tag + counter */}
        <div className="flex items-center gap-3">
          <span className="text-[#7CFC00] text-xs font-mono tracking-[0.2em] uppercase">
            {project.tag}
          </span>
          <span className="text-white/20 text-xs font-mono">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
            {project.title}
          </h2>
          <p className="text-[#7CFC00] font-mono text-xs tracking-widest uppercase mt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
          {project.desc}
        </p>

        {/* Meta */}
        <div className="flex gap-5 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Category</span>
            <span className="text-xs font-semibold">{project.category}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Year</span>
            <span className="text-xs font-semibold">{project.year}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Stack</span>
            <span className="text-xs font-semibold">{project.stack}</span>
          </div>
        </div>

        {/* Live Link */}
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-[#7CFC00] transition-colors duration-200 w-fit"
          >
            <span className="w-4 h-px bg-current inline-block" />
            View Live Site
          </a>
        )}
      </div>

      {/* ── RIGHT: Image Carousel ── */}
      {/* aspect ratio = 613/401 ≈ 3/1.96we use padding-top trick for pixel-perfect fit */}
      <div className="relative">

        {/* Outer wrapperexact 613:401 aspect ratio */}
        <div
          className="relative w-full rounded-2xl overflow-hidden border border-white/10"
          style={{ aspectRatio: "613 / 401" }}
        >
          {/* Imageobject-cover so it fills the frame perfectly */}
          <img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={project.title}
className="absolute inset-0 w-full h-full object-cover transition-all duration-700"            loading="lazy"
            style={{ imageRendering: "auto" }}
          />

          {/* Dot indicatorstop right */}
          <div className="absolute top-3 right-3 flex gap-1.5 items-center z-10">
            {project.images.map((_, di) => (
              <button
                key={di}
                onClick={(e) => { e.stopPropagation(); setImgIndex(di); }}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: di === imgIndex ? "16px" : "6px",
                  height: "6px",
                  background: di === imgIndex ? "#7CFC00" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          {/* Subtle bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Glassmorphism Nav Bar */}
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function CinematicProjects() {
  const sectionRef = useRef(null);
  const workTextRef = useRef(null);
  const buttonRef = useRef(null);
  const projectElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projectData.length * 600 + 800}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // 1. Fill WORK with green
      tl.fromTo(
        workTextRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "none" }
      );

      // 2. Dim WORK text
      tl.to(".work-bg-container", { opacity: 0.15, scale: 0.9, duration: 0.5 });

      // 3. Projects scroll one by one
      projectElementsRef.current.forEach((el) => {
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, y: 50, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1 }
        ).to(el, { autoAlpha: 0, y: -50, scale: 1.1, duration: 0.8 }, "+=0.5");
      });

      // 4. Show CTA button
      tl.fromTo(
        buttonRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center text-white"
    >
      {/* BACKGROUND WORK TEXT */}
      <div className="work-bg-container absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="absolute text-[15vw] md:text-[20vw] font-black tracking-tighter text-white/10 uppercase italic">
          WORK
        </h1>
        <h1
          ref={workTextRef}
          className="absolute text-[15vw] md:text-[20vw] font-black tracking-tighter text-[#7CFC00] uppercase italic"
          style={{ clipPath: "inset(100% 0% 0% 0%)" }}
        >
          WORK
        </h1>
      </div>

      {/* PROJECT CARDS */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            total={projectData.length}
            ref={(el) => (projectElementsRef.current[i] = el)}
          />
        ))}
      </div>

      {/* CTA BUTTON */}
      <div ref={buttonRef} className="absolute bottom-16 opacity-0 z-20">
        <Button label="View All Projects" />
      </div>
    </section>
  );
}