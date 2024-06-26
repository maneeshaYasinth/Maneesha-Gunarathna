import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import homeimg from '../assets/ne2.jpg';
import API_INTRO from '../assets/API_INTRO.png';
import full_js from '../assets/full_js.png';
import git_hub from '../assets/git_hub.png';
import intro_front_end from '../assets/intro_front_end.png';
import java from '../assets/java.png';
import react_basic from '../assets/react_basics.png';
import web_course_1 from '../assets/web_course_1.png';

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
    <div id='Achivements' className="bg-gray-800 min-h-screen p-4 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center" style={{ height: '400px', width: '100%' }}>
                {card.image && (
                  <div className="bg-gradient-to-r from-gray-400  to-gray-300 ">
                    <div className='w-full h-48 border-2 border-gray-300 p-4 flex items-center justify-center overflow-hidden rounded-xl'>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full shadow-xl shadow-zinc-900/50"
                      />
                    </div>
                  </div>
                )}
                <h2 className="text-xl font-bold pt-3 mb-2 text-center">{card.title}</h2>
                <p className="text-center">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Achivements;