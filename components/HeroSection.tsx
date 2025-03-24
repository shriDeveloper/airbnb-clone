"use client";

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from 'lucide-react';

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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find your next stay
        </h1>
        <p className="text-xl text-white mb-8 max-w-lg">
          Search low prices on homes, apartments and much more...
        </p>

        {/* Search Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Where</label>
              <Input 
                placeholder="Search destinations" 
                className="w-full" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check in</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Add dates</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Check out</label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">Add dates</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Who</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Add guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 guest</SelectItem>
                  <SelectItem value="2">2 guests</SelectItem>
                  <SelectItem value="3">3 guests</SelectItem>
                  <SelectItem value="4">4 guests</SelectItem>
                  <SelectItem value="5">5+ guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="md:col-span-4 bg-rose-500 hover:bg-rose-600 text-white py-6">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 