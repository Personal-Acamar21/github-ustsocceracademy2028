import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const photos = [
  {
    src: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673b8a9115ee066c37b605ad.png',
    width: 1200,
    height: 800,
    alt: 'Soccer Training'
  },
  {
    src: 'https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png',
    width: 1200,
    height: 800,
    alt: 'Youth Soccer'
  }
];

export default function PhotoGallery() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        {t('gallery.title')}
      </motion.h2>
      
      <Gallery>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Item
                original={photo.src}
                thumbnail={photo.src}
                width={photo.width}
                height={photo.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as any}
                    onClick={open}
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                )}
              </Item>
            </motion.div>
          ))}
        </div>
      </Gallery>
    </div>
  );
}