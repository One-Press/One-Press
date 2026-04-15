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
    <div className="overflow-hidden w-full bg-[#0a0a0a] py-10 border-y border-white/5">
  <div className="flex w-max whitespace-nowrap animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
    {[...services, ...services].map((service, index) => (
      <div key={index} className="flex items-center">
        <span className="px-8 text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
          {service}
        </span>
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#7CFC00] mx-4" />
      </div>
    ))}
  </div>

  <style>
    {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</div>
  );
}

export default Marquee;