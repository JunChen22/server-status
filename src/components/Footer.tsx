'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <button 
          onClick={toggleFullscreen}
          className="mr-4 hover:text-gray-300"
        >
          {isFullscreen ? 'Exit fullscreen' : 'Fullscreen mode'}
        </button>
        <button 
          onClick={toggleSound}
          className="hover:text-gray-300"
        >
          {isSoundOn ? (
            <>
              <span className="mr-2">🔔</span>
              Alert sound on
            </>
          ) : (
            <>
              <span className="mr-2">🔕</span>
              Alert sound off
            </>
          )}
        </button>
      </div>
      <div>
        <Link href="/privacy-policy" className="mr-4 hover:underline">
          Privacy policy
        </Link>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;