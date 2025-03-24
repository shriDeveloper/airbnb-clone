"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Palmtree, Mountain, Trees, Building, Home, Castle, Landmark, Ship, Sailboat, 
  TrendingUp, Droplets, Wine 
} from 'lucide-react';

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const categories: Category[] = [
  { id: 'beach', label: 'Beach', icon: <Palmtree size={24} /> },
  { id: 'mountain', label: 'Mountain', icon: <Mountain size={24} /> },
  { id: 'countryside', label: 'Countryside', icon: <Trees size={24} /> },
  { id: 'city', label: 'City', icon: <Building size={24} /> },
  { id: 'cabin', label: 'Cabin', icon: <Home size={24} /> },
  { id: 'luxury', label: 'Luxury', icon: <Castle size={24} /> },
  { id: 'historical', label: 'Historical', icon: <Landmark size={24} /> },
  { id: 'islands', label: 'Islands', icon: <Ship size={24} /> },
  { id: 'houseboats', label: 'Houseboats', icon: <Sailboat size={24} /> },
  { id: 'trending', label: 'Trending', icon: <TrendingUp size={24} /> },
  { id: 'pools', label: 'Amazing pools', icon: <Droplets size={24} /> },
  { id: 'vineyards', label: 'Vineyards', icon: <Wine size={24} /> },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center space-x-8 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex flex-col items-center min-w-[80px] transition-all duration-200 ${
              activeCategory === category.id 
                ? 'text-rose-500 border-b-2 border-rose-500 pb-2' 
                : 'text-gray-500 hover:text-gray-800 pb-2 border-b-2 border-transparent'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div 
              className="mb-2"
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              {category.icon}
            </motion.div>
            <span className="text-xs font-medium">{category.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 