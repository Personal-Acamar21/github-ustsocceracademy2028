import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent",
    content: "The Cozy Feet program has been amazing for my child's development. Not only have their soccer skills improved, but their confidence and social skills have grown tremendously!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    program: "Cozy Feet"
  },
  {
    name: "John D.",
    role: "Parent",
    content: "The coaching staff is exceptional. They truly care about each player's development and create a positive learning environment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    program: "Elite Program"
  },
  {
    name: "Michael R.",
    role: "Player",
    content: "Training at UST has helped me improve my skills significantly. The coaches push us to be our best while making training enjoyable.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400",
    program: "Elite Program"
  },
  {
    name: "Emma S.",
    role: "Player",
    content: "The facilities and training programs are top-notch. I've made great friends here and improved my game tremendously.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    program: "Girls Academy"
  }
];

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Testimonials - UST Soccer Academy</title>
        <meta name="description" content="Read what parents and players say about their experience at UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">What Parents & Players Say</h1>
          <p className="text-xl text-gray-600">
            Hear from our community about their experiences at UST Soccer Academy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-[#00FF00] text-sm">{testimonial.program}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -left-2 -top-2 h-8 w-8 text-[#00FF00] opacity-20" />
                <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}