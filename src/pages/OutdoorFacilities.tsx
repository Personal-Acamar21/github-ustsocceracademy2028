import React, { useState } from 'react';
import Button from '../components/Button';

export default function OutdoorFacilities() {
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Outdoor Facilities</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&q=80"
            alt="Outdoor Soccer Field"
            className="rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Professional Grade Soccer Fields</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Natural grass championship field</li>
            <li>• Two full-size artificial turf fields</li>
            <li>• Training areas for goalkeepers</li>
            <li>• Spectator seating</li>
            <li>• Field lighting for evening sessions</li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Field Specifications</h3>
            <p className="text-gray-600">
              Our outdoor facilities meet international standards with proper drainage systems
              and maintained to professional specifications throughout the year.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Field Availability</h3>
            <p className="text-gray-600 mb-4">
              Fields are available for team training, matches, and tournaments.
              Advanced booking required for non-academy events.
            </p>
            <Button
              onClick={() => setShowAvailabilityModal(true)}
              className="bg-[#00FF00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>

      {/* Availability Modal */}
      {showAvailabilityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Field Availability</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Regular Hours</h4>
                <ul className="space-y-1 text-sm">
                  <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                  <li>Saturday: 8:00 AM - 6:00 PM</li>
                  <li>Sunday: 9:00 AM - 5:00 PM</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                For real-time availability and booking requests, please contact us directly.
              </p>
              <div className="flex justify-end">
                <Button
                  onClick={() => setShowAvailabilityModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}