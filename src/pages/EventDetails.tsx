import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, DollarSign, Award, CheckCircle } from 'lucide-react';
import { useEvents } from '../lib/cms';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: events = [], isLoading, error } = useEvents();

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading event details</div>;

  const event = events.find(e => e.id === id);
  if (!event) return <div>Event not found</div>;

  const handleRegister = () => {
    navigate(`/events/${id}/register`);
  };

  return (
    <>
      <Helmet>
        <title>{event.title} - UST Soccer Academy</title>
        <meta name="description" content={event.description} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Left Column - Image and Basic Info */}
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden mb-6">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-[#00FF00] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {event.type}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-3 text-[#00FF00]" />
                <span>{new Date(event.startDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-3 text-[#00FF00]" />
                <span>{new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-[#00FF00]" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-3 text-[#00FF00]" />
                <span>Ages: {event.ageGroups.join(', ')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="h-5 w-5 mr-3 text-[#00FF00]" />
                <span>${event.price.amount}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              <div className="prose max-w-none">
                {event.description}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Event Features</h2>
              <div className="grid grid-cols-2 gap-4">
                {event.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#00FF00] mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coaches */}
            {event.coaches && event.coaches.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Coaching Staff</h2>
                <div className="grid grid-cols-2 gap-4">
                  {event.coaches.map((coach, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h3 className="font-bold">{coach.name}</h3>
                          <p className="text-sm text-gray-600">{coach.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{coach.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration */}
            <div className="bg-black text-white p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-[#00FF00] mr-2" />
                <h2 className="text-2xl font-bold">Register Now</h2>
              </div>
              <p className="mb-6">
                Secure your spot for this exclusive event. Only{' '}
                {event.maxParticipants - (event.registeredCount || 0)} spots remaining!
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Registration closes:</p>
                  <p className="font-semibold">
                    {new Date(event.registrationDeadline).toLocaleDateString()}
                  </p>
                </div>
                <Button
                  onClick={handleRegister}
                  className="bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}