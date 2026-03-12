  import React from 'react';

  export default function Hero() {
    return (
      <section className="relative min-h-screen bg-[#111] text-white flex items-center overflow-hidden">
        {/* Background Abstract Graphic */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-sm uppercase tracking-widest text-gray-400">
              Strategy, Design, Solution Development <span>↗</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold leading-none mb-8">
              Digital <br /> agency <span className="text-sm border border-gray-600 rounded-full px-3 py-1 ml-2 align-super">Pro</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
              With every single one of our clients, we bring forth deep passion for 
              <span className="font-bold text-white"> creative problem solving </span> 
              which is what we deliver.
            </p>
          </div>

          {/* Right Side Stats */}
          <div className="lg:text-right">
            <h2 className="text-6xl md:text-8xl font-bold mb-4">25k+</h2>
            <p className="text-xl text-gray-400">Projects completed successfully</p>
          </div>
        </div>

        {/* Down Arrow Indicator */}
        <div className="absolute bottom-12 left-12 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    );
  }