import React from 'react';
import { Users, Star, Shield } from 'lucide-react';
import Button from '../components/Button';

export default function CozyFeet() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#00FF00]" />,
      title: "Age-Appropriate Training",
      description: "Specially designed programs for children ages 2-7"
    },
    {
      icon: <Star className="h-8 w-8 text-[#00FF00]" />,
      title: "Fun Learning Environment",
      description: "Games and activities that make learning soccer enjoyable"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#00FF00]" />,
      title: "Safe Development",
      description: "Focus on proper technique and gradual skill building"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cozy Feet Intramural Program</h1>
      
      {/* Hero Image */}
      <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?auto=format&fit=crop&q=80"
          alt="Kids playing soccer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 left-0 p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Start Their Journey Early</h2>
            <p className="text-white text-lg">Ages 2-7 | Building Future Stars</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-8">
          <img 
            src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80" 
            alt="Indoor training"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80" 
            alt="Kids playing"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Program Details</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our Cozy Feet program is designed to introduce young children to the beautiful game of soccer
              in a fun, safe, and nurturing environment. Through age-appropriate activities and games,
              children develop basic motor skills, coordination, and a love for the sport.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Professional coaches specialized in early childhood development</li>
              <li>Small group sizes for personalized attention</li>
              <li>Indoor and outdoor facilities</li>
              <li>Seasonal programs and flexible schedules</li>
              <li>Parent involvement opportunities</li>
            </ul>
            <Button
              to="/contact"
              className="bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
            >
              Join Cozy Feet Program
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-black text-white rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Parent Testimonial</h3>
          <p className="text-lg italic mb-4">
            "The Cozy Feet program has been amazing for my child's development. Not only has their soccer
            skills improved, but their confidence and social skills have grown tremendously!"
          </p>
          <p className="text-[#00FF00]">- Sarah M., Parent</p>
        </div>
      </div>
    </div>
  );
}