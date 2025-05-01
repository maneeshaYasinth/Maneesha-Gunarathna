import React from 'react';
import Experience from '../components/Experience';
import Badges from '../components/Badges';
import TrailingDotGrid from '../components/TrailingDotGrid';

const ExperiencePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background applied once for the whole page */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <TrailingDotGrid className="w-full h-full" />
      </div>

      {/* Content sections */}
      <Experience />
      <Badges />
    </div>
  );
};

export default ExperiencePage;
