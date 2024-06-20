// src/components/Achivements.js

import React from 'react';

const cards = [
  { id: 1, title: 'Card 1', description: 'This is the description for card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for card 5.' },
  { id: 6, title: 'Card 6', description: 'This is the description for card 6.' },
];

const Achivements = () => {
  return (
    <div id='Achivements' className="bg-gray-700 min-h-screen p-4 flex justify-center items-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achivements;
