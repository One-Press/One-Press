import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicProjects() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);
  const projectElementsRef = useRef([]);

  const projectData = [
    {
      title: "Web Development",
      desc: "Fast, responsive websites.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Digital Marketing",
      desc: "Unique brand identities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "E-Commerce",
      desc: "Scalable online stores.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile apps.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          // REDUCED: Changed from 1000px per project to 400px for a faster, tighter scroll
          end: `+=${projectData.length * 400 + 500}`, 
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      // Snappier Headline animation
      tl.fromTo(
        headlineRef.current,
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1.5, autoAlpha: 1, duration: 0.8 }
      ).to(headlineRef.current, { autoAlpha: 0, scale: 2, duration: 0.5 });

      // Faster project transitions
      projectElementsRef.current.forEach((el) => {
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, y: 30, scale: 0.9 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }
        ).to(el, { autoAlpha: 0, y: -30, scale: 1.05, duration: 0.6 }, "+=0.2"); // Reduced wait time
      });

      tl.fromTo(
        buttonRef.current,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.5 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="relative h-screen bg-[#0a0a0a] overflow-hidden flex items-center justify-center text-white"
    >
      <h1
        ref={headlineRef}
        className="absolute text-7xl md:text-9xl font-black opacity-0 z-0 tracking-tighter"
      >
        WORK
      </h1>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        {projectData.map((project, i) => (
          <div
            key={i}
            ref={(el) => (projectElementsRef.current[i] = el)}
            className="absolute flex flex-col items-center justify-center opacity-0 max-w-lg w-full px-6"
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mt-8 text-center">
              {project.title}
            </h2>
            <p className="text-lg text-gray-400 mt-3 text-center">{project.desc}</p>
          </div>
        ))}
      </div>

      <div ref={buttonRef} className="absolute bottom-16 opacity-0 z-20">
        <Button label="View All Projects" />
      </div>
    </section>
  );
}