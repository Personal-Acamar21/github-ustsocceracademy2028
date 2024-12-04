import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, Award } from 'lucide-react';

export default function OurTeams() {
  const teams = [
    {
      category: "Boys Teams",
      groups: [
        { 
          id: "u9-boys", 
          name: "U9", 
          description: "Elite Development",
          image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png"
        },
        { 
          id: "u10-boys", 
          name: "U10", 
          description: "Elite Development",
          image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png"
        }
      ]
    },
    {
      category: "Girls Teams",
      groups: [
        { 
          id: "u9-girls", 
          name: "U9", 
          description: "Elite Development",
          image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png"
        },
        { 
          id: "u10-girls", 
          name: "U10", 
          description: "Elite Development",
          image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Teams</h1>
      
      {teams.map((section) => (
        <div key={section.category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#00FF00]">{section.category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.groups.map((group) => (
              <Link 
                key={group.id}
                to={`/team/${group.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <img
                    src={group.image}
                    alt={`${group.name} Team`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{group.name}</h3>
                      <p className="text-[#00FF00]">{group.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-[#00FF00] mr-1" />
                      <span>Elite Program</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-[#00FF00] mr-1" />
                      <span>Top Training</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 bg-black rounded-lg p-8 text-white">
        <div className="flex items-center mb-4">
          <Award className="h-8 w-8 text-[#00FF00] mr-3" />
          <h2 className="text-2xl font-bold">Join Our Elite Teams</h2>
        </div>
        <p className="mb-6">
          Experience professional training, competitive matches, and a pathway to excellence.
        </p>
        <Link 
          to="/tryouts"
          className="inline-block bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
        >
          Register for Tryouts
        </Link>
      </div>
    </div>
  );
}