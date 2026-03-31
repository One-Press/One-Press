import React from 'react';
import Button from "../ui/Button"; 

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="col-span-1">
          <h1 className="text-white text-3xl font-bold mb-6">One Press</h1>
          <p className="mb-6 leading-relaxed">
            When do they work well, and when do they on us and finally, 
            when do we actually need how can we avoid them.
          </p>
          <div className="flex gap-4">
            {['F', 'T', 'I', 'L'].map((icon) => (
              <div key={icon} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#7CFC00] hover:text-black hover:border-[#7CFC00] transition-all cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-6">Information</h3>
          <ul className="space-y-4">
            {['About Company', 'Case Study', 'Career', 'Blog', 'Contact'].map((link) => (
              <li key={link}><a href="#" className="hover:text-[#7CFC00] transition">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contact Us</h3>
          <p className="mb-2">Valentin, Street Road 24, New York, USA – 67452</p>
          <p className="mb-2 font-bold text-white tracking-wide">(+1) 708 – 630 – 6059</p>
          <p className="hover:text-[#7CFC00] transition cursor-pointer">onepresssolutions@gmail.com</p>
        </div>

        {/* Column 4 */}
        <div className="bg-[#1a1a1a] p-8 rounded-3xl flex flex-col items-start">
          <h3 className="text-white text-xl font-bold mb-8">Have a project in your mind?</h3>
          
          <div className="mb-8 scale-75 origin-left"> 
            <Button label="Contact Us ↗" href="/contact" />
          </div>

          <p className="text-white font-bold uppercase text-sm tracking-tighter">09:00 AM – 10:30 PM</p>
          <p className="text-xs mt-1 text-gray-500">Monday – Friday</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">© 2022 – 2026 | All rights reserved by One Press</p>
        
        <div className="relative w-full md:w-96 group">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-[#1a1a1a] py-4 px-6 rounded-full text-white border border-transparent focus:border-[#7CFC00] outline-none transition-all placeholder-gray-600" 
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#7CFC00] rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform">
            ➤
          </button>
        </div>
      </div>
    </footer>
  );
}