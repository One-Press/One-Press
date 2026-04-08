import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from "../ui/Button"; 

export default function Footer() {
  const socialLinks = [
    { 
      icon: <FaFacebookF />, 
      url: "https://www.facebook.com/OnePressSolutions/", 
      label: "Facebook" 
    },
    { 
      icon: <FaInstagram />, 
      url: "https://www.instagram.com/onepresssolutions/", 
      label: "Instagram" 
    },
    { 
      icon: <FaLinkedinIn />, 
      url: "https://www.linkedin.com/company/onepresssolutions/", 
      label: "LinkedIn" 
    },
  ];

  const infoLinks = [
    { name: 'About Company', path: '/about' },
    { name: 'Case Study', path: '/case-study' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand */}
        <div className="col-span-1">
          <Link to="/" className="text-white text-3xl font-black mb-6 tracking-tighter block">
            One <span className="text-[#7CFC00]">Press</span>
          </Link>
          <p className="mb-8 leading-relaxed text-sm">
            We build digital experiences that help brands grow and connect with their audience.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
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
            {infoLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-[#7CFC00] transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Us</h3>
          <p className="mb-4 text-sm">74, Commercial Broadway, Paragon City, Lahore, 54000</p>
          <p className="mb-2 font-bold text-white text-lg">+92 306 1006767</p>
          <Link to="/contact" className="text-sm hover:text-[#7CFC00] underline decoration-gray-700 underline-offset-4 transition-all">
            onepresssolutions@gmail.com
          </Link>
        </div>

        {/* Column 4: CTA Box */}
        <div className="bg-[#151515] p-8 rounded-[2rem] border border-white/5 flex flex-col items-start shadow-2xl">
          <h3 className="text-white text-xl font-bold mb-6 leading-tight">Have a project in mind?</h3>
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300"> 
            <Button label="Contact Us ↗" href="/contact" />
          </div>
          <div className="mt-auto">
            <p className="text-[#7CFC00] font-mono text-xs font-bold uppercase tracking-widest">09:00 AM – 10:30 PM</p>
            <p className="text-[10px] mt-1 text-gray-500 uppercase">Monday – Friday</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer (Subscription Removed) */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex justify-center items-center">
        <p className="text-[12px] font-medium tracking-wide text-center">
          © 2022 – 2026 | ALL RIGHTS RESERVED BY <span className="text-white uppercase font-bold">One Press</span>
        </p>
      </div>
    </footer>
  );
}