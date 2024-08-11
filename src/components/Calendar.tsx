'use client';
import React, { useState } from 'react';

type LogData = {
  [date: number]: number | null;
};

const getBackgroundColor = (percentage: number | null) => {
  if (percentage === null) return 'bg-gray-600';
  if (percentage === 100) return 'bg-green-500';
  if (percentage < 100 && percentage >= 0) return 'bg-red-500';
  return 'bg-gray-600';
};

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Calendar: React.FC<{
  date: Date;
  logData: LogData;
}> = ({ date, logData }) => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const getMonthData = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getMonthData(date);

  const calculatePercentage = () => {
    const validDays = Object.values(logData).filter(value => value !== null && value >= 0);
    const totalPercentage = validDays.reduce((sum, value) => sum + (value as number), 0);
    return validDays.length > 0 ? (totalPercentage / validDays.length).toFixed(0) : '0';
  };

  const title = () => {
    return (
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </span>
        <span className="text-green-500 text-sm">{calculatePercentage()}%</span>
      </div>
    );
  }

  const renderCalendar = () => {
    const cells = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const percentage = logData[day];

      const cellContent = (
        <div
          className={`w-10 h-10 ${getBackgroundColor(percentage)} rounded-sm relative`}
          onMouseEnter={() => setHoveredDay(day)}
          onMouseLeave={() => setHoveredDay(null)}
        >
          {hoveredDay === day && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
              Date: {date.getFullYear()}-{(date.getMonth() + 1).toString().padStart(2, '0')}-{day.toString().padStart(2, '0')}
              <br />
              {percentage !== null && percentage >= 0 ? `${percentage}%` : 'No records'}
            </div>
          )}
        </div>
      );

      cells.push(
        <div key={day} className="flex items-center justify-center">
          {cellContent}
        </div>
      );
    }

    // Add empty cells for days before the 1st of the month
    const emptyCells = Array(firstDay).fill(null).map((_, index) => (
      <div key={`empty-${index}`} className="w-7 h-7" />
    ));

    return (
      <div className="grid grid-cols-7 gap-1">
        {emptyCells}
        {cells}
      </div>
    );
  };

  return (
    <div>
      {title()}
      {renderCalendar()}
    </div>
  );
};

export default Calendar;