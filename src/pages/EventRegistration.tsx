import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEvents } from '../lib/cms';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { showSuccess } from '../utils/toast';

interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

interface RegistrationFormData {
  playerName: string;
  dateOfBirth: string;
  parentName: string;
  email: string;
  phone: string;
  emergencyContact: EmergencyContact;
  medicalInfo: string;
  waiverAccepted: boolean;
}

const initialFormData: RegistrationFormData = {
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
};

export default function EventRegistration() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: events = [], isLoading, error } = useEvents();
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);

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

      {/* Rest of the component remains the same */}
    </>
  );
}
