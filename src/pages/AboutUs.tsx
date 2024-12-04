import React from 'react';
import { Helmet } from 'react-helmet-async';
import VideoPreview from '../components/VideoPreview';

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - UST Soccer Academy</title>
        <meta name="description" content="Learn about UST Soccer Academy's mission, values, and commitment to developing young soccer talent." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About UST Soccer Academy</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              At UST Soccer Academy, we're dedicated to developing not just exceptional soccer players, 
              but well-rounded individuals who excel both on and off the field.
            </p>
            <p className="text-lg text-gray-700">
              Our comprehensive approach combines technical excellence, tactical understanding, 
              physical development, and mental strength training.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To provide world-class soccer education while fostering character, leadership, 
                and a lifelong love for the beautiful game.
              </p>
            </div>
          </div>
          <div>
            <VideoPreview 
              thumbnailUrl="https://storage.googleapis.com/msgsndr/AKZP7FbfcOPsLo93Ayuw/media/673bd75015ee065bf0b64cad.png"
              videoId="BTbdAt0BGyn4aotfPy6wTw"
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#00FF00] p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-sm text-black">Active Players</div>
              </div>
              <div className="bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-[#00FF00]">15+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}