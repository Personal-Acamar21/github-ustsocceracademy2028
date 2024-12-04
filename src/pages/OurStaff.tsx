import React from 'react';

export default function OurStaff() {
  const staff = [
    {
      name: "Alex Thompson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400&h=400",
      credentials: "UEFA A License",
      experience: "15+ years"
    },
    {
      name: "Sarah Martinez",
      role: "Head Coach - Girls Academy",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
      credentials: "USSF A License",
      experience: "12+ years"
    },
    {
      name: "David Wilson",
      role: "Head Coach - Boys Academy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      credentials: "UEFA B License",
      experience: "10+ years"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Staff</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {staff.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-[#00FF00] font-semibold mb-2">{member.role}</p>
              <div className="text-gray-600">
                <p>Credentials: {member.credentials}</p>
                <p>Experience: {member.experience}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}