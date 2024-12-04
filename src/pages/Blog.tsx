import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogList = React.lazy(() => import('../components/Blog/BlogList'));

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - UST Soccer Academy</title>
        <meta name="description" content="Read the latest news, updates, and insights from UST Soccer Academy." />
        {/* Add preload for critical resources */}
        <link rel="preload" href="/api/posts" as="fetch" crossOrigin="anonymous" />
      </Helmet>

      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-600">
            Stay informed with the latest happenings at UST Soccer Academy
          </p>
        </motion.div>

        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner size="large" />
          </div>
        }>
          <BlogList />
        </Suspense>
      </motion.div>
    </>
  );
}