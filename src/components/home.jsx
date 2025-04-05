// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import homeimg from '../assets/ne1.jpg';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Optionally, you can add some logic here for animations or effects if needed
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col justify-center gap-5 text-center h-screen min-h-[500px] p-4 text-white bg-black mt-10 relative"
    >
      {/* White dots over black background */}
      <div className="absolute top-0 left-0 w-full h-full bg-none z-10">
        {/* Adding multiple dots */}
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full flex justify-center z-20">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customOrange to-amber-700 rounded-full filter blur-xl opacity-70 animate-blob"></div>
          <img
            src={homeimg}
            className="relative max-w-full h-auto mx-auto rounded-full object-cover border-4 border-white shadow-lg"
            alt="Profile picture of Maneesha Gunarathna"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full md:w-1/2 mx-auto z-20">
        <h1 className="text-6xl text-customOrange font-bold">
          Maneesha
          <br />
          Gunarathna
        </h1>
        <h2 className="text-2xl">Frontend Developer</h2>
        <span className="flex justify-center gap-6">
          <a href="https://www.instagram.com/maneesha_yasinth/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-7 h-7" />
          </a>
          <a href="https://github.com/maneeshaYasinth" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/maneesha-yasinth/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </span>
        <p className="max-w-prose mx-auto">
          Hi, I'm Maneesha, a developer passionate about innovation. Explore my projects and skills. Let's create something amazing together!
        </p>
      </div>

      {/* Adding styles directly to the file */}
      <style jsx>{`
        /* CSS for white dots */
        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: white;
          opacity: 0.7;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        /* Hover effect to increase the size of dots */
        .dot:hover {
          transform: scale(1.8);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export default Home;
