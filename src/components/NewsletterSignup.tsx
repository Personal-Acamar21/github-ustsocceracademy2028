import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { showSuccess } from '../utils/toast';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  interests: z.array(z.string()).min(1, 'Please select at least one interest')
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterSignup() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // In production, this would be an API call
      console.log('Newsletter signup:', data);
      showSuccess('Successfully subscribed to newsletter!');
      reset();
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName')}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#00FF00] focus:ring-1 focus:ring-[#00FF00]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            {...register('email')}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#00FF00] focus:ring-1 focus:ring-[#00FF00]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <p className="text-white mb-2">I'm interested in:</p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="youth-programs"
                {...register('interests')}
                className="form-checkbox text-[#00FF00]"
              />
              <span>Youth Programs</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="camps"
                {...register('interests')}
                className="form-checkbox text-[#00FF00]"
              />
              <span>Camps & Clinics</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                value="events"
                {...register('interests')}
                className="form-checkbox text-[#00FF00]"
              />
              <span>Events & Tournaments</span>
            </label>
          </div>
          {errors.interests && (
            <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#00FF00] text-black py-2 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </motion.div>
  );
}