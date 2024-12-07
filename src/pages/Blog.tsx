import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../lib/api';
import LoadingSpinner from '../components/LoadingSpinner';

export default function News() {
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div>Error loading news posts</div>;

  return (
    <>
      <Helmet>
        <title>Latest News - UST Soccer Academy</title>
        <meta name="description" content="Stay updated with the latest news, achievements, and announcements from UST Soccer Academy." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                {post.date && (
                  <div className="text-sm text-gray-500 mb-2">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </div>
                )}
                <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  to={`/news/${post.slug}`}
                  className="text-[#8ED204] hover:text-[#8ED204]/80 inline-flex items-center"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
}
