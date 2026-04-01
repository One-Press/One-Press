import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Services", "Projects", "About", "Contact"];

  const servicesDropdown = [
    { name: "Branding & Identity", id: "branding" },
    { name: "Web Design & UI/UX", id: "uiux" },
    { name: "Web Development", id: "dev" },
    { name: "Digital Marketing", id: "marketing" },
    { name: "E-commerce Solutions", id: "ecommerce" }
  ];

  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item === "Home") navigate("/");
    else if (item === "Services") navigate("/services");
    else if (item === "Projects") navigate("/projects");
    else if (item === "About") navigate("/about");
    else if (item === "Contact") navigate("/contact");

    setIsOpen(false);
  };

  const handleServiceClick = (id) => {
    navigate(`/services#${id}`);
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-[100] bg-white shadow-sm border-b border-gray-100">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-6 h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* 🔹 Logo */}
        <div className="flex justify-start items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo2.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => { e.target.src = "https://via.placeholder.com/40?text=OP"; }}
            />
            <span className="text-2xl font-extrabold text-[#111c70] tracking-tighter hidden sm:block">
              OnePress
            </span>
          </Link>
        </div>

        {/* 🔹 Desktop Nav */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex items-center gap-8 lg:gap-10 font-semibold text-gray-600">
            
            {navItems.map((item) => (
              <li
                key={item}
                className="relative group cursor-pointer whitespace-nowrap text-base lg:text-lg"
              >
                {/* 
                    Main Navigation Link: 
                    - Clicking the text triggers handleNavigation (navigates to the page)
                */}
                <span 
                  onClick={() => handleNavigation(item)}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </span>

                {/* 🔽 SERVICES DROPDOWN */}
                {item === "Services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                    
                    <div className="bg-white shadow-xl border border-gray-100 rounded-xl py-4 w-64">
                      {servicesDropdown.map((service, i) => (
                        <div
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent li click
                            handleServiceClick(service.id);
                          }}
                          className="px-5 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition cursor-pointer text-sm font-medium"
                        >
                          {service.name}
                        </div>
                      ))}
                    </div>

                  </div>
                )}

              </li>
            ))}

          </ul>
        </div>

        {/* 🔹 Right Side */}
        <div className="flex justify-end items-center">
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-3xl text-gray-700"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>
      
      {/* 📱 Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-50 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-6 py-10 font-bold text-gray-800">
          {navItems.map((item) => (
            <li 
              key={item} 
              className="text-xl cursor-pointer text-center"
            >
              <div onClick={() => handleNavigation(item)}>{item}</div>
              
              {/* Mobile Sub-menu for Services */}
              {item === "Services" && (
                <ul className="flex flex-col items-center gap-3 mt-4 font-medium text-gray-500">
                  {servicesDropdown.map((service, i) => (
                    <li 
                      key={i} 
                      onClick={() => handleServiceClick(service.id)}
                      className="text-base hover:text-blue-600 transition"
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