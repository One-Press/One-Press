function Marquee() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Strategy",
    "Mobile Apps",
    "SEO Optimization",
  ];

  return (
    <div className="overflow-hidden w-full bg-white-50 py-4">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {services.concat(services).map((service, index) => (
          <span
            key={index}
            className="px-6 text-2xl font-bold text-white-800 uppercase whitespace-nowrap"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Inline Tailwind animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Marquee;