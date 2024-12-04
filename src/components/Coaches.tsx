import React from 'react';
import { motion } from 'framer-motion';

const coaches = [
  {
    name: "Coach Zack",
    role: "Technical Director",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    credentials: "UEFA A License",
    experience: "15+ years"
  },
  {
    name: "Coach Agnone",
    role: "Head Coach - Elite Academy",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png",
    credentials: "USSF A License",
    experience: "12+ years"
  },
  {
    name: "Coach Brick",
    role: "Head Coach - Youth Development",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    credentials: "UEFA B License",
    experience: "10+ years"
  }
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Coaching Staff
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <motion.img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h3 className="font-semibold text-lg">{coach.name}</h3>
              <p className="text-brand-green">{coach.role}</p>
              <div className="mt-2 text-sm text-gray-600">
                <p>{coach.credentials}</p>
                <p>{coach.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}