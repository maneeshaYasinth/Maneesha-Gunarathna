import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollRef = useRef(null);

  const smoothScrollTo = (targetY, duration = 650) => {
    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: targetY, behavior: 'auto' });
      return;
    }

    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    if (scrollRef.current) cancelAnimationFrame(scrollRef.current);

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(t);
      window.scrollTo(0, Math.round(startY + distance * eased));
      if (t < 1) {
        scrollRef.current = requestAnimationFrame(step);
      }
    };

    scrollRef.current = requestAnimationFrame(step);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.offsetHeight : 64;
      const rect = el.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - navHeight - 8;
      smoothScrollTo(targetY, 700);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (scrollRef.current) cancelAnimationFrame(scrollRef.current);
    };
  }, []);

  useEffect(() => {
    // Observe the canonical list of section IDs used by the navbar so non-<section> containers (e.g. the contact <div>) are included
    const ids = ['home', 'about', 'education', 'achivements', 'badges', 'experience', 'contact'];
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin: '0px 0px -40% 0px', threshold: [0.35, 0.5, 0.8] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg navbar font-krona bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <ScrollLink id="home" onClick={scrollTo} active={activeId === 'home'}>Home</ScrollLink>
            <ScrollLink id="about" onClick={scrollTo} active={activeId === 'about'}>About</ScrollLink>
            <ScrollLink id="education" onClick={scrollTo} active={activeId === 'education'}>Education</ScrollLink>
            <ScrollLink id="experience" onClick={scrollTo} active={activeId === 'experience'}>Experience</ScrollLink>
            <ScrollLink id="contact" onClick={scrollTo} active={activeId === 'contact'}>Contact</ScrollLink>
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
              <ScrollMobile id="home" onClick={scrollTo} active={activeId === 'home'}>Home</ScrollMobile>
              <ScrollMobile id="about" onClick={scrollTo} active={activeId === 'about'}>About</ScrollMobile>
              <ScrollMobile id="education" onClick={scrollTo} active={activeId === 'education'}>Education</ScrollMobile>
              <ScrollMobile id="experience" onClick={scrollTo} active={activeId === 'experience'}>Experience</ScrollMobile>
              <ScrollMobile id="contact" onClick={scrollTo} active={activeId === 'contact'}>Contact</ScrollMobile>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

/* Desktop Link Component (keeps old glow + underline animation) */
const ScrollLink = ({ id, onClick, children, active }) => {
  const activeClasses = active ? 'after:scale-x-100 after:bg-customOrange text-customOrange' : '';
  return (
    <button
      onClick={() => onClick(id)}
      className={"relative px-4 py-2 text-lg font-medium text-white rounded-full hover:text-pink-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-500 after:left-0 after:bottom-0 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:shadow-[0_0_10px_gray,0_0_20px_gray,0_0_30px_gray] " + activeClasses}
    >
      {children}
    </button>
  );
};

/* Mobile Sidebar Link (simple white text) */
const ScrollMobile = ({ id, onClick, children, active }) => (
  <button onClick={() => onClick(id)} className={"text-2xl " + (active ? 'text-customOrange font-semibold underline decoration-customOrange' : 'text-white')}>
    {children}
  </button>
);

export default Navbar;
