"use client";

import Image from 'next/image';
import { Home, Search, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '@/lib/animations';

const steps = [
  {
    icon: <Search className="h-10 w-10 text-rose-500 mb-4" />,
    title: 'Find your perfect stay',
    description: 'Search from a wide selection of homes, apartments, and unique stays around the world.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-rose-500 mb-4" />,
    title: 'Book with confidence',
    description: 'Secure your stay with instant booking, clear pricing, and guest reviews.'
  },
  {
    icon: <Home className="h-10 w-10 text-rose-500 mb-4" />,
    title: 'Enjoy your trip',
    description: 'Experience your destination like a local with unique accommodations and personalized recommendations.'
  },
  {
    icon: <Star className="h-10 w-10 text-rose-500 mb-4" />,
    title: 'Share your experience',
    description: 'Rate your stay and help other travelers find the perfect match for their next adventure.'
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
        >
          <h2 className="text-3xl font-bold mb-4">How AirBnB Clone Works</h2>
          <p className="text-gray-600">
            Discover the easiest way to find and book unique accommodations around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-rose-50 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <div className="relative h-64 w-full md:w-1/2 rounded-lg overflow-hidden">
            <Image 
              src="/host-image.jpg"
              alt="Become a host"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Become a host</h3>
            <p className="text-gray-600 mb-6">
              Earn extra income by sharing your space with travelers from around the world. 
              We make it easy to list your property and start earning.
            </p>
            <motion.button 
              className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more about hosting
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 