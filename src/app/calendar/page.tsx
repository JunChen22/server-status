'use client';
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Calendar from '@/components/Calendar';

type LogData = {
  [date: number]: number | null;
};

type Service = {
  name: string;
  data: {
    [monthYear: string]: LogData;
  };
};

const page: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentService, setCurrentService] = useState('discord-github-bot');

  const services: { [key: string]: Service } = {
    'discord-github-bot': {
      name: 'Discord | Github Bot',
      data: {
        '6-2024': { 1: 0, 2: 10, 3: 2, 4: 50, 5: 100, /* ... other days ... */ 30: 0 },
        '7-2024': { /* July data */ },
        '8-2024': { /* August data */ }
      }
    },
    'other-service': {
      name: 'Other Service',
      data: {
        '7-2024': { 1: 0 },
      }
    }
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const adjustMonth = (date: Date, monthOffset: number): string => {
    const adjustedDate = new Date(date);
    adjustedDate.setMonth(adjustedDate.getMonth() + monthOffset);
    const month = adjustedDate.getMonth() + 1; // getMonth() is zero-based
    const year = adjustedDate.getFullYear();
    return `${month}-${year}`;
};

  const getLogData = ( monthOffset: number) => {
    const monthYear = adjustMonth(currentDate, monthOffset);
    return services[currentService].data[monthYear] || {};
  };

  const changeMonth = (delta: number) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + delta);
      return newDate;
    });
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-64">
      <div className='flex space-x-64'>
        <div className="flex-shrink-0 flex-grow-0">
          <Select
            value={currentService}
            onValueChange={setCurrentService}
          >
            <SelectTrigger className="w-full mb-4 bg-gray-800 border-gray-700 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(services).map(([key, service]) => (
                <SelectItem key={key} value={key}>{service.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-between items-center mb-2 flex-shrink-0 flex-grow-0">
          <button onClick={() => changeMonth(-1)} className="text-gray-400 hover:text-white">
            <ChevronLeft size={20} />
          </button>
          <span className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button onClick={() => changeMonth(1)} className="text-gray-400 hover:text-white">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex space-x-16">
        <div className="flex-shrink-0">
          <Calendar date={new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)} logData={getLogData(-1)} />
        </div>
        <div className="flex-shrink-0">
          <Calendar date={currentDate} logData={getLogData(0)} />
        </div>
        <div className="flex-shrink-0">
          <Calendar date={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)} logData={getLogData(1)} />
        </div>
      </div>
    </div>
  );
};

export default page;