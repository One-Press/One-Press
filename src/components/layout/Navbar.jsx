import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Services", "Projects", "About", "Contact"];
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    const target = item.toLowerCase(); // "services" or "projects"

    if (item === "Home") navigate("/");
    else if (item === "About") navigate("/about");
    else if (item === "Contact") navigate("/contact");
    else if (item === "Services" || item === "Projects") {
      // If we aren't on Home, navigate there first
      if (location.pathname !== "/") {
        navigate("/");
        // Use a slight delay to allow the page to mount
        setTimeout(() => scrollSection(target), 100);
      } else {
        scrollSection(target);
      }
    }

    setIsOpen(false);
  };

  const scrollSection = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 500,
      offset: -80, // Adjust based on your Navbar height
    });
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex-shrink-0 ml-[60px] z-10">
  <Link to="/" className="flex items-center gap-3">
    <img 
      src="/images/logo2.png" 
      alt="OnePress Logo" 
      className="h-10 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
      onError={(e) => {
        e.target.onerror = null; 
        e.target.src = "https://via.placeholder.com/150x50?text=OnePress";
      }}
    />
    {/* Added text-black and font-extrabold here */}
    <span className="text-[32px] font-extrabold text-[#111c70] tracking-tighter">
  OnePress
</span>
  </Link>
</div>

        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-12 font-semibold text-gray-700 text-lg">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleNavigation(item)}
              className="cursor-pointer hover:text-blue-600 transition-all"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu remains the same */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center gap-6 py-6 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item} onClick={() => handleNavigation(item)} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;