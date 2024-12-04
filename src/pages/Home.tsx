import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Programs from '../components/Programs';
import Schedule from '../components/Schedule';
import Coaches from '../components/Coaches';
import VideoPreview from '../components/VideoPreview';
import SponsorBanner from '../components/SponsorBanner';
import TestimonialsCarousel from '../components/Testimonials/TestimonialsCarousel';
import ChatAssistant from '../components/ChatAssistant';
import SEO from '../components/SEO';

const heroImages = [
  "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Premier Youth Soccer Training"
        description="Join UST Soccer Academy, where champions are made through dedication, skill, and passion. Professional youth soccer training programs for all ages."
      />

      {/* Hero Section */}
      <section className="relative h-screen">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        ))}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Develop Your Soccer Skills
            <span className="block text-[#00FF00]">Shape Your Future</span>
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
              className="bg-[#00FF00] text-black px-8 py-3 rounded-full hover:bg-[#00FF00]/90 inline-flex items-center"
            >
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Banner */}
      <SponsorBanner />

      {/* About Section with Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">About UST Soccer Academy</h2>
              <p className="text-lg text-gray-600">
                At UST Soccer Academy, we're dedicated to developing not just exceptional soccer players, 
                but well-rounded individuals who excel both on and off the field. Our comprehensive approach 
                combines technical excellence, tactical understanding, physical development, and mental strength training.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-[#00FF00] rounded-full mr-3"></div>
                  <p className="text-gray-700">United Soccer & USSF licensed coaches</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-[#00FF00] rounded-full mr-3"></div>
                  <p className="text-gray-700">State-of-the-art training facilities</p>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-[#00FF00] rounded-full mr-3"></div>
                  <p className="text-gray-700">Comprehensive player development pathway</p>
                </div>
              </div>
              <Button
                to="/about-us"
                className="inline-flex items-center bg-black text-[#00FF00] px-6 py-3 rounded-lg hover:bg-black/90"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <VideoPreview
              thumbnailUrl="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
              videoId="20W4G2AVM_8"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <Programs />

      {/* Schedule Section */}
      <Schedule />

      {/* Coaches Section */}
      <Coaches />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Chat Assistant */}
      <ChatAssistant />
    </>
  );
}