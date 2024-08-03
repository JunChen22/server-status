import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          setLastUpdated(new Date().toLocaleString());
          return 5;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Service Status</h1>
      <p className="text-sm">Last updated: {lastUpdated}</p>
      <p className="text-sm">Next update in {countdown} sec</p>
    </header>
  );
};

export default Header;