'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bell, BellOff, Maximize } from 'lucide-react';

const Footer: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // Implement actual sound toggle logic here
  };

  return (
    <footer className=" text-gray-500 p-4 flex justify-between items-center my-4">
      <div className="flex items-center">
        <button
          onClick={toggleFullscreen}
          className="mr-4 hover:text-gray-300 flex items-center"
        >
          <Maximize className="mr-2" />
          {isFullscreen ? 'Exit fullscreen' : 'Fullscreen mode'}
        </button>

        <button
          onClick={toggleSound}
          className="hover:text-gray-300"
        >
          {isSoundOn ? (
            <div className="flex items-center">
              <span className="mr-2"><Bell /></span>
              Alert sound on
            </div>
          ) : (
            <div className="flex items-center">
              <span className="mr-2"><BellOff /></span>
              Alert sound off
            </div>
          )}
        </button>
      </div>
      <div className="flex items-center space-x-1">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy policy
        </Link>
        <span className="text-sm">|</span>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;