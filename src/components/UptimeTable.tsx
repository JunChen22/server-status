"use client";

import React, { useState } from 'react';
import UptimeRow from './UptimeRow';

interface DailyUptime {
  date: string;
  uptime: number;
}

interface Service {
  name: string;
  dailyUptime: DailyUptime[];
  status: 'up' | 'down';
}

const UptimeTable: React.FC = () => {
  const services: Service[] = [
    {
      name: 'Discord | Github Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({ 
        date: new Date(2024, 6, 15 - i).toLocaleDateString(), 
        uptime: 1
      })),
      status: 'down'
    },
    {
      name: 'Discord | Mod Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({ 
        date: new Date(2024, 6, 15 - i).toLocaleDateString(), 
        uptime: 43
      })),
      status: 'down'
    },
    {
      name: 'DLM | Frontpage',
      dailyUptime: Array(90).fill(0).map((_, i) => ({ 
        date: new Date(2024, 6, 15 - i).toLocaleDateString(), 
        uptime: 99
      })),
      status: 'up'
    },
    // Add more services as needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-white p-1 my-4">
        Uptime <span className="text-sm text-gray-500">Last 90 days</span>
      </h2>
      <div className="bg-gray-800 rounded-lg p-5 text-white font-sans">
      <div className="flex flex-col">
        {services.map((service) => (
          <UptimeRow key={service.name} {...service} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default UptimeTable;