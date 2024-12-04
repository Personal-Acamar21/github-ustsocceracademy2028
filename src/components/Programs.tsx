import React from 'react';
import { motion } from 'framer-motion';
import { Dribbble, Users, Trophy, Star, Heart, Sparkles } from 'lucide-react';
import Button from './Button';

const iconMap = {
  Dribbble,
  Users,
  Trophy,
  Star,
  Heart,
  Sparkles
};

const programs = [
  {
    title: "Cozy Feet",
    description: "Early development program for ages 2-7",
    icon: "Star",
    ageRange: "2-7 years",
    path: "/cozy-feet",
    features: [
      "Age-appropriate training",
      "Fun learning environment",
      "Basic motor skills development",
      "Introduction to soccer fundamentals"
    ]
  },
  {
    title: "UST Pre-Academy",
    description: "Advanced training for ages 7-11",
    icon: "Trophy",
    ageRange: "7-11 years",
    path: "/our-teams",
    features: [
      "Technical skill development",
      "Small-sided games",
      "Professional coaching",
      "Regular progress assessments"
    ]
  },
  {
    title: "UST Boys Academy",
    description: "Elite boys program for ages 8-18",
    icon: "Users",
    ageRange: "8-18 years",
    path: "/our-teams",
    features: [
      "High-performance training",
      "Competitive matches",
      "College preparation",
      "Professional development"
    ]
  },
  {
    title: "UST Girls Academy",
    description: "Elite girls program for ages 8-18",
    icon: "Heart",
    ageRange: "8-18 years",
    path: "/our-teams",
    features: [
      "High-performance training",
      "Competitive matches",
      "College preparation",
      "Professional development"
    ]
  },
  {
    title: "UST Camps & Clinics",
    description: "Specialized training programs",
    icon: "Dribbble",
    ageRange: "All ages",
    path: "/camps-clinics",
    features: [
      "Intensive training camps",
      "Specialized clinics",
      "Holiday programs",
      "Summer camps"
    ]
  },
  {
    title: "UST Cares",
    description: "Community outreach and support programs",
    icon: "Sparkles",
    ageRange: "All ages",
    path: "/ust-cares",
    features: [
      "Community engagement",
      "Scholarship programs",
      "Youth development",
      "Social impact initiatives"
    ]
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive training programs for all skill levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = iconMap[program.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-brand-green transition-colors duration-300"
                  >
                    <Icon className="h-6 w-6 text-black group-hover:text-brand-green transition-colors duration-300" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <p className="text-sm text-brand-green font-semibold mb-4">
                    Ages: {program.ageRange}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-1.5 h-1.5 bg-brand-green rounded-full mr-2 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <Button
                    to={program.path}
                    className="text-sm font-semibold text-brand-green hover:text-black transition-colors duration-200 group-hover:translate-x-2 transform transition-transform"
                  >
                    Learn More →
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}