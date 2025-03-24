"use client";

import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle newsletter subscription here
  };

  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get travel inspiration
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Sign up for our newsletter and receive exclusive offers, travel tips, and destination ideas.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow" 
              required
              aria-label="Email address"
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white">
                Subscribe
              </Button>
            </motion.div>
          </motion.form>
          
          <motion.p 
            className="text-xs text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 