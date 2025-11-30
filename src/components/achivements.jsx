import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, GitBranch, Monitor, Terminal, Database } from 'lucide-react';
import TrailingDotGrid from './TrailingDotGrid';

const cards = [
  { id: 1, Icon: BookOpen, title: 'Introduction to Web APIs', description: 'Understanding REST APIs and calls.' },
  { id: 2, Icon: Monitor, title: 'Introduction to Front-End Development', description: 'Foundations of HTML, CSS, JS.' },
  { id: 3, Icon: Terminal, title: 'Java Programming: Solving Problems', description: 'Problem solving with Java.' },
  { id: 4, Icon: Code, title: 'React Basics from Meta', description: 'Component-based UI development.' },
  { id: 5, Icon: BookOpen, title: 'Web design for beginners', description: 'Design fundamentals and UX basics.' },
  { id: 6, Icon: Monitor, title: 'Programming with JavaScript from Meta', description: 'Core JS concepts and patterns.' },
  { id: 7, Icon: GitBranch, title: 'Version Control', description: 'Git workflows and repository management.' },
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
                <div className="bg-gradient-to-r from-gray-700/40 to-gray-600/30 w-full rounded-xl p-6 flex items-center justify-center" style={{ height: '190px' }}>
                  <card.Icon className="text-white/90" size={96} />
                </div>
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
