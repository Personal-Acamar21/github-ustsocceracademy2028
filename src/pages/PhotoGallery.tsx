import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { motion } from 'framer-motion';

const photos = [
  {
    src: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
    width: 1200,
    height: 800,
    alt: 'Soccer Training Session',
    category: 'Training'
  },
  {
    src: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
    width: 1200,
    height: 800,
    alt: 'Youth Soccer Match',
    category: 'Matches'
  },
  {
    src: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
    width: 1200,
    height: 800,
    alt: 'Team Celebration',
    category: 'Events'
  }
];

const categories = ['All', 'Training', 'Matches', 'Events', 'Tournaments'];

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Photo Gallery - UST Soccer Academy</title>
        <meta name="description" content="Browse photos from UST Soccer Academy's training sessions, matches, and special events." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">
            Capturing moments of excellence at UST Soccer Academy
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-[#00FF00] text-black'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <Gallery>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-video relative group"
              >
                <Item
                  original={photo.src}
                  thumbnail={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt={photo.alt}
                >
                  {({ ref, open }) => (
                    <div 
                      ref={ref as any}
                      onClick={open}
                      className="cursor-pointer relative overflow-hidden rounded-lg"
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view
                        </span>
                      </div>
                    </div>
                  )}
                </Item>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm">{photo.alt}</p>
                  <span className="text-[#00FF00] text-xs">{photo.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Gallery>
      </div>
    </>
  );
}