import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "Services", "Projects", "About", "Contact"];

  // ✅ Updated to use 'path' for new individual pages
  const servicesDropdown = [
    { name: "Branding & Identity", path: "/branding" },
    { name: "Web Design & UI/UX", path: "/uiux" },
    { name: "Web Development", path: "/dev" },
    { name: "Digital Marketing", path: "/marketing" },
    { name: "E-commerce Solutions", path: "/ecommerce" }
  ];

  const handleNavigation = (item) => {
    const paths = {
      Home: "/",
      Services: "/services", // Keep this if you still want a main services overview
      Projects: "/projects",
      About: "/about",
      Contact: "/contact"
    };
    navigate(paths[item]);
    setIsOpen(false);
  };

  // ✅ Updated to navigate directly to the new page path
  const handleServiceClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[100] bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* 🔹 Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <img 
                src="/ops logo.png" 
                alt="Logo" 
                className="h-20 md:h-24 w-auto object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_16px_35px_rgba(124,252,0,0.35)]"
              />
              <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#7CFC00]/25"></div>
            </div>
          </Link>
        </div>

        {/* 🔹 Desktop Nav */}
        <div className="hidden md:flex flex-[2] justify-center">
          <ul className="flex items-center gap-8 font-bold text-gray-600 uppercase text-sm tracking-widest">
            {navItems.map((item) => (
              <li key={item} className="relative group cursor-pointer py-2">
                <div 
                  onClick={() => handleNavigation(item)}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                  {item === "Services" && (
                    <FiChevronDown className="text-lg transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </div>

                {/* 🔽 SERVICES DROPDOWN */}
                {item === "Services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 rounded-2xl py-5 w-72 overflow-hidden">
                      {servicesDropdown.map((service, i) => (
                        <div
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(service.path); // ✅ Using service.path
                          }}
                          className="px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all cursor-pointer text-[13px] font-bold flex items-center justify-between group/item"
                        >
                          {service.name}
                          <span className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#7CFC00]">→</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Hover line indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7CFC00] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Right Side */}
        <div className="flex-1 flex justify-end items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-3xl text-gray-800 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          
          <button onClick={() => navigate('/contact')} className="hidden md:block bg-[#111c70] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#7CFC00] hover:text-black transition-all">
            Get Started
          </button>
        </div>
      </div>
      
      {/* 📱 Mobile Menu */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] border-t border-gray-100' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-4 py-8 px-6 font-bold text-gray-800">
          {navItems.map((item) => (
            <li key={item}>
              <div 
                className="flex justify-between items-center text-lg py-2"
                onClick={() => handleNavigation(item)}
              >
                {item}
                {item === "Services" && <FiChevronDown />}
              </div>
              
              {item === "Services" && (
                <ul className="flex flex-col gap-2 mt-2 ml-4 border-l-2 border-gray-100 pl-4 font-semibold text-gray-500">
                  {servicesDropdown.map((service, i) => (
                    <li 
                      key={i} 
                      onClick={() => handleServiceClick(service.path)} // ✅ Using service.path
                      className="text-sm py-2 hover:text-blue-600 transition cursor-pointer"
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