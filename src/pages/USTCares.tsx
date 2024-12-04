import React, { useState } from 'react';
import { Heart, Award, Users } from 'lucide-react';
import Button from '../components/Button';

export default function USTCares() {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add donation processing logic here
    console.log('Processing donation:', donationAmount);
    setShowDonateModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">UST Cares</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Heart className="h-12 w-12 text-[#00FF00] mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Support</h3>
          <p className="text-gray-600 mb-4">Supporting youth development through soccer.</p>
        </div>
        {/* Add more initiative cards as needed */}
      </div>

      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
        <p className="mb-6">
          Join us in making a difference in our community through the power of soccer.
          Whether through donations, volunteering, or spreading awareness, every contribution helps.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => setShowDonateModal(true)}
            className="bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
          >
            Donate Now
          </Button>
          <Button
            onClick={() => setShowVolunteerModal(true)}
            className="bg-black text-[#00FF00] px-8 py-3 rounded-lg font-semibold hover:bg-black/90 transition duration-300"
          >
            Volunteer
          </Button>
        </div>
      </div>

      {/* Donation Modal */}
      {showDonateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
            <form onSubmit={handleDonateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Donation Amount ($)
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  min="1"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowDonateModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Proceed to Payment
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Volunteer Modal */}
      {showVolunteerModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Volunteer With Us</h3>
            <form onSubmit={(e) => { e.preventDefault(); setShowVolunteerModal(false); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How would you like to help?
                </label>
                <textarea className="w-full px-4 py-2 border rounded-lg" rows={4} required></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowVolunteerModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}