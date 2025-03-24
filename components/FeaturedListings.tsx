"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { scaleUp } from '@/lib/animations';

type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  host: string;
  dates: string;
};

// Mock data for featured listings
const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Beach House with Ocean View',
    location: 'Malibu, California',
    price: 250,
    rating: 4.98,
    image: '/properties/beach-house.jpg',
    host: 'Hosted by Sarah',
    dates: 'Nov 12-17'
  },
  {
    id: '2',
    title: 'Cozy Mountain Cabin with Hot Tub',
    location: 'Aspen, Colorado',
    price: 175,
    rating: 4.92,
    image: '/properties/mountain-cabin.jpg',
    host: 'Hosted by John',
    dates: 'Nov 5-10'
  },
  {
    id: '3',
    title: 'Luxury Penthouse in City Center',
    location: 'New York, New York',
    price: 320,
    rating: 4.85,
    image: '/properties/penthouse.jpg',
    host: 'Hosted by Michael',
    dates: 'Nov 15-20'
  },
  {
    id: '4',
    title: 'Rustic Countryside Villa',
    location: 'Tuscany, Italy',
    price: 210,
    rating: 4.97,
    image: '/properties/villa.jpg',
    host: 'Hosted by Elena',
    dates: 'Nov 7-12'
  },
  {
    id: '5',
    title: 'Tropical Beachfront Bungalow',
    location: 'Bali, Indonesia',
    price: 135,
    rating: 4.88,
    image: '/properties/bungalow.jpg',
    host: 'Hosted by David',
    dates: 'Nov 20-25'
  },
  {
    id: '6',
    title: 'Historic Downtown Apartment',
    location: 'Paris, France',
    price: 195,
    rating: 4.9,
    image: '/properties/apartment.jpg',
    host: 'Hosted by Sophie',
    dates: 'Nov 1-6'
  },
  {
    id: '7',
    title: 'Lakefront Cottage with Private Dock',
    location: 'Lake Tahoe, Nevada',
    price: 230,
    rating: 4.95,
    image: '/properties/cottage.jpg',
    host: 'Hosted by Robert',
    dates: 'Nov 10-15'
  },
  {
    id: '8',
    title: 'Contemporary Urban Loft',
    location: 'Chicago, Illinois',
    price: 180,
    rating: 4.87,
    image: '/properties/loft.jpg',
    host: 'Hosted by Amanda',
    dates: 'Nov 18-23'
  }
];

const FeaturedListings = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Popular places to stay</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1 % 0.8, // Creates a staggered effect but restarts after 8 items
              ease: "easeOut"
            }}
          >
            <Link href={`/properties/${property.id}`}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-none hover:shadow-lg transition-shadow">
                  <div className="relative h-60 w-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <motion.button 
                      className="absolute top-3 right-3 p-1.5 bg-white rounded-full"
                      aria-label="Add to wishlist"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        whileHover={{ 
                          color: "#f43f5e", 
                          scale: 1.1,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Heart className="w-5 h-5" />
                      </motion.div>
                    </motion.button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{property.location}</h3>
                      <div className="flex items-center text-sm">
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 72, scale: 1.2 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                        </motion.div>
                        <span>{property.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{property.host}</p>
                    <p className="text-gray-500 text-sm mb-3">{property.dates}</p>
                    <p className="font-medium">
                      ${property.price} <span className="text-gray-500 font-normal">night</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings; 