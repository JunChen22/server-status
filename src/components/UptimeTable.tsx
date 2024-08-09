"use client";
import React, { useState } from 'react';
import UptimeRow from './UptimeRow';
import { Calendar } from 'lucide-react';
import Link from 'next/link';

interface DailyUptime {
  date: string;
  uptime: number;
}

interface Service {
  id: string;
  name: string;
  dailyUptime: DailyUptime[];
  status: 'up' | 'down';
}


const UptimeTable: React.FC = () => {
  const services: Service[] = [
    {
      id: '1',
      name: 'Discord | Github Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 10
      })),
      status: 'up'
    },
    {
      id: '2',
      name: 'Discord | Mod Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 43
      })),
      status: 'down'
    },
    {
      id: '3',
      name: 'DLM | Frontpage',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 99
      })),
      status: 'up'
    },
    {
      id: '4',
      name: 'Discord | Mod Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 43
      })),
      status: 'down'
    },
    {
      id: '5',
      name: 'DLM | Frontpage',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 99
      })),
      status: 'up'
    },
    {
      id: '6',
      name: 'Discord | Mod Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 43
      })),
      status: 'down'
    },
    {
      id: '7',
      name: 'DLM | Frontpage',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 99
      })),
      status: 'up'
    },
    {
      id: '8',
      name: 'Discord | Mod Bot',
      dailyUptime: Array(90).fill(0).map((_, i) => ({
        date: new Date(2024, 6, 15 - i).toLocaleDateString(),
        uptime: 43
      })),
      status: 'down'
    },
    {
      id: '9',
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
      <div className="flex justify-between items-center mb-2 p-1 my-4">
        <h2 className="text-2xl font-semibold text-white">
          Uptime <span className="text-sm text-gray-400">Last 90 days</span>
        </h2>
        <div className="flex items-center">
          <Calendar className="mr-2 text-green-500" />
          <Link href="/calendar" className="text-lg font-semibold text-green-500 underline hover:no-underline">
            Calendar view
          </Link>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg p-3 text-white font-sans">
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