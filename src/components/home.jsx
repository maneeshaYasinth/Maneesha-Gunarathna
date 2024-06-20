import React from 'react';
import homeimg from '../assets/ne1.jpg';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="flex flex-col justify-center gap-5 text-center h-screen min-h-[500px] md:flex-row-reverse md:items-center md:justify-evenly p-4">
      <div className="relative w-full md:w-auto">
        <img
          src={homeimg}
          className="max-w-full h-auto mx-auto md:max-w-[250px] lg:max-w-[300px] object-cover"
          alt="Profile picture of Maneesha Gunarathna"
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-auto">
        <h1 className="text-4xl font-bold">
          Maneesha
          <br />
          Gunarathna
        </h1>
        <h2 className="text-2xl">Frontend Developer</h2>
        <span className="flex justify-center gap-6">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-7 h-7" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-7 h-7" />
          </a>
        </span>
        <p className="max-w-[24ch] mx-auto">
          Hi, I'm Maneesha, a developer passionate about innovation. Explore my projects and skills. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default Home;
