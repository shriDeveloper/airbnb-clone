"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { UserCircle2, Search, Globe, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-24">
            <Image 
              src="/airbnb-logo.svg" 
              alt="Airbnb Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Search Bar (Simplified) */}
        <div className="hidden md:flex items-center border rounded-full shadow-sm hover:shadow-md transition cursor-pointer px-4 py-2">
          <span className="font-medium text-sm border-r pr-3">Anywhere</span>
          <span className="font-medium text-sm border-r px-3">Any week</span>
          <span className="text-gray-500 text-sm pl-3 pr-2">Add guests</span>
          <div className="bg-rose-500 rounded-full p-1.5 text-white ml-2">
            <Search className="w-4 h-4" />
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/host">Airbnb your home</Link>
          </Button>
          
          <Button variant="outline" size="icon" className="rounded-full">
            <Globe className="w-5 h-5" />
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2 rounded-full shadow-sm pr-2 pl-4 py-1 h-auto">
            <Menu className="w-4 h-4" />
            <UserCircle2 size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 