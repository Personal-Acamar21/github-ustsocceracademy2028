import React from 'react';
import { motion } from 'framer-motion';

const sponsors = [
  "DIaza Sports",
  "Nicolas Agnone & Co LLC",
  "Apex Mobile Wellness",
  "Brick It Solutions",
  "Piping Rock",
  "Snug Harbor Jewelry INC"
];

export default function SponsorBanner() {
  return (
    <div className="bg-black py-4 overflow-hidden">
      <div className="relative flex">
        <motion.div
          animate={{
            x: [0, -100 * sponsors.length],
          }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
          className="flex flex-nowrap whitespace-nowrap"
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={`${sponsor}-${index}`}
              className="mx-16 transform translate-x-1/2"
            >
              <span className="text-brand-green text-xl md:text-2xl font-bold">
                {sponsor}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}