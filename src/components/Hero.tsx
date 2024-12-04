import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Button from './Button';

// ... rest of the imports and code remains the same ...

export default function Hero() {
  // ... existing code remains the same ...

  return (
    <section id="home" className="min-h-screen">
      {/* ... other JSX remains the same ... */}
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Develop Your Soccer Skills
          <span className="block text-[#00FF00]">Shape Your Future</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Join the premier youth soccer academy where champions are made through dedication, skill, and passion.
        </p>
        <Button
          to="/tryouts"
          className="bg-[#00FF00] text-black px-8 py-3 rounded-full hover:bg-[#00FF00]/90 inline-flex items-center mx-auto"
        >
          Join Now <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      {/* ... rest of the JSX remains the same ... */}
    </section>
  );
}