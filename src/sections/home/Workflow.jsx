const STEPS = [
  { id: "01", title: "Audience", desc: "Having these the marketplace to your business" },
  { id: "02", title: "Plan & Sketch", desc: "Innovative IT solutions built for performance, security, and growth." },
  { id: "03", title: "Customize", desc: "Creating brand identities for the digital experiences" },
  { id: "04", title: "User Testing", desc: "We look forward to engage with beyond the conventional" },
];

export default function Workflow() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Gradient Horizontal Line */}
        <div className="absolute top-[88px] left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 hidden md:block z-0 rounded-full shadow-lg"></div>

        {STEPS.map((step, idx) => (
          <div key={step.id} className="relative z-10 flex-1 flex flex-col items-center text-center group">

            {/* Step Header */}
            <span className="text-sm font-semibold text-gray-900 mb-6">Step {step.id}</span>

            {/* Pulse Indicator */}
            <div className="relative mb-10">
              <div className="w-6 h-6 bg-lime-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-transform duration-300 group-hover:scale-125"></div>
            </div>

            {/* Content Card */}
            <div className="relative pt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-[250px]">
              {/* Ghost Number */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black text-gray-100 dark:text-gray-700 opacity-20 -z-10 select-none">
                {step.id}
              </span>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>

            {/* Connecting Dot Below for mobile */}
            {idx !== STEPS.length - 1 && (
              <div className="absolute md:hidden w-1 h-12 bg-lime-400 rounded-full top-full mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}