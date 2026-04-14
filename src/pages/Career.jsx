import React from 'react';
import Footer from "../components/layout/Footer";

const JOBS = [
  { title: "Senior React Developer", type: "Full-Time", location: "Remote / NY", dept: "Engineering" },
  { title: "UI/UX Visual Designer", type: "Full-Time", location: "London / Remote", dept: "Design" },
  { title: "Digital Growth Strategist", type: "Contract", location: "Remote", dept: "Marketing" }
];

export default function Career() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8">
            Join The <span className="text-[#7CFC00]">Mission</span>
          </h1>
          <p className="text-white-400 text-lg max-w-2xl mx-auto">
            We’re looking for visionaries, rebels, and creators to help us build the next generation of digital products.
          </p>
        </div>

        <div className="space-y-6">
          {JOBS.map((job, i) => (
            <div key={i} className="group bg-[#111] p-8 md:p-12 rounded-[2rem] border border-white/5 flex flex-col md:flex-row justify-between items-center hover:border-[#7CFC00]/50 transition-all duration-300">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <span className="text-[#7CFC00] text-[10px] font-mono uppercase tracking-[0.2em]">{job.dept}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 group-hover:text-[#7CFC00] transition-colors">{job.title}</h3>
                <div className="flex gap-4 mt-3 text-white-500 text-sm justify-center md:justify-start">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="px-10 py-4 bg-white text-black font-black rounded-full uppercase text-xs tracking-widest hover:bg-[#7CFC00] transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}