import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DayStatus {
  date: string;
  status: number | null;
}

interface CalendarProps {
  month: number;
  year: number;
  data: DayStatus[];
}

const StatusCalendar: React.FC<CalendarProps> = ({ month, year, data }) => {
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthName = (month: number) => {
    return new Date(year, month).toLocaleString('default', { month: 'long' });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(month, year);
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayData = data.find(d => d.date === currentDate);
      const status = dayData ? dayData.status : null;

      let bgColor = 'bg-gray-500'; // Default color for no record
      let statusText = '';

      if (status !== null) {
        if (status === 100) {
          bgColor = 'bg-green-500';
        } else {
          bgColor = 'bg-red-500';
          statusText = `${status}%`;
        }
      }

      days.push(
        <div key={i} className={`w-8 h-8 m-1 flex items-center justify-center text-white text-xs font-bold rounded-md ${bgColor}`}>
          {i}
          {statusText && <span className="ml-1">{statusText}</span>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">{getMonthName(month)} {year}</h2>
        <div className="flex space-x-2">
          <button className="text-white"><ChevronLeft /></button>
          <button className="text-white"><ChevronRight /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default StatusCalendar;