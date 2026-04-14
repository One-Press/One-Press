import React from 'react';

const TEAM_MEMBERS = [
  { name: "Amir Iqbal", role: "Founder & CEO", img: "/images/ceo.jpg"},
  { name: "Jassica Oliver", role: "Researcher", img: "/images/research.jpg" },
  { name: "Sherry", role: "Digital Marketer", img: "images/digitalmarketer.jpg" },
  { name: "Sam", role: "Lead Developer", img: "images/developer.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-28 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-white-400 uppercase tracking-widest text-sm mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold">Meet the experts</h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Image Container */}
              <div className="aspect-[3/4] bg-white-800 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Info */}
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-white-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}