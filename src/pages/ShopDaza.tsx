import React, { useState } from 'react';
import Button from '../components/Button';

export default function ShopDaza() {
  const [showNotifyModal, setShowNotifyModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add notification signup logic here
    console.log('Notification signup:', email);
    setShowNotifyModal(false);
    setEmail('');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Shop Daza</h1>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl mb-6">
          Our online store is coming soon! Stay tuned for academy merchandise, training gear, and equipment.
        </p>
        <Button
          onClick={() => setShowNotifyModal(true)}
          className="bg-[#00FF00] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
        >
          Notify Me When Available
        </Button>
      </div>

      {/* Notification Modal */}
      {showNotifyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Get Notified</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button
                  onClick={() => setShowNotifyModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#00FF00] text-black px-6 py-2 rounded-lg hover:bg-[#00FF00]/90"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}