'use client';
import React, { useState, useEffect } from 'react';

const Header2: React.FC = () => {
  const [countdown, setCountdown] = useState(60);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleString());

    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          setLastUpdated(new Date().toLocaleString());
          return 60;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="text-white p-5 flex justify-between items-center">
      <img src="/Alamy cat.png" alt="Icon" className="w-16 h-16 ml-5 mt-10" />
      <div className="flex flex-col items-end space-y-2 mr-5">
        <h1 className="text-2xl font-bold">Service Status</h1>
        <div className="flex items-center space-x-2">
          <p className="text-sm">Last updated: {lastUpdated}</p>
          <span className="text-sm">|</span>
          <p className="text-sm">Next update in {countdown} sec</p>
        </div>
      </div>
    </header>
  );
};

export default Header2;