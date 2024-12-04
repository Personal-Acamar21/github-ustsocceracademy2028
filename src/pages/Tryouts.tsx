import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Button from '../components/Button';

export default function Tryouts() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [formData, setFormData] = useState({
    playerName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    ageGroup: '',
    experience: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      playerName: '',
      dateOfBirth: '',
      parentName: '',
      email: '',
      phone: '',
      ageGroup: '',
      experience: ''
    });
    setShowRegistration(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Tryouts</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Tryout Dates</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-[#00FF00] mr-3" />
              <span>March 15-16, 2024</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-[#00FF00] mr-3" />
              <span>4:00 PM - 6:00 PM</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#00FF00] mr-3" />
              <span>Main Training Ground</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">What to Bring</h2>
          <ul className="space-y-2">
            <li>• Soccer cleats</li>
            <li>• Shin guards</li>
            <li>• Water bottle</li>
            <li>• Athletic wear</li>
            <li>• Recent photo</li>
          </ul>
        </div>
      </div>

      <Button
        onClick={() => setShowRegistration(true)}
        className="w-full md:w-auto bg-[#00FF00] text-black px-8 py-3 rounded-lg hover:bg-[#00FF00]/90 transition duration-300"
      >
        Register for Tryouts
      </Button>

      {showRegistration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Tryout Registration</h3>
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
                  Age Group
                </label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  required
                >
                  <option value="">Select Age Group</option>
                  <option value="U9">U9</option>
                  <option value="U10">U10</option>
                  <option value="U11">U11</option>
                  <option value="U12">U12</option>
                  <option value="U13">U13</option>
                  <option value="U14">U14</option>
                  <option value="U15">U15</option>
                  <option value="U16">U16</option>
                  <option value="U17">U17</option>
                  <option value="U18">U18</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Playing Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
                  rows={4}
                  required
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
    </div>
  );
}