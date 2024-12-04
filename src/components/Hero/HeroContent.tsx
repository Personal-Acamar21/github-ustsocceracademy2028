import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../Button';

export default function HeroContent() {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
      <motion.h1 
        className="text-4xl sm:text-6xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Develop Your Soccer Skills
        <span className="block text-brand-green">Shape Your Future</span>
      </motion.h1>
      
      <motion.p 
        className="text-xl text-white mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Join the premier youth soccer academy where champions are made through dedication, skill, and passion.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button
          to="/tryouts"
          className="bg-brand-green text-black px-8 py-3 rounded-full hover:bg-brand-green/90 inline-flex items-center"
        >
          Join Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
}