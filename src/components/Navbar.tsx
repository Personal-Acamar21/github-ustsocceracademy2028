import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import SearchBar from './SearchBar';

const menuItems = [
  {
    name: 'ACADEMY',
    dropdownItems: [
      { name: 'ABOUT US', path: '/about-us' },
      { name: 'OUR TEAMS', path: '/our-teams' },
      { name: 'TRYOUTS', path: '/tryouts' },
      { name: 'COZY FEET', path: '/cozy-feet' },
      { name: 'UST CARES', path: '/ust-cares' },
      { name: 'OUR STAFF', path: '/our-staff' }
    ]
  },
  {
    name: 'CAMPS & CLINICS',
    path: '/camps-clinics'
  },
  {
    name: 'FACILITIES',
    dropdownItems: [
      { name: 'INDOOR', path: '/indoor-facilities' },
      { name: 'OUTDOOR', path: '/outdoor-facilities' }
    ]
  },
  {
    name: 'SHOP DIAZA',
    path: '/shop'
  },
  {
    name: 'NEWS',
    path: '/blog'
  },
  {
    name: 'SPONSORS',
    path: '/sponsors'
  },
  {
    name: 'CONTACT',
    path: '/contact'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Logo Container - Positioned absolutely to overlap both bars */}
      <div className="absolute left-4 top-0 z-50">
        <Link to="/" className="block">
          <img
            src="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/674f43edcc7dd116c0479135.png"
            alt="UST Soccer Academy"
            className="h-40 w-auto"
          />
        </Link>
      </div>

      {/* Welcome Message */}
      <div className="bg-black bg-opacity-90 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <p className="text-3xl font-extrabold animate-pulse tracking-wide text-brand-green ml-40">
            WELCOME TO ULTIMATE SOCCER TRAINING/UST FC ACADEMY
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-brand-green">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 ml-40">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdownItems ? (
                    <div className="text-black hover:text-white cursor-pointer text-lg font-bold whitespace-nowrap">
                      {item.name}
                      <div className="absolute left-0 mt-2 w-48 bg-brand-green rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-black hover:text-white hover:bg-black/10"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-black hover:text-white text-lg font-bold whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Items */}
            <div className="hidden md:flex items-center ml-auto space-x-8">
              {/* Login/Register */}
              <div className="flex items-center space-x-8">
                <Button
                  onClick={() => setShowLoginModal(true)}
                  className="text-black hover:text-white text-lg font-bold whitespace-nowrap border-l border-black/20 pl-8"
                >
                  LOGIN/REGISTER
                </Button>
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Search */}
              <SearchBar />

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-brand-green">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.dropdownItems ? (
                  <div className="px-4 py-2">
                    <div className="text-black font-bold mb-2">{item.name}</div>
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-black hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-black hover:text-white font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile Social Links */}
            <div className="px-4 py-4 border-t border-black/20">
              <div className="flex items-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-6">LOGIN/REGISTER</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-brand-green focus:border-brand-green"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="submit"
                    className="bg-brand-green text-black px-6 py-2 rounded-lg hover:bg-brand-green/90"
                  >
                    LOGIN
                  </Button>
                  <Button
                    onClick={() => setShowLoginModal(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    CANCEL
                  </Button>
                </div>
              </form>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => {/* Add registration logic */}}
                    className="text-brand-green hover:underline"
                  >
                    REGISTER HERE
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}