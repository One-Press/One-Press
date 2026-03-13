const STEPS = [
  { id: "01", title: "Audience", desc: "Having these the marketplace to your business" },
  { id: "02", title: "Plan & Sketch", desc: "Innovative IT solutions built for performance and growth." },
  { id: "03", title: "Customize", desc: "Creating brand identities for the digital experiences" },
  { id: "04", title: "User Testing", desc: "We look forward to engage with beyond the conventional" },
];

export default function Workflow() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Grid: 1 column mobile, 4 columns desktop */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 relative">
        
        {/* The Connector Line */}
        <div className="absolute top-[35px] left-1/2 w-1 h-[calc(100%-80px)] bg-gradient-to-b from-lime-400 to-green-500 md:hidden z-0 rounded-full"></div>
        <div className="absolute top-[35px] left-0 hidden md:block w-full h-1 bg-gradient-to-r from-lime-400 to-lime-500 z-0 rounded-full"></div>

        {STEPS.map((step, idx) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
            
            {/* Step Indicator */}
            <div className="w-8 h-8 bg-white border-4 border-lime-400 rounded-full shadow-lg flex items-center justify-center mb-6 z-20 transition-transform duration-300 group-hover:scale-110">
              <div className="w-3 h-3 bg-lime-500 rounded-full animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[280px]">
              <span className="text-xs font-bold text-lime-600 block mb-2">STEP {step.id}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}