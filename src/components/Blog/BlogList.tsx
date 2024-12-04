import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../lib/api';
import LoadingSpinner from '../LoadingSpinner';

export default function BlogList() {
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  if (isLoading) return <LoadingSpinner size="large" />;
  if (error) return <div className="text-center text-red-500">Error loading blog posts</div>;

  return (
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
            <div className="text-sm text-gray-500 mb-2">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-[#00FF00] hover:text-[#00FF00]/80 inline-flex items-center"
            >
              Read More →
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}