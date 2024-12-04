import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages(prev => [...prev, { type: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('location') || lowerMessage.includes('address')) {
      return "We're located at ULTIMATE SOCCER TRAINING LLC, D/ba UST KINGS PARK, P.O. BOX: 312, KINGS PARK NY 11754.";
    }
    
    if (lowerMessage.includes('age') || lowerMessage.includes('old')) {
      return "We offer programs for all age groups: Cozy Feet (ages 2-7), Pre-Academy (ages 7-11), and Elite Programs (ages 8-18).";
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('fee')) {
      return "Program fees vary based on the level and duration. Please contact us directly at 631-506-6567 for detailed pricing information.";
    }
    
    if (lowerMessage.includes('register') || lowerMessage.includes('sign up')) {
      return "You can register for our programs through the 'Join Now' button on our website or by calling us at 631-506-6567.";
    }

    return "Thank you for your question! For specific information, please call us at 631-506-6567 or email us at INFO@USTSOCCER.COM.";
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 bg-brand-green text-black p-4 rounded-full shadow-lg z-50 hover:bg-brand-green/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-black p-4 flex items-center justify-between">
              <h3 className="text-brand-green font-bold">UST Academy Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-green transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-4">
                  Ask me anything about UST Soccer Academy!
                </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-brand-green text-black'
                        : 'bg-gray-200 text-black'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button
                  type="submit"
                  className="bg-brand-green text-black px-4 py-2 rounded-lg hover:bg-brand-green/90 transition-colors"
                  disabled={isLoading}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}