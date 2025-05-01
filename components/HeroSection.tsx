"use client";

import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url(/hero-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center z-10">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Find your next stay
        </motion.h1>
        <motion.p 
          className="text-xl text-white mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Search low prices on homes, apartments and much more...
        </motion.p>

        <motion.div 
          className="w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchBar />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 