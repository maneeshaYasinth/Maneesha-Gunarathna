import React from 'react'
import { motion } from 'framer-motion';
import uokLogo from '../assets/uok.png';
import kccLogo from '../assets/KCC.png';

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 🔥 Section-level overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10"></div>

      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Academic Education
        </h1>
        <p className="text-gray-400 text-base">
          Discover the stages of my academic learning journey.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-6 px-4">

        {/* Card 1 */}
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center space-x-6 max-w-xl transition hover:scale-[1.02] duration-300">
            <img
              src={uokLogo}
              alt="University Logo"
              className="w-16 h-16 object-contain rounded"
            />
            <div>
              <h3 className="text-white text-lg font-semibold">
                Bachelor of Science (Hons) in Electronics & Computer Science
              </h3>
              <p className="text-gray-300">University of Kelaniya</p>
              <p className="text-gray-400 text-sm">JUL 2023 – Present</p>
              <p className="text-gray-400 text-sm">Sri Lanka</p>
              <p className="text-customOrange mt-2 font-medium border-t-2 border-customOrange pt-1">
                In Progress
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center space-x-6 max-w-xl transition hover:scale-[1.02] duration-300">
            <img
              src={kccLogo}
              alt="School Logo"
              className="w-16 h-16 object-contain rounded"
            />
            <div>
              <h3 className="text-white text-lg font-semibold">
                GCE Ordinary Level & Advanced Level
              </h3>
              <p className="text-gray-300">
                CWW Kannangara Central College, Mathugama
              </p>
              <p className="text-gray-400 text-sm">2012 – 2020</p>
              <p className="text-gray-400 text-sm">Sri Lanka</p>
              <p className="text-customOrange mt-2 font-medium border-t-2 border-customOrange pt-1">
                Completed
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
