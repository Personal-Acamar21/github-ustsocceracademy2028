import React, { useState } from 'react';
import Button from '../components/Button';

export default function IndoorFacilities() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '',
    purpose: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add booking submission logic here
    console.log('Booking submitted:', formData);
    setShowBookingModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Indoor Facilities</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80"
            alt="Indoor Soccer Facility"
            className="rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">State-of-the-Art Indoor Training Center</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• FIFA-approved artificial turf</li>
            <li>• Climate-controlled environment</li>
            <li>• Professional lighting system</li>
            <li>• Player benches and spectator areas</li>
            <li>• Equipment storage</li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Facility Features</h3>
            <p className="text-gray-600 mb-6">
              Our indoor facility provides year-round training opportunities with
              professional-grade amenities and equipment.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-[#00FF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90"
              >
                Book Facility
              </Button>
              <Button
                onClick={() => setShowAvailabilityModal(true)}
                className="w-full bg-black text-[#00FF00] px-6 py-3 rounded-lg font-semibold hover:bg-black/90"
              >
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Book Facility</h3>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
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
                  className="w-full px-4 py-2 border rounded-lg"
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
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (hours)
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose of Booking
                </label>
                <textarea
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowBookingModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Submit Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Availability Modal */}
      {showAvailabilityModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Facility Availability</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Regular Hours</h4>
                <ul className="space-y-1 text-sm">
                  <li>Monday - Friday: 6:00 AM - 10:00 PM</li>
                  <li>Saturday: 8:00 AM - 8:00 PM</li>
                  <li>Sunday: 8:00 AM - 6:00 PM</li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                For real-time availability and booking requests, please contact us directly
                or use the booking form.
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