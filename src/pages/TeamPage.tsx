import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';

export default function TeamPage() {
  const { teamId } = useParams();
  
  const teamData = {
    'u9-boys': {
      name: 'U9 Boys',
      coach: 'Coach Smith',
      schedule: 'Monday/Wednesday 4:00-5:30 PM',
      image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
      description: 'Elite development program focusing on technical skills and tactical understanding.',
      achievements: ['Regional Champions 2023', 'Technical Excellence Award']
    },
    'u10-boys': {
      name: 'U10 Boys',
      coach: 'Coach Johnson',
      schedule: 'Tuesday/Thursday 4:00-5:30 PM',
      image: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
      description: 'Advanced training program emphasizing individual skill development and team tactics.',
      achievements: ['State Cup Finalists 2023', 'Most Improved Team']
    }
  };

  const team = teamData[teamId as keyof typeof teamData];

  if (!team) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Team not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{team.name}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-2xl font-bold text-white">{team.name}</h2>
                <p className="text-[#00FF00]">Elite Development Program</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Team Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#00FF00]">Head Coach</h3>
                <p>{team.coach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#00FF00]">Training Schedule</h3>
                <p>{team.schedule}</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#00FF00]">Program Description</h3>
                <p>{team.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Achievements</h2>
            <ul className="space-y-2">
              {team.achievements.map((achievement, index) => (
                <li key={index} className="text-[#00FF00]">• {achievement}</li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button
              to="/tryouts"
              className="flex-1 bg-[#00FF00] text-black px-6 py-3 rounded-lg text-center hover:bg-[#00FF00]/90"
            >
              Join Team
            </Button>
            <Button
              to="/contact"
              className="flex-1 bg-black text-[#00FF00] px-6 py-3 rounded-lg text-center hover:bg-black/90"
            >
              Contact Coach
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}