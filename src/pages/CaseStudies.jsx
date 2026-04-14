import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/layout/Footer";


const CASE_STUDIES = [
  {
    id: 'luxestay',
    title: "LuxeStay Real Estate",
    tag: "Web Development",
    result: "+35% Conversion",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
  {
    id: 'cryptovault',
    title: "CryptoVault Wallet",
    tag: "UI/UX Design",
    result: "50% Lower Churn",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200",
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">
            Proven <span className="text-[#7CFC00]">Results</span>
          </h1>
          <p className="text-white-500 mt-6 max-w-xl text-lg uppercase tracking-widest font-mono">
            How we help global brands dominate their orbit.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-32">
          {CASE_STUDIES.map((study, index) => (
            <div key={study.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}>
              <div className="w-full md:w-3/5 overflow-hidden rounded-[3rem] border border-white/5">
                <img src={study.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 whitescale group-hover:whitescale-0" alt={study.title} />
              </div>
              <div className="w-full md:w-2/5">
                <span className="text-[#7CFC00] font-mono text-sm uppercase tracking-[0.3em]">{study.tag}</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 uppercase italic tracking-tighter leading-none">{study.title}</h2>
                <div className="text-5xl font-bold text-white/20 mb-8 tracking-tighter">{study.result}</div>
                <Link to={`/projects/${study.id}`} className="px-8 py-4 border border-white/20 rounded-full hover:bg-[#7CFC00] hover:text-black transition-all inline-block uppercase font-bold text-xs tracking-widest">
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />  
    </div>
  );
}
