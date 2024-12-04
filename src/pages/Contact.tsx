import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#00FF00] mr-3" />
                <div>
                  <p>ULTIMATE SOCCER TRAINING LLC</p>
                  <p>D/ba UST KINGS PARK</p>
                  <p>P.O. BOX: 312</p>
                  <p>KINGS PARK NY 11754</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#00FF00] mr-3" />
                <p>631-506-6567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#00FF00] mr-3" />
                <p>INFO@USTSOCCER.COM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#00FF00] focus:border-[#00FF00]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00FF00] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#00FF00]/90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}