import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa"; // Importing FontAwesome variants
import Button from "../ui/Button"; 

export default function Footer() {
  // Mapping icons to their respective components and links
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="col-span-1">
          <h1 className="text-white text-3xl font-black mb-6 tracking-tighter">
            One <span className="text-[#7CFC00]">Press</span>
          </h1>
          <p className="mb-8 leading-relaxed text-sm">
            We build digital experiences that help brands grow, 
            innovate, and connect with their audience through 
            cutting-edge design and development.
          </p>
          
          {/* UPDATED: Social Icons with actual Logos */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#7CFC00] hover:text-black hover:border-[#7CFC00] transition-all duration-300 cursor-pointer text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Information</h3>
          <ul className="space-y-4 text-sm">
            {['About Company', 'Case Study', 'Career', 'Blog', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#7CFC00] transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Us</h3>
          <p className="mb-4 text-sm leading-relaxed">Valentin, Street Road 24, New York, USA – 67452</p>
          <p className="mb-2 font-bold text-white text-lg tracking-tight hover:text-[#7CFC00] transition-colors cursor-pointer">
            (+1) 708 – 630 – 6059
          </p>
          <p className="text-sm hover:text-[#7CFC00] transition-colors cursor-pointer underline decoration-gray-700 underline-offset-4">
            onepresssolutions@gmail.com
          </p>
        </div>

        {/* Column 4: CTA Box */}
        <div className="bg-[#151515] p-8 rounded-[2rem] border border-white/5 flex flex-col items-start shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-6 leading-tight">
            Have a project in your mind?
          </h3>
          
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300"> 
            <Button label="Contact Us ↗" href="/contact" />
          </div>

          <div className="mt-auto">
            <p className="text-[#7CFC00] font-mono text-xs font-bold uppercase tracking-widest">09:00 AM – 10:30 PM</p>
            <p className="text-[10px] mt-1 text-gray-500 uppercase tracking-tighter">Monday – Friday</p>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[12px] font-medium tracking-wide">
          © 2022 – 2026 | ALL RIGHTS RESERVED BY <span className="text-white">ONE PRESS</span>
        </p>
        
        {/* Newsletter Input */}
        <div className="relative w-full md:w-[400px]">
          <input 
            type="email" 
            placeholder="Subscribe to our newsletter" 
            className="w-full bg-[#151515] py-4 pl-6 pr-16 rounded-full text-white border border-transparent focus:border-[#7CFC00] outline-none transition-all placeholder-gray-600 text-sm" 
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#7CFC00] rounded-full text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
            <span className="text-xl leading-none">➤</span>
          </button>
        </div>
      </div>
    </footer>
  );
}