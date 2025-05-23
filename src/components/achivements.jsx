import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

import API_INTRO from '../assets/API_INTRO.png';
import full_js from '../assets/full_js.png';
import git_hub from '../assets/git_hub.png';
import intro_front_end from '../assets/intro_front_end.png';
import java from '../assets/java.png';
import react_basic from '../assets/react_basics.png';
import web_course_1 from '../assets/web_course_1.png';
import TrailingDotGrid from './TrailingDotGrid';

const cards = [
  { id: 1, image: API_INTRO, title: 'Introduction to Web APIs', description: 'This is the description for card 1.' },
  { id: 2, image: intro_front_end, title: 'Introduction to Front-End Development', description: 'This is the description for card 2.' },
  { id: 3, image: java, title: 'Java Programming: Solving Problems', description: 'This is the description for card 3.' },
  { id: 4, image: react_basic, title: 'React Basics from Meta', description: 'This is the description for card 4.' },
  { id: 5, image: web_course_1, title: 'Web design for beginners', description: 'This is the description for card 5.' },
  { id: 6, image: full_js, title: 'Programming with JavaScript from Meta', description: 'This is the description for card 6.' },
  { id: 7, image: git_hub, title: 'Version Control', description: 'This is the description for card 7.' },
];

const Achivements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id='Achivements' className="relative min-h-screen text-white bg-black overflow-hidden pt-0 mt-0">

      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <TrailingDotGrid className="w-full h-full" />
      </div>

      {/* Heading */}
      <motion.div
        className="relative z-10 w-full text-center mt-10 mb-6 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
      <div className="relative z-10 w-full text-center mt-10 mb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My Professional certifications
        </h1>
        <p className="text-gray-400 text-base">
          Achievements and recognitions earned through learning platforms.
        </p>
      </div>
      </motion.div>

      {/* Carousel */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-20">
        <Slider {...settings}>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-6 flex flex-col items-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style={{ height: '400px', width: '100%' }}>
                {card.image && (
                  <div className="bg-gradient-to-r from-gray-400 to-gray-300">
                    <div className='w-full h-48 border-2 border-gray-300 p-4 flex items-center justify-center overflow-hidden rounded-xl'>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full shadow-xl shadow-zinc-900/50"
                      />
                    </div>
                  </div>
                )}
                <h2 className="text-xl font-bold pt-3 mb-2 text-center text-white">{card.title}</h2>
                <p className="text-center text-gray-200">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Achivements;
