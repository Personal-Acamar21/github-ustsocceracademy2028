import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Star, Bell, Calendar } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';
import { Link } from 'react-router-dom';

const newsletters = [
  {
    title: "March 2024 Newsletter",
    date: "March 1, 2024",
    highlights: [
      "Spring Season Registration Now Open",
      "Elite Training Program Launch",
      "Player Spotlight: Sarah Johnson",
      "Upcoming Spring Break Camp Details"
    ],
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png",
    content: `
      Spring Season Registration
      Registration for our Spring 2024 season is now open! Early bird discounts available until March 15th. Programs available for all age groups from Cozy Feet to Elite Academy.

      Elite Training Program Launch
      We're excited to announce our new Elite Training Program, designed for advanced players looking to take their game to the next level. Professional coaching staff, advanced tactical training, and personalized development plans.

      Player Spotlight
      Congratulations to Sarah Johnson for her outstanding performance at the State Championships. Sarah's dedication and hard work exemplify the UST spirit!

      Spring Break Camp
      Don't miss our intensive Spring Break Camp (April 1-5). Limited spots available. Early registration recommended.
    `
  },
  {
    title: "February 2024 Newsletter",
    date: "February 1, 2024",
    highlights: [
      "Winter Indoor League Results",
      "College Signing Day Celebration",
      "New Training Facility Updates",
      "Coach of the Month: Mike Thompson"
    ],
    image: "https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png",
    content: `
      Winter Indoor League Success
      Congratulations to all teams on a successful Winter Indoor League season. Special mention to our U14 boys and U16 girls teams for reaching the finals!

      College Signing Day
      Proud moment for UST Academy as five of our players signed with Division 1 colleges. We wish them continued success in their academic and athletic careers.

      Facility Updates
      Our new indoor training facility is now complete with state-of-the-art equipment and technology. Book your training session today!

      Coach Spotlight
      Coach Mike Thompson has been named Coach of the Month for his outstanding work with our youth development program.
    `
  }
];

export default function Newsletter() {
  return (
    <>
      <Helmet>
        <title>Newsletter - UST Soccer Academy</title>
        <meta name="description" content="Stay updated with UST Soccer Academy's latest news, events, and announcements through our newsletter." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">UST Academy Newsletter</h1>
          <p className="text-xl text-gray-600">
            Stay connected with the latest updates from UST Soccer Academy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Newsletter Archive */}
          <div className="md:col-span-2 space-y-8">
            {newsletters.map((newsletter, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={newsletter.image}
                  alt={newsletter.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{newsletter.title}</h2>
                    <span className="text-gray-500">{newsletter.date}</span>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#00FF00] mb-2">Highlights</h3>
                    <ul className="space-y-2">
                      {newsletter.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center">
                          <Star className="h-4 w-4 text-[#00FF00] mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="prose max-w-none">
                    {newsletter.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-black rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-[#00FF00] mr-2" />
                <h2 className="text-xl font-bold text-white">Subscribe</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Get the latest news and updates delivered to your inbox monthly.
              </p>
              <NewsletterSignup />
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/events" className="flex items-center text-gray-600 hover:text-[#00FF00]">
                    <Calendar className="h-4 w-4 mr-2" />
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="flex items-center text-gray-600 hover:text-[#00FF00]">
                    <Bell className="h-4 w-4 mr-2" />
                    Latest News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}