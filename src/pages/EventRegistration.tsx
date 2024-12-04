import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEvents } from '../lib/cms';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { showSuccess } from '../utils/toast';

interface RegistrationForm {
  playerName: string;
  dateOfBirth: string;
  parentName: string;
  email: string;
  phone: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo: string;
  waiverAccepted: boolean;
}

export default function EventRegistration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: events = [], isLoading, error } = useEvents();
  const [formData, setFormData] = useState<RegistrationForm>({
    playerName: '',
    dateOfBirth: '',
    parentName: '',
    email: '',
    phone: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    medicalInfo: '',
    waiverAccepted: false
  });

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading event details</div>;

  const event = events.find(e => e.id === id);
  if (!event) return <div>Event not found</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the registration data to your backend
      console.log('Registration submitted:', formData);
      showSuccess('Registration successful! You will receive a confirmation email shortly.');
      navigate(`/events/${id}`);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register for {event.title} - UST Soccer Academy</title>
        <meta name="description" content={`Register for ${event.title} at UST Soccer Academy`} />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl font-bold mb-8">Register for {event.title}</h1>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Event Details</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-semibold">Date:</p>
                <p>{new Date(event.startDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="font-semibold">Time:</p>
                <p>{new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p>{event.venue}</p>
              </div>
              <div>
                <p className="font-semibold">Price:</p>
                <p>${event.price.amount}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Player Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Player Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Player Name</label>
                  <input
                    type="text"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Parent/Guardian Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Emergency Contact</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="emergencyContact.name"
                    value={formData.emergencyContact.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="emergencyContact.phone"
                    value={formData.emergencyContact.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Relationship</label>
                  <input
                    type="text"
                    name="emergencyContact.relationship"
                    value={formData.emergencyContact.relationship}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Medical Information</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Please list any medical conditions, allergies, or special needs
                </label>
                <textarea
                  name="medicalInfo"
                  value={formData.medicalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
                ></textarea>
              </div>
            </div>

            {/* Waiver Agreement */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="waiverAccepted"
                  name="waiverAccepted"
                  checked={formData.waiverAccepted}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-[#00FF00] focus:ring-[#00FF00] border-gray-300 rounded cursor-pointer"
                  required
                />
                <label 
                  htmlFor="waiverAccepted"
                  className="ml-2 block text-sm text-gray-700 cursor-pointer"
                >
                  I agree to the terms and conditions, including the waiver of liability
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => navigate(`/events/${id}`)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                type="button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className={`px-8 py-2 rounded-lg transition-colors ${
                  formData.waiverAccepted
                    ? 'bg-[#00FF00] text-black hover:bg-[#00FF00]/90'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!formData.waiverAccepted}
              >
                Complete Registration
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}