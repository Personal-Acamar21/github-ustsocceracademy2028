import React from 'react';
import { motion } from 'framer-motion';

interface HeroSlideProps {
  image: string;
  isActive: boolean;
}

export default function HeroSlide({ image, isActive }: HeroSlideProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={image}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </motion.div>
  );
}