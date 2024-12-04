import React from 'react';
import { motion } from 'framer-motion';

interface CoachCardProps {
  name: string;
  role: string;
  image: string;
  credentials: string;
  experience: string;
  index: number;
}

export default function CoachCard({ name, role, image, credentials, experience, index }: CoachCardProps) {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-brand-green">{role}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p>{credentials}</p>
        <p>{experience}</p>
      </div>
    </motion.div>
  );
}