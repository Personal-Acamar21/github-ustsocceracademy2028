import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Calendar } from 'lucide-react';
import Button from './Button';

export default function LaunchBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-black via-black to-[#00FF00]/20 text-white py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-[#00FF00]" />
          <span className="text-sm md:text-base">
            New Website Launch Special: 10% off Spring Programs!
          </span>
        </div>
        <Button
          to="/events"
          className="text-sm bg-[#00FF00] text-black px-4 py-1 rounded-full hover:bg-[#00FF00]/90"
        >
          Register Now
        </Button>
      </div>
    </motion.div>
  );
}