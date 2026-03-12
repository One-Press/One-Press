import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Marquee() {
  const marqueeRef = useRef(null);

  const services = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Strategy",
    "Mobile Apps",
    "SEO Optimization",
  ];

  useEffect(() => {
    // 1. Create a context for proper cleanup
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 7,
        ease: "linear",
      });
    }, marqueeRef);

    // 2. Critical cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-gray-50 py-4">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap gap-12 text-2xl font-bold text-gray-800"
      >
        {/* Rendering services twice for seamless looping */}
        {services.concat(services).map((service, index) => (
          <span key={index} className="px-4 uppercase">
            {service}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;