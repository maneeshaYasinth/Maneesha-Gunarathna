import React from 'react';
import homeimg from '../assets/ne1.jpg'; 

const Home = () => {
  return (
   
      <div className="flex flex-col md:flex-row items-center justify-center mt-32 max-w-6xl mx-auto">
        <div className="flex-1 p-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to <strong className='text-customOrange'>MANEESHA</strong>'s Portfolio</h1>
          <p className="text-lg md:text-xl">Hi, I'm Maneesha, a developer passionate about innovation. Explore my projects and skills. Let's create something amazing together!</p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src={homeimg} alt="Profile" className="rounded-lg w-full max-w-sm" />
        </div>
      </div>
    
  );
};

export default Home;
