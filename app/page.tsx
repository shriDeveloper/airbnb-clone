"use client";

import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedListings from "@/components/FeaturedListings";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { Home as HomeIcon, Search, BookOpenCheck, MessageSquareQuote, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";

export default function Home() {
  // State to handle animations on scroll
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <main>
      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <HeroSection />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-2 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Search className="h-5 w-5 text-rose-500" />
        </motion.div>
        <h2 className="text-xl font-semibold">Explore by category</h2>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <CategoryFilter />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-2 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <HomeIcon className="h-5 w-5 text-rose-500" />
        </motion.div>
        <h2 className="text-xl font-semibold">Featured properties</h2>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <FeaturedListings />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-2 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <BookOpenCheck className="h-5 w-5 text-rose-500" />
        </motion.div>
        <h2 className="text-xl font-semibold">How it works</h2>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <HowItWorks />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-2 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <MessageSquareQuote className="h-5 w-5 text-rose-500" />
        </motion.div>
        <h2 className="text-xl font-semibold">Guest testimonials</h2>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Testimonials />
      </motion.div>

      <motion.div 
        className="flex items-center justify-center gap-2 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Mail className="h-5 w-5 text-rose-500" />
        </motion.div>
        <h2 className="text-xl font-semibold">Stay updated</h2>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Newsletter />
      </motion.div>
    </main>
  );
}
