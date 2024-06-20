// src/components/Achivements.js

import React from 'react';
import homeimg from '../assets/ne2.jpg'
import API_INTRO from '../assets/API_INTRO.png'
import full_js from '../assets/full_js.png'
import git_hub from '../assets/git_hub.png'
import intro_front_end from '../assets/intro_front_end.png'
import java from '../assets/java.png'
import react_basic from '../assets/react_basics.png'
import web_course_1 from '../assets/web_course_1.png'

const cards = [
  { id: 1, image: API_INTRO, title: 'Introduction to Web APIs', description: 'This is the description for card 1.' },
  { id: 2, image: intro_front_end, title: ' Introduction to Front-End Development', description: 'This is the description for card 2.' },
  { id: 3, image: java, title: ' Java Programming: Solving Problems', description: 'This is the description for card 3.' },
  { id: 4, image: react_basic, title: 'React Basics from Meta', description: 'This is the description for card 4.' },
  { id: 5, image: web_course_1, title: 'Web design for beginners', description: 'This is the description for card 5.' },
  { id: 6, image: full_js, title: 'Programming with JavaScript from Meta', description: 'This is the description for card 6.' },
  { id: 7, image: git_hub, title: 'Version Control', description: 'This is the description for card 1.' },
];

const Achivements = () => {
  return (
    <div id='Achivements' className="bg-gray-700 min-h-screen p-4 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover  mb-4"
                />
              )}
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achivements;
