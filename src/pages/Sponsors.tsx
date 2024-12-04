import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Helmet } from 'react-helmet-async';

interface Sponsor {
  name: string;
  role: string;
  image: string;
  website: string;
  description?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "NICHOLAS AGNONE & Co, LLC",
    role: "Official Financial Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f79664a541dee4d99d05e.png",
    website: "https://brickit.com/",
    description: "Providing expert financial guidance and support"
  },
  {
    name: "PIPING ROCK",
    role: "Official Health & Wellness Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f7823d83773d349be6e0b.png",
    website: "https://www.pipingrock.com/",
    description: "Supporting athlete health and wellness"
  },
  {
    name: "APEX MOBILE WELLNESS",
    role: "Official Recovery Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f7823d31f232be3ed205d.png",
    website: "https://apexmobilewellness.com",
    description: "Specialized in athlete recovery and performance"
  },
  {
    name: "SNUG HARBOR JEWELRY",
    role: "Official Awards Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f7823d837732d47be6e0a.png",
    website: "https://snugharborjewelry.com",
    description: "Creating memorable awards and recognition pieces"
  },
  {
    name: "DIAZA",
    role: "Official Equipment Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f7823cc7dd1402747d017.png",
    website: "https://diaza.com/pages/ust",
    description: "Premium soccer equipment and gear"
  },
  {
    name: "BRICK IT",
    role: "Official Construction Partner",
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f75036d0a4e59c851b51c.png",
    website: "https://brickit.com/",
    description: "Building excellence in sports facilities"
  }
];

export default function Sponsors() {
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry:', formData);
    setShowPartnershipModal(false);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Sponsors - UST Soccer Academy</title>
        <meta name="description" content="Meet the valued partners and sponsors who support UST Soccer Academy in developing young soccer talent." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-xl text-gray-600">
            Proud partners supporting youth soccer development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{sponsor.name}</h2>
                  <p className="text-brand-green font-semibold mb-2">{sponsor.role}</p>
                  {sponsor.description && (
                    <p className="text-gray-600 text-sm">{sponsor.description}</p>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-gray-600 mb-6">
              Join our mission to develop the next generation of soccer talent.
              Partner with UST Academy and make a difference in youth sports.
            </p>
            <Button
              onClick={() => setShowPartnershipModal(true)}
              className="bg-brand-green text-black px-8 py-3 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors"
            >
              Partnership Opportunities
            </Button>
          </div>
        </div>

        {/* Partnership Modal */}
        {showPartnershipModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Partnership Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
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
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
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
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <Button
                    onClick={() => setShowPartnershipModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-brand-green text-black px-6 py-2 rounded-lg hover:bg-brand-green/90"
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}