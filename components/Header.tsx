"use client";

import { Globe, Menu, User } from "lucide-react";
import { motion } from "framer-motion";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.img
            src="/airbnb-logo.png"
            alt="Airbnb"
            className="h-8"
            whileHover={{ scale: 1.05 }}
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block">
          <HeaderSearch />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100"
          >
            <span className="text-sm font-medium">Airbnb your home</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Globe className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 p-2 rounded-full border hover:shadow-md"
          >
            <Menu className="w-5 h-5" />
            <User className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4">
        <HeaderSearch />
      </div>
    </header>
  );
};

export default Header; 