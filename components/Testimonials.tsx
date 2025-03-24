"use client";

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  propertyType: string;
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jessica Lewis',
    avatar: '/avatars/jessica.jpg',
    location: 'New York, USA',
    rating: 5,
    text: "We had an amazing stay at this beautiful beachfront property! The views were breathtaking, and our host went above and beyond to make our vacation special. Can't wait to come back!",
    propertyType: 'Beach House'
  },
  {
    id: '2',
    name: 'Mark Johnson',
    avatar: '/avatars/mark.jpg',
    location: 'London, UK',
    rating: 5,
    text: 'The mountain cabin exceeded all our expectations. It was cozy, clean, and perfectly located for hiking and skiing. The hot tub under the stars was the highlight of our trip!',
    propertyType: 'Mountain Cabin'
  },
  {
    id: '3',
    name: 'Sofia Rodriguez',
    avatar: '/avatars/sofia.jpg',
    location: 'Barcelona, Spain',
    rating: 5,
    text: 'This city apartment was a gem in the heart of downtown. Modern, stylish, and convenient to all the attractions. The host provided excellent recommendations for local restaurants.',
    propertyType: 'City Apartment'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 container mx-auto">
      <motion.div 
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">What our guests are saying</h2>
        <p className="text-gray-600">
          Thousands of travelers have had great experiences with AirBnB Clone.
          Here's what some of them have to say.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.2,
              type: "spring",
              stiffness: 50
            }}
          >
            <motion.div
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="relative h-12 w-12 rounded-full overflow-hidden mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star 
                          className={`h-4 w-4 mr-1 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`} 
                        />
                      </motion.div>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">{testimonial.propertyType}</span>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 italic"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {testimonial.text}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center mt-12"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <button className="text-rose-500 font-medium hover:underline">
          Read more guest reviews →
        </button>
      </motion.div>
    </section>
  );
};

export default Testimonials; 