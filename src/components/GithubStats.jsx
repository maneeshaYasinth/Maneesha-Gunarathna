import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  return (
    <>
      <div
        id="Achivements"
        className="relative h-screen min-h-[500px] text-white bg-black overflow-hidden flex flex-col items-center justify-center pt-0"
      >
       
        <div className="relative z-10 w-full text-center mb-12 px-4">
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              My GitHub Stats
            </h1>
            <p className="text-gray-400 text-base">
              See how my progress is going on GitHub.
            </p>
          </motion.div>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 px-4">
          {/* Card 1 */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center max-w-xl transition hover:scale-[1.02] duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ManeeshaYasinth&show_icons=true&theme=radical"
                alt="GitHub Stats"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center max-w-xl transition hover:scale-[1.02] duration-300">
              <img
                src="https://streak-stats.demolab.com?user=ManeeshaYasinth&theme=dark"
                alt="GitHub Streak"
              />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex items-center max-w-xl transition hover:scale-[1.02] duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ManeeshaYasinth&layout=compact&theme=radical"
                alt="Top Languages"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default GithubStats;
