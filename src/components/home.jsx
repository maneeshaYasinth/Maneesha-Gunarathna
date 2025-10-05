import React from 'react';
import homeimg from '../assets/ne1.jpg';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import TrailingDotGrid from './TrailingDotGrid';

function Home() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[500px] text-white bg-black overflow-hidden flex items-center justify-center pt-16"
    >
      {/* 🎯 Interactive Dot Grid Background */}
      <TrailingDotGrid />

      {/* 🧍‍♂️ Foreground Content */}
      <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center gap-5 p-4  pt-4 text-center">
        <div className="relative w-64 h-64">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customOrange to-amber-700 rounded-full filter blur-xl opacity-70 animate-blob "></div>
          <img
            src={homeimg}
            className="relative max-w-full h-auto mx-auto rounded-full object-cover border-4 border-white shadow-lg"
            alt="Profile picture of Maneesha Gunarathna"
          />
        </div>

        <div className="flex flex-col gap-5 w-full md:w-1/2 mx-auto">
          <h1 className="text-6xl text-customOrange font-bold">
            Maneesha
            <br />
            Gunarathna
          </h1>
          <h2 className="text-2xl">Full-Stack Developer | cloud Enthusiast | Electronics & Computer Science Undergraduate (sp in cs) | University of Kelaniya</h2>
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
          {/* <p className="max-w-prose mx-auto">
            Hi, I'm Maneesha, a developer passionate about innovation. Explore my projects and skills. Let's create something amazing together!
          </p> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
