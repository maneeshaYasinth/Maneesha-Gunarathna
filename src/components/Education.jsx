import React from 'react'
import TrailingDotGrid from './TrailingDotGrid';


const Education = () => {
  return (<>
      <div id='Achivements' className="relative  h-screen min-h-[500px] text-white bg-black overflow-hidden flex items-center justify-center pt-10">

      {/* Background Dot Grid */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <TrailingDotGrid className="w-full h-full"/>
      </div>
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center space-x-6 max-w-xl transition hover:scale-[1.02] duration-300">
      
  <img
    src="/path-to-logo.png" // Replace with your actual logo path
    alt="University Logo"
    className="w-16 h-16 object-contain rounded"
  />
  <div>
    <h3 className="text-white text-lg font-semibold">
      Bachelor of Science Hons in  Electronics and Computer Science
    </h3>
    <p className="text-gray-300">University of Kelaniya</p>
    <p className="text-gray-400 text-sm">JUL 2023 – Present</p>
    <p className="text-gray-400 text-sm">Sri Lanka</p>
    <p className="text-blue-400 mt-2 font-medium">In Progress</p>
  </div>
</div>
</div>
</>
  )
}

export default Education
