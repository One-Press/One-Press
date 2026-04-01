import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Services", "Projects", "About", "Contact"];
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item === "Home") {
      navigate("/");
    } 
    else if (item === "Services") {
      navigate("/services");
    } 
    else if (item === "Projects") {
      navigate("/projects"); // ✅ FIXED
    } 
    else if (item === "About") {
      navigate("/about");
    } 
    else if (item === "Contact") {
      navigate("/contact");
    }

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
                onClick={() => handleNavigation(item)}
                className="cursor-pointer hover:text-blue-600 transition-colors duration-200 whitespace-nowrap text-base lg:text-lg"
              >
                {item}
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

          {/* Optional CTA */}
          {/* 
          <button className="hidden md:block bg-[#111c70] text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-800 transition-all">
            Get Started
          </button> 
          */}
        </div>
      </div>
      
      {/* 📱 Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-50 transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col items-center gap-6 py-10 font-bold text-gray-800">
          {navItems.map((item) => (
            <li 
              key={item} 
              onClick={() => handleNavigation(item)} 
              className="text-xl cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;