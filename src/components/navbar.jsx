import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg navbar font-krona bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="relative flex items-center justify-center h-16 ">
          {/* Nav Links - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4 ">
          <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Education">Education</NavLink>
            <NavLink to="/Achivements">Achivements</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden absolute right-4">
            <button
              className="p-2 text-white rounded-md"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Content */}
          <div className="w-full h-full bg-black bg-opacity-80 p-4 space-y-4 justify-center">
            {/* Close Button */}
            <div className="flex items-center  justify-between">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX className="w-10 h-10" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-black bg-opacity-80 text-white text-center m-0" onClick={toggleMenu}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/education">Education</NavLink>
              <NavLink to="/Achivements">Achivements</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Overlay - Close Sidebar on Click */}
          {/* <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          ></div> */}
        </div>
      )}
    </nav>
  );
};

// NavLink Component for Consistency
const NavLink = ({ to, children }) => {
  return (
    <Link
    to={to}
  className="relative w-full px-4 py-2 text-lg font-medium text-white rounded-full 
             hover:text-pink-100
             after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-500 
             after:left-0 after:bottom-0 after:transition-transform after:duration-300 
             after:scale-x-0 hover:after:scale-x-100 
             after:shadow-[0_0_10px_gray,0_0_20px_gray,0_0_30px_gray]"
>
  {children}
</Link>

  );
};

export default Navbar;
