import React from 'react';
import homeimg from '../assets/ne1.jpg';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import background from '../assets/backgroundss.jpg';
import bg from '../assets/bg.png';
import text_img from '../assets/text-img.webp';

function Home() {
  return (
    <>
      <section id="home" className="flex flex-col justify-center gap-5 text-center h-screen min-h-[500px] md:flex-row-reverse md:items-center md:justify-evenly p-4 bg-slate-500">
        <div className="relative w-full md:w-auto flex justify-center">
          <div className="relative w-64 h-64">
            {/* Animated Blob */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-customOrange to-amber-700 rounded-full filter blur-xl opacity-70 animate-blob"></div>
            {/* Profile Image */}
            <img
              src={homeimg}
              className="relative max-w-full h-auto mx-auto rounded-full object-cover border-4 border-white shadow-lg"
              alt="Profile picture of Maneesha Gunarathna"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
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
      </section>
    </>
  );
}

export default Home;
