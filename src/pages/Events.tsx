import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, DollarSign } from 'lucide-react';
import { useEvents } from '../lib/cms';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import EventSchedule from '../components/EventSchedule';

export default function Events() {
  const { data: events = [], isLoading, error } = useEvents();

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading events</div>;

  const upcomingEvents = events.filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  return (
    <>
      <Helmet>
        <title>Events - UST Soccer Academy</title>
        <meta name="description" content="Join our upcoming soccer events, tournaments, camps, and clinics at UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">
            Join us for exciting soccer events and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block bg-[#00FF00] text-black px-2 py-1 rounded text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-4 mb-4">
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

                <EventSchedule schedule={event.schedule} />

                <div className="mt-6">
                  <Button
                    to={`/events/${event.id}`}
                    className="w-full bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90 text-center"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {upcomingEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No upcoming events at the moment.</p>
            <p className="text-gray-500">Please check back later or contact us for more information.</p>
          </div>
        )}
      </div>
    </>
  );
}