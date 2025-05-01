"use client";

import { Search, CalendarDays, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SearchBar = () => {
  const [activeInput, setActiveInput] = useState<string | null>(null);

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-full shadow-lg border divide-x">
      {/* Where */}
      <div className="relative flex-1 min-w-[200px]">
        <button
          className={`p-4 text-left w-full rounded-l-full hover:bg-gray-100 transition ${
            activeInput === 'where' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setActiveInput('where')}
        >
          <div className="text-sm font-medium">Where</div>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none focus:outline-none"
          />
        </button>
      </div>

      {/* Check in */}
      <div className="relative flex-1">
        <button
          className={`p-4 text-left w-full hover:bg-gray-100 transition ${
            activeInput === 'checkin' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setActiveInput('checkin')}
        >
          <div className="text-sm font-medium">Check in</div>
          <div className="text-sm text-gray-400">Add dates</div>
        </button>
      </div>

      {/* Check out */}
      <div className="relative flex-1">
        <button
          className={`p-4 text-left w-full hover:bg-gray-100 transition ${
            activeInput === 'checkout' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setActiveInput('checkout')}
        >
          <div className="text-sm font-medium">Check out</div>
          <div className="text-sm text-gray-400">Add dates</div>
        </button>
      </div>

      {/* Who */}
      <div className="relative flex-1 flex items-center">
        <button
          className={`p-4 text-left flex-1 hover:bg-gray-100 transition ${
            activeInput === 'who' ? 'bg-gray-100' : ''
          }`}
          onClick={() => setActiveInput('who')}
        >
          <div className="text-sm font-medium">Who</div>
          <div className="text-sm text-gray-400">Add guests</div>
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-rose-500 rounded-full text-white m-2"
          onClick={() => {/* Handle search */}}
        >
          <Search className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default SearchBar; 