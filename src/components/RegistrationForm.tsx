import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const registrationSchema = z.object({
  playerName: z.string().min(2, 'Player name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  program: z.string().min(1, 'Please select a program'),
  experience: z.string().optional(),
  emergencyContact: z.object({
    name: z.string().min(2, 'Emergency contact name is required'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    relationship: z.string().min(1, 'Relationship is required')
  })
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void;
  programs: Array<{ id: string; name: string }>;
}

export default function RegistrationForm({ onSubmit, programs }: RegistrationFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Player Registration</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Player Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Player Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Player Name</label>
            <input
              type="text"
              {...register('playerName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.playerName && (
              <p className="text-red-500 text-sm mt-1">{errors.playerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register('dateOfBirth')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
            )}
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Parent/Guardian Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
            <input
              type="text"
              {...register('parentName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.parentName && (
              <p className="text-red-500 text-sm mt-1">{errors.parentName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register('phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Program Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Program Selection</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Program</label>
            <select
              {...register('program')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Playing Experience</label>
            <textarea
              {...register('experience')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Emergency Contact</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('emergencyContact.name')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.emergencyContact?.name && (
              <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              {...register('emergencyContact.phone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.emergencyContact?.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input
              type="text"
              {...register('emergencyContact.relationship')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00FF00] focus:ring-[#00FF00]"
            />
            {errors.emergencyContact?.relationship && (
              <p className="text-red-500 text-sm mt-1">{errors.emergencyContact.relationship.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00FF00] text-black py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
        >
          Submit Registration
        </button>
      </form>
    </motion.div>
  );
}