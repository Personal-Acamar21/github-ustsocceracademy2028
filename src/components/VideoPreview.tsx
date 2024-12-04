import React, { useState, useCallback } from 'react';
import { Play, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

interface VideoPreviewProps {
  thumbnailUrl: string;
  videoId?: string;
}

export default function VideoPreview({ 
  thumbnailUrl, 
  videoId = "dQw4w9WgXcQ"
}: VideoPreviewProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1&widgetid=1`;

  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setIsLoading(false);
  }, []);

  const handlePlayClick = useCallback(() => {
    setIsLoading(true);
    setShowVideo(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowVideo(false);
    setIsLoading(false);
    setVideoError(false);
  }, []);

  return (
    <>
      <div className="relative rounded-lg overflow-hidden shadow-xl aspect-video">
        <motion.img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
        <motion.div 
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <motion.button 
            onClick={handlePlayClick}
            className="bg-brand-green p-4 rounded-full hover:bg-brand-green/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-8 w-8 text-black" />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <Button
                onClick={handleClose}
                className="absolute -top-12 right-0 text-white hover:text-brand-green z-50"
              >
                <X className="h-8 w-8" />
              </Button>

              {isLoading && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black rounded-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="h-8 w-8 text-brand-green" />
                  </motion.div>
                </div>
              )}

              {videoError && (
                <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white text-lg mb-4">Video unavailable. Please try again later.</p>
                    <Button
                      onClick={handleClose}
                      className="bg-brand-green text-black px-6 py-2 rounded-lg hover:bg-brand-green/90"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}

              {!videoError && (
                <iframe
                  src={embedUrl}
                  title="Video player"
                  className={`w-full h-full rounded-lg transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin"
                  loading="lazy"
                  onLoad={handleVideoLoad}
                  onError={handleVideoError}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}