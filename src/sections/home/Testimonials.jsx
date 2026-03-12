import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  { name: "John Doe", role: "CEO, Tech Corp", text: "Amazing results! The team delivered exactly what we needed." },
  { name: "Sarah Smith", role: "Founder, Design Lab", text: "Truly a professional experience. Their creativity is unmatched." },
  { name: "Mike Ross", role: "Manager, Finance Inc", text: "Fast turnaround and high-quality work. Highly recommend!" },
  { name: "Emily Blunt", role: "Head of Marketing", text: "They completely transformed our brand identity." },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // 1. Scope to the section
    const ctx = gsap.context(() => {
      // 2. Animate all cards at once with a stagger
      gsap.fromTo(
        cardsRef.current,
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2, // Smooth sequence
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Animates when the SECTION enters, not individual cards
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">What our clients say</h2>
        <div className="flex flex-col gap-12 items-center">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              // Direct assignment to the ref array
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white p-8 rounded-2xl w-full md:w-3/4 lg:w-1/2 shadow-2xl"
            >
              <p className="text-gray-600 text-lg mb-6">"{t.text}"</p>
              <div className="font-bold text-gray-900">{t.name}</div>
              <div className="text-indigo-600 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}