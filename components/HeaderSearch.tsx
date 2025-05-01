"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HeaderSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchFocus = () => {
    setIsExpanded(true);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsExpanded(false);
    }
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <motion.div 
      className="relative flex items-center"
      animate={{ width: isExpanded ? "300px" : "200px" }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-full flex items-center border rounded-full hover:shadow-md transition-shadow">
        <input
          type="text"
          placeholder="Search destinations"
          className="w-full px-6 py-2 rounded-full outline-none text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 m-1 bg-rose-500 rounded-full text-white"
          onClick={handleSearch}
        >
          <Search className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeaderSearch; 