import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, MapPin, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEvents } from '../lib/cms';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import EventSchedule from '../components/EventSchedule';

export default function CampsClinics() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState<string>('');
  const [formData, setFormData] = useState({
    playerName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    campName: '',
    specialNeeds: ''
  });

  const { data: events = [], isLoading, error } = useEvents();

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading events</div>;

  const upcomingClinics = events.filter(event => 
    event.status === 'upcoming' && 
    (event.type === 'Clinic' || event.type === 'Training')
  ).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const regularCamps = [
    {
      title: "Spring Break Camp",
      dates: "April 1-5, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Main Training Ground",
      ageGroups: "Ages 7-14"
    },
    {
      title: "Summer Elite Camp",
      dates: "July 8-19, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Main Training Ground",
      ageGroups: "Ages 10-18"
    },
    {
      title: "Goalkeeper Clinic",
      dates: "Monthly",
      time: "6:00 PM - 8:00 PM",
      location: "Indoor Facility",
      ageGroups: "Ages 8-16"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    setFormData({
      playerName: '',
      dateOfBirth: '',
      parentName: '',
      email: '',
      phone: '',
      campName: '',
      specialNeeds: ''
    });
    setShowRegistration(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterClick = (campTitle: string) => {
    setSelectedCamp(campTitle);
    setFormData(prev => ({ ...prev, campName: campTitle }));
    setShowRegistration(true);
  };

  return (
    <>
      <Helmet>
        <title>Camps & Clinics - UST Soccer Academy</title>
        <meta name="description" content="Join our specialized soccer camps and clinics at UST Soccer Academy. Programs for all age groups and skill levels." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Upcoming Clinics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">Upcoming Clinics & Training</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingClinics.map((clinic, index) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={clinic.image}
                    alt={clinic.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-[#00FF00] text-black px-2 py-1 rounded text-sm font-semibold">
                        {clinic.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{clinic.title}</h3>
                  
                  <div className="space-y-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>{clinic.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>Ages: {clinic.ageGroups.join(', ')}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>${clinic.price.amount}</span>
                    </div>
                  </div>

                  <EventSchedule schedule={clinic.schedule} />

                  <div className="mt-6">
                    <Button
                      to={`/events/${clinic.id}`}
                      className="w-full bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90 text-center"
                    >
                      Learn More & Register
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regular Camps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Seasonal Camps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {regularCamps.map((camp) => (
              <div key={camp.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">{camp.title}</h2>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>{camp.dates}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>{camp.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 mr-3 text-[#00FF00]" />
                      <span>{camp.location}</span>
                    </div>
                    <p className="text-[#00FF00] font-semibold">{camp.ageGroups}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button
                    onClick={() => handleRegisterClick(camp.title)}
                    className="w-full bg-[#00FF00] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Register for {selectedCamp}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Player Name
                </label>
                <input
                  type="text"
                  name="playerName"
                  value={formData.playerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Parent/Guardian Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Needs or Requirements
                </label>
                <textarea
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  rows={4}
                ></textarea>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowRegistration(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}