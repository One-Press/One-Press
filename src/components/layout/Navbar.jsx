import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll for glass effect background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Projects", "About", "Contact"];

  const servicesDropdown = [
    { name: "Branding & Identity", path: "/branding-identy-services" },
    { name: "Web Design & UI/UX", path: "/web-design-ui-ux-services" },
    { name: "Web Development", path: "/web-development-services" },
    { name: "Digital Marketing", path: "/seo-digital-marketing-services" },
    { name: "E-commerce Solutions", path: "/ecommerce-website-design-services" }
  ];

  const handleNavigation = (item) => {
    const paths = {
      Home: "/",
      Services: "/services",
      Projects: "/projects",
      About: "/about",
      Contact: "/contact"
    };
    navigate(paths[item]);
    setIsOpen(false);
  };

  const handleServiceClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${
      scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-4"
    }`}>
      
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* 🔹 Logo Section */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="OP-LOGO.png" 
                alt="Logo" 
                className="h-14 md:h-16 w-auto object-contain transition-all duration-500 ease-out group-hover:brightness-125"
              />
              {/* Subtle green glow behind logo */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-500 bg-[#7CFC00]/30"></div>
            </div>
          </Link>
        </div>

        {/* 🔹 Desktop Nav (Dark Theme) */}
        <div className="hidden md:flex flex-[2] justify-center">
          <ul className="flex items-center gap-10 font-bold text-gray-400 uppercase text-[12px] tracking-[0.3em]">
            {navItems.map((item) => (
              <li key={item} className="relative group cursor-pointer py-2">
                <div 
                  onClick={() => handleNavigation(item)}
                  className="flex items-center gap-1 group-hover:text-[#7CFC00] transition-colors duration-300"
                >
                  {item}
                  {item === "Services" && (
                    <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#7CFC00]" />
                  )}
                </div>

                {/* 🔽 PREMIUM DARK DROPDOWN */}
                {item === "Services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl py-6 w-72 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                      {servicesDropdown.map((service, i) => (
                        <div
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(service.path);
                          }}
                          className="px-8 py-3.5 text-gray-400 hover:bg-white/5 hover:text-[#7CFC00] transition-all cursor-pointer text-[12px] font-bold flex items-center justify-between group/item"
                        >
                          {service.name}
                          <span className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all font-black">→</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Neon Green hover line */}
                <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#7CFC00] transition-all duration-500 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Action Button */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <button onClick={() => navigate('/contact')} className="hidden md:block relative overflow-hidden group">
            <div className="bg-white text-black px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest group-hover:bg-[#7CFC00] transition-all duration-300 transform group-hover:-translate-y-1">
              Get Started
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#7CFC00] blur-sm opacity-0 group-hover:opacity-100 transition-all"></div>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-3xl text-white focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* 📱 Mobile Menu (Full Screen Dark) */}
      <div className={`md:hidden bg-[#0a0a0a] overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-t border-white/5' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-6 py-10 px-8 font-black text-white uppercase tracking-tighter italic text-4xl">
          {navItems.map((item) => (
            <li key={item} className="group">
              <div 
                className="flex justify-between items-center"
                onClick={() => handleNavigation(item)}
              >
                <span className="group-hover:text-[#7CFC00] transition-colors">{item}</span>
                {item === "Services" && <FiChevronDown className="text-xl" />}
              </div>
              
              {item === "Services" && (
                <ul className="flex flex-col gap-4 mt-6 ml-4 border-l border-white/10 pl-6 font-bold text-gray-500 lowercase tracking-normal italic text-lg">
                  {servicesDropdown.map((service, i) => (
                    <li 
                      key={i} 
                      onClick={() => handleServiceClick(service.path)}
                      className="hover:text-[#7CFC00] transition cursor-pointer"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;