import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TooltipState {
  show: boolean;
  x: number;
  y: number;
  date: string;
  uptime: number;
}

interface Service {
  id: string;
  name: string;
  dailyUptime: DailyUptime[];
  status: 'up' | 'down';
}

interface DailyUptime {
  date: string;
  uptime: number;
}

const UptimeRow: React.FC<Service> = ({ id, name, dailyUptime, status }) => {
  const [tooltip, setTooltip] = useState<TooltipState>({ show: false, x: 0, y: 0, date: '', uptime: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, date: string, uptime: number) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
      date,
      uptime
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  const averageUptime = dailyUptime.reduce((sum, day) => sum + day.uptime, 0) / dailyUptime.length;

  return (
    <div className="flex items-center py-2.5 relative border-b border-black/10 pb-4 mb-4">

      <div className='w-52 mr-2.5 ml-8 flex items-center'>
        <a href={`/${id}`} className='flex items-center'>
          {name}
          <ArrowRight size={16} className='ml-1' />
        </a>
      </div>

      <span className='text-green-400 ml-1 mr-5'>{averageUptime.toFixed(3)}%</span>


      <div className='flex space-x-1'>
        {dailyUptime.map((day, index) => (

          <div
            key={index}
            className={`w-0.5 h-8 rounded-full bg-green-500`}

            onMouseEnter={(e) => handleMouseEnter(e, day.date, day.uptime)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>

      <span className={`inline-block w-10 text-right ml-2 pl-1 pr-0.5 py-0.5 ${status === 'down' ? 'text-red-500' : 'text-white'}`}>
        {status === 'up' ? 'Up' : 'Down'}
      </span>


      {tooltip.show && (
        <div
          className="fixed bg-gray-600 text-white p-2.5 rounded font-size-14 z-1000 transform -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <p>{tooltip.date}</p>
          <p>{tooltip.uptime.toFixed(3)}%</p>
        </div>
      )}
    </div>
  );
};

export default UptimeRow;