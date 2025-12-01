import React from "react";
import { motion } from "framer-motion";
import TrailingDotGrid from "./TrailingDotGrid";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardStyle =
  "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start space-x-0 md:space-x-6 max-w-xl transform transition hover:scale-[1.02] duration-300";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center justify-center overflow-hidden z-0"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 -z-10">
        <TrailingDotGrid className="w-full h-full" />
      </div>

      {/* Heading */}
      <motion.div className="text-center mb-12 z-10" variants={item}>
        <h1 className="text-4xl font-bold mb-2">Get To Know Me</h1>
        <p className="text-gray-400">
          Here's a brief intro about me, my journey, goals, and vibes.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center z-10"
        variants={container}
      >
        {/* Introduction */}
        <motion.div className={cardStyle} variants={item} whileHover={{ scale: 1.02 }}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Hey! I’m Maneesha Yasinth Gunarathna, a 3rd-year undergraduate in
              BSc Electronics & Computer Science (Specialized in CS) at the
              University of Kelaniya. Passionate about tech, learning, and
              turning ideas into reality. I love building projects that blend
              design with logic.
            </p>
          </div>
        </motion.div>

        {/* Background */}
        <motion.div className={cardStyle} variants={item} whileHover={{ scale: 1.02 }}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <ul className="space-y-2">
              <li>🎓 Degree: Electronics & Computer Science (Specialized in CS)</li>
              <li>🏫 University: University of Kelaniya, SL</li>
              <li>🎂 Birthday: July 23</li>
              <li>📍 Location: Sri Lanka (GMT+5:30)</li>
              <li>🗣️ Languages: English, Sinhala</li>
            </ul>
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div className={cardStyle} variants={item} whileHover={{ scale: 1.02 }}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Goals</h2>
            <ul className="space-y-2">
              <li>✅ <del>Got into Computer Science Specialization</del> Done 🎉</li>
              <li>🧑‍💻 Master Backend Dev (Spring Boot / Firebase)</li>
              <li>☁️ Earn AWS Cloud Practitioner Cert</li>
              <li>💡 Build practical, impactful systems</li>
            </ul>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div className={cardStyle} variants={item} whileHover={{ scale: 1.02 }}>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Interests</h2>
            <ul className="space-y-2">
              <li>🏎️ Formula 1 (UndercutPit F1 is my site!)</li>
              <li>🎮 Cloud Computing & Web Projects</li>
              <li>🧩 Problem Solving & Debugging</li>
              <li>🧋 Tea, Aesthetic UI 👀</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
