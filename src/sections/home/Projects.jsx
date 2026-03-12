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
      image: "/images/WEBSITE WORK.jpg",
    },
    {
      title: "Digital Marketing",
      desc: "Unique brand identities.",
      image: "/images/digitalmarketing2.jpg",
    },
    {
      title: "E-Commerce",
      desc: "Scalable online stores.",
      image: "/images/ecommerce.png",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile apps.",
      image: "/images/app.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${projectData.length * 1000 + 1500}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        headlineRef.current,
        { scale: 0.5, autoAlpha: 0 },
        { scale: 2, autoAlpha: 1, duration: 1.5 }
      ).to(headlineRef.current, { autoAlpha: 0, scale: 3, duration: 1 });

      projectElementsRef.current.forEach((el) => {
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8 },
          { autoAlpha: 1, scale: 1, duration: 1 }
        ).to(el, { autoAlpha: 0, scale: 0.9, duration: 0.8 }, "+=0.5");
      });

      tl.fromTo(
        buttonRef.current,
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="relative h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <h1
        ref={headlineRef}
        className="absolute text-white text-8xl font-black opacity-0"
      >
        WORK
      </h1>

      <div className="absolute inset-0 flex items-center justify-center">
        {projectData.map((project, i) => (
          <div
            key={i}
            ref={(el) => (projectElementsRef.current[i] = el)}
            className="absolute flex flex-col items-center justify-center opacity-0"
          >
            {/* UPDATED: Container for the image with proper aspect ratio */}
            <div className="w-90 h-72 rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="text-4xl text-white font-bold mt-8">
              {project.title}
            </h2>
            <p className="text-xl text-gray-300 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>

      <div ref={buttonRef} className="absolute bottom-20 opacity-0 z-10">
        <Button label="View All Projects" />
      </div>
    </section>
  );
}