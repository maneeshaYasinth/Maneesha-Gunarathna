import React from "react";
import { motion } from "framer-motion";
import TrailingDotGrid from "./TrailingDotGrid";
import awsimg from '../assets/positions/aws.jpeg';
import medusaimg from '../assets/positions/medusa.png';
import ecsclogo from '../assets/positions/ecsclogo.png';
import robotbattle from '../assets/positions/robobattle.svg';

const cardVariant = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const positions = [
  {
    role: "Junior Treasurer",
    org: "AWS Cloud Club",
    date: "11/2024 - PRESENT",
    location: "University of Kelaniya",
    img: awsimg,
    bullets: [
      "Manage budgets, expenses, and funding for club initiatives.",
      "Ensure financial transparency and support sponsorship efforts.",
    ],
  },
  {
    role: "Project Manager",
    org: "UOK Robot Battle 2k25",
    date: "03/2025 - PRESENT",
    location: "University of Kelaniya",
    img: robotbattle,
    bullets: [
      "Plan and oversee project timelines, resources, and deliverables for the UOK Robot Battle competition.",
      "Coordinate cross-functional teams to ensure successful event execution.",
    ],
  },
  {
    role: "Web Developer",
    org: "UOK Robot Battle 2k24",
    date: "11/2024 - PRESENT",
    location: "University of Kelaniya",
    img: ecsclogo,
    bullets: [
      "Designed and maintained the competition’s website to showcase event.",
      "Collaborated with teams to integrate technical solutions for club activities.",
    ],
  },
  {
    role: "PR Coordinator and Web Developer",
    org: "MEDUSA 1.0",
    date: "11/2024 - 12/2024",
    location: "University of Kelaniya",
    img: medusaimg,
    bullets: [
      "Designed and maintained the organization’s website.",
      "Handled PR campaigns and partner relationships.",
    ],
  },
];

export default function Positions() {
  const cardStyle =
    "bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex flex-col space-y-4 max-w-xl transform transition hover:scale-[1.02] duration-300";

  return (
    <section className="relative min-h-screen bg-black text-white px-4 py-20 flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Background Dot Grid */}
      {/* <div className="absolute inset-0 -z-10">
        <TrailingDotGrid className="w-full h-full" />
      </div> */}

      <div className="text-center mb-12 z-10">
        <h1 className="text-4xl font-bold mb-2">My Positions</h1>
        <p className="text-gray-400">Leadership, Web Dev, and Project Roles</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center z-10">
  {positions.map((pos, index) => (
    <motion.div
      key={index}
      className={cardStyle}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        offscreen: { opacity: 0, y: 50 },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: index * 0.1 },
        },
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        {pos.img && (
          <img
            src={pos.img}
            alt={pos.org + " logo"}
            className="w-14 h-14 rounded-full object-contain border border-white/20"
          />
        )}
        <h2 className="text-xl font-semibold">{pos.role}</h2>
        <p className="text-sm text-gray-400">{pos.org}</p>
        <p className="text-xs text-gray-500 italic"><b>
          {pos.date} | {pos.location}</b>
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-300 text-left">
          {pos.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}
