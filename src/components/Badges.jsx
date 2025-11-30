import React from "react";
import { motion } from 'framer-motion';
import awsKnowledge from '../assets/badges/cloud101.png';
import storage from "../assets/badges/cloud-storage.png";
import postman from "../assets/badges/postman.png";
import cloudEssential from "../assets/badges/aws-knowledge-cloud-essentials.png";
// import TrailingDotGrid from "./TrailingDotGrid"; // Uncomment if needed

const badges = [
  {
    title: "Postman API Fundementals",
    issuer: "Postman",
    img: postman,
  },
  {
    title: "Cloud Essentials",
    issuer: "AWS",
    img: cloudEssential,
  },
  {
    title: "Cloud 101",
    issuer: "aws",
    img: awsKnowledge,
  },
  {
    title: "Cloud Storage",
    issuer: "aws",
    img: storage,
  },
];

export default function ProfessionalBadges() {
  return (
    <motion.section className="bg-black text-white pt-10 pb-6 px-6 flex flex-col items-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.15 }}>
      {/* Optional: Uncomment if using background effects */}
      {/* <div className="absolute inset-0 z-1 pointer-events-none mt-16">
        <TrailingDotGrid className="w-full h-full" />
      </div> */}

      <h1 className="text-4xl font-bold mb-4 text-center">My Professional Badges</h1>
      <p className="text-gray-400 mb-8 text-center max-w-xl">
        Achievements and recognitions earned through learning platforms
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {badges.map((badge, index) => (
          <motion.div key={index} className="flex flex-col items-center space-y-2" initial={{ opacity: 0, y: 10, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, delay: index * 0.06 }} viewport={{ once: true, amount: 0.2 }}>
            <img
              src={badge.img}
              alt={badge.title}
              className="w-28 h-28 object-contain rounded-lg shadow-md border border-white/10 bg-white/5 p-2"
            />
            <p className="text-sm font-semibold text-center">{badge.title}</p>
            <p className="text-xs text-gray-500 text-center">{badge.issuer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
