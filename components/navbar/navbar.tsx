'use client';
import { Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';

export const Navbar = () => {
  return (
    <header className="flex p-3 rounded-xl justify-between items-center mb-8 w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-md">
      <h1 className="text-3xl font-bold text-white hover:text-blue-300 transition duration-300">
        Manager Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <Button variant={'ghost'} size="icon">
          <Bell className="h-6 w-6" />
        </Button>
        <Avatar onClick={async () => await signOut()}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
    // <div className="w-full bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-md">
    //   <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
    //     <div className="text-xl font-semibold">
    //       <a href="#" className="hover:text-blue-300 transition duration-300">
    //         My Dashboard
    //       </a>
    //     </div>
    //     <div className="flex space-x-4">
    //       <a
    //         href="/dashboard"
    //         className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition transform duration-300 hover:scale-105"
    //       >
    //         Dashboard
    //       </a>
    //       <a
    //         href="/profile"
    //         className="px-4 py-2 rounded-md bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium transition transform duration-300 hover:scale-105"
    //       >
    //         Profile
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};
