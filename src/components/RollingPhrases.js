"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "for Autonomous Negotiation",
  "for Innovation",
  "for Streamlined negotiations",
  "for Transparency",
  "for Reduced Time-to-Hire",
  "for Scale",
  "for Cost-Effective Scaling",
  "for Availability 24x7",
];

export default function RollingPhrases() {
  const [index, setIndex] = useState(0);

  const nextPhrase = () => {
    setIndex((prev) => (prev + 1) % phrases.length);
  };

  return (
    <div className="overflow-hidden h-6 mt-2 relative">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={nextPhrase}
          className="whitespace-nowrap"
        >
          {phrases[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
