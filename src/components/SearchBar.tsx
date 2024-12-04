import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  title: string;
  path: string;
  type: string;
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Sample search data - in production, this would come from your CMS
  const searchData: SearchResult[] = [
    { title: 'About Us', path: '/about-us', type: 'page' },
    { title: 'Our Teams', path: '/our-teams', type: 'page' },
    { title: 'Tryouts', path: '/tryouts', type: 'page' },
    { title: 'Cozy Feet Program', path: '/cozy-feet', type: 'program' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (result: SearchResult) => {
    navigate(result.path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white hover:text-brand-green transition-colors p-2"
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {results.length > 0 && (
                <div className="mt-4 max-h-96 overflow-y-auto">
                  {results.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(result)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg flex items-center space-x-2"
                    >
                      <Search className="h-4 w-4 text-gray-400" />
                      <span>{result.title}</span>
                      <span className="text-xs text-gray-400 ml-auto">
                        {result.type}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {query && results.length === 0 && (
                <div className="mt-4 text-center text-gray-500">
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}