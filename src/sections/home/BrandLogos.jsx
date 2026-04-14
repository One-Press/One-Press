import React from 'react';

const LOGOS = [
  { name: "CREATIVE", sub: "texm Smit UPOWISE" },
  { name: "Innovate", sub: "texm Smit UPOWISE" },
  { name: "Express", sub: "texm Smit UPOWISE" },
  { name: "BRANDNAME", sub: "texm Smit UPOWISE" },
];

const LogoCell = React.memo(({ logo }) => (
  <div className="flex flex-col items-center justify-center p-12 border-b border-r border-white-100 hover:bg-white-50 transition-colors">
    <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white-50 rounded-full">
      {/* Replace this span with <img src={logo.src} /> for actual brand logos */}
      <span className="text-3xl font-bold text-white-300">{logo.name[0]}</span>
    </div>
    <span className="text-lg font-bold text-white-800">{logo.name.toUpperCase()}</span>
    <span className="text-xs text-white-400 mt-1">{logo.sub}</span>
  </div>
));

export default function BrandLogos() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-white-500 font-medium uppercase tracking-widest text-sm mb-3">
            International Brands
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white-900 max-w-lg">
            We Are Happy To Work With Global Largest Brands
          </h2>
        </div>

        {/* The Grid: Set to 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white-100">
          {LOGOS.map((logo, i) => (
            <LogoCell key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}