import React from 'react'
import TrailingDotGrid from './TrailingDotGrid';
import Achivements from './achivements';

const Education = () => {
  return (
    <>
      <div id='Achivements' className="relative h-screen min-h-[500px] text-white bg-black overflow-hidden flex flex-col items-center justify-center pt-10">

        {/* Background Dot Grid */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <TrailingDotGrid className="w-full h-full" />
        </div>

        {/* Academic Education Heading */}
        <div className="relative z-10 w-full text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Academic Education
          </h1>
          <p className="text-gray-400 text-base">
            Discover the stages of my academic learning journey.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 px-4">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center space-x-6 max-w-xl transition hover:scale-[1.02] duration-300">
            <img
              src="/path-to-logo.png"
              alt="University Logo"
              className="w-16 h-16 object-contain rounded"
            />
            <div>
              <h3 className="text-white text-lg font-semibold">
                Bachelor of Science Hons in Electronics and Computer Science
              </h3>
              <p className="text-gray-300">University of Kelaniya</p>
              <p className="text-gray-400 text-sm">JUL 2023 – Present</p>
              <p className="text-gray-400 text-sm">Sri Lanka</p>
              <p className="text-customOrange mt-2 font-medium border-t-2 border-customOrange">In Progress</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center space-x-6 max-w-xl transition hover:scale-[1.02] duration-300">
            <img
              src="/path-to-logo.png"
              alt="School Logo"
              className="w-16 h-16 object-contain rounded"
            />
            <div>
              <h3 className="text-white text-lg font-semibold">
                GCE Odinary Level and GCE Advance Level
              </h3>
              <br />
              <p className="text-gray-300">CWW Kannangara Central College, Mathugama</p>
              <p className="text-gray-400 text-sm">2012 – 2020</p>
              <p className="text-gray-400 text-sm">Sri Lanka</p>
              <p className="text-customOrange mt-2 font-medium border-t-2 border-customOrange">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education;
