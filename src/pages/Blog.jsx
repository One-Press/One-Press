import React from 'react';
import Footer from "../components/layout/Footer";

const POSTS = [
  {
    id: 1,
    title: "The Future of Minimalist Web Design in 2026",
    category: "Design",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Why 'less is more' is becoming a technical necessity for high-performance brands."
  },
  {
    id: 2,
    title: "Scaling React Applications for Global Reach",
    category: "Development",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    excerpt: "How we optimized LuxeStay's architecture to handle 1M+ monthly active users."
  },
  {
    id: 3,
    title: "The Psychology of Neon Colors in Branding",
    category: "Branding",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    excerpt: "Decoding why our signature Neon Green drives higher engagement than traditional palettes."
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION */}
        <header className="mb-20">
          <span className="text-[#7CFC00] font-mono text-xs uppercase tracking-[0.4em] mb-4 block">
            Articles & Insights
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            The <span className="text-[#7CFC00]">Journal</span>
          </h1>
        </header>

        {/* 2. FEATURED POST (Spotlight) */}
        <div className="group relative w-full h-[50vh] md:h-[60vh] rounded-[2.5rem] overflow-hidden mb-16 border border-white/10 cursor-pointer">
          <img 
            src={POSTS[0].image} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt="Featured" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
            <span className="bg-[#7CFC00] text-black text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase">
              Featured
            </span>
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight mb-4 group-hover:text-[#7CFC00] transition-colors">
              {POSTS[0].title}
            </h2>
            <p className="text-white-400 max-w-xl text-sm md:text-base line-clamp-2">
              {POSTS[0].excerpt}
            </p>
          </div>
        </div>

        {/* 3. THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {POSTS.slice(1).map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 mb-6 bg-[#111]">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover whitescale group-hover:whitescale-0 transition-all duration-500 group-hover:scale-105" 
                  alt={post.title} 
                />
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[#7CFC00] text-[10px] font-mono uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-white-600 text-[10px] uppercase tracking-widest">
                  {post.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:underline decoration-[#7CFC00] underline-offset-8 transition-all">
                {post.title}
              </h3>
              <p className="text-white-400 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* 4. CALL TO ACTION (Newsletter) */}
        <section className="mt-32 p-12 rounded-[3rem] bg-[#111] border border-white/5 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-6">
            Stay in the <span className="text-[#7CFC00]">Orbit</span>
          </h2>
          <p className="text-white-400 mb-8 max-w-md">
            Get our latest insights on design and technology delivered to your inbox every month.
          </p>
          <div className="w-full max-w-md relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-black py-4 px-6 rounded-full border border-white-800 focus:border-[#7CFC00] outline-none transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#7CFC00] text-black px-6 py-2 rounded-full font-bold text-xs uppercase hover:scale-105 transition-transform">
              Join
            </button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}