import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg navbar font-krona bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <ScrollLink id="home" onClick={scrollTo}>Home</ScrollLink>
            <ScrollLink id="about" onClick={scrollTo}>About</ScrollLink>
            <ScrollLink id="education" onClick={scrollTo}>Education</ScrollLink>
            <ScrollLink id="experience" onClick={scrollTo}>Experience</ScrollLink>
            <ScrollLink id="contact" onClick={scrollTo}>Contact</ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden absolute right-4">
            <button className="p-2 text-white rounded-md" onClick={toggleMenu}>
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-full h-full bg-black bg-opacity-80 p-4 space-y-4 justify-center">
            <div className="flex items-center justify-between">
              <button className="text-white" onClick={toggleMenu}>
                <FiX className="w-10 h-10" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 text-white text-center bg-black bg-opacity-80 m-0">
              <ScrollMobile id="home" onClick={scrollTo}>Home</ScrollMobile>
              <ScrollMobile id="about" onClick={scrollTo}>About</ScrollMobile>
              <ScrollMobile id="education" onClick={scrollTo}>Education</ScrollMobile>
              <ScrollMobile id="experience" onClick={scrollTo}>Experience</ScrollMobile>
              <ScrollMobile id="contact" onClick={scrollTo}>Contact</ScrollMobile>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* Desktop Link Component (keeps old glow + underline animation) */
const ScrollLink = ({ id, onClick, children }) => (
  <button
    onClick={() => onClick(id)}
    className="relative px-4 py-2 text-lg font-medium text-white rounded-full 
               hover:text-pink-100
               after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-500 
               after:left-0 after:bottom-0 after:transition-transform after:duration-300 
               after:scale-x-0 hover:after:scale-x-100 
               after:shadow-[0_0_10px_gray,0_0_20px_gray,0_0_30px_gray]"
  >
    {children}
  </button>
);

/* Mobile Sidebar Link (simple white text) */
const ScrollMobile = ({ id, onClick, children }) => (
  <button onClick={() => onClick(id)} className="text-white text-2xl">
    {children}
  </button>
);

export default Navbar;
