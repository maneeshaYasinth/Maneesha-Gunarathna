import React from "react";
import { motion } from "framer-motion";
import TrailingDotGrid from "./TrailingDotGrid";

const cardVariant = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function AboutMe() {
  const cardStyle =
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-start space-x-0 md:space-x-6 max-w-xl transform transition hover:scale-[1.02] duration-300"

  return (
    <section className="relative min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 -z-10">
        <TrailingDotGrid className="w-full h-full" />
      </div>

      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl font-bold mb-2">Get To Know Me</h1>
        <p className="text-gray-400">
          Here's a brief intro about me, my journey, goals, and vibes.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center z-10">
        {/* Intro Card */}
        <motion.div
          className={cardStyle}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            offscreen: { opacity: 0, x: -50 },
            onscreen: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            },
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Hey! I’m Maneesha Yasinth Gunarathna, a 3rd-year undergraduate in
              BSc Electronics & Computer Science(Specialized in CS) at the University of Kelaniya.
              Passionate about tech, learning, and turning ideas into reality. I
              love building projects that blend design with logic.
            </p>
          </div>
        </motion.div>

        {/* Background Card */}
        <motion.div
          className={cardStyle}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            offscreen: { opacity: 0, x: 50 },
            onscreen: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            },
          }}
          whileHover={{ scale: 1.02 }}
        >
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

        {/* Goals Card */}
        <motion.div
          className={cardStyle}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariant}
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Goals</h2>
            <ul className="space-y-2">
              <li>✅ <del>Got into Computer Science Specialization</del> Done🎉</li>
              <li>🧑‍💻 Master Backend Dev (Spring Boot / Firebase)</li>
              <li>☁️ Earn AWS Cloud Practitioner Cert</li>
              <li>💡 Build practical, impactful systems</li>
            </ul>
          </div>
        </motion.div>

        {/* Interests Card */}
        <motion.div
          className={cardStyle}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            ...cardVariant,
            onscreen: {
              ...cardVariant.onscreen,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Interests</h2>
            <ul className="space-y-2">
              <li>🏎️ Formula 1 (UndercutPit F1 is my site!)</li>
              <li>🎮 Cloud Computing & Web Projects</li>
              <li>🧩 Problem Solving & Debugging</li>
              <li>🧋 Tea, Aesthetic UI, and Noodle-curly hair 👀</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
