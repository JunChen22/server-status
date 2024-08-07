import React, { useState } from 'react';
import styles from '../styles/UptimeRow.module.css';

interface TooltipState {
  show: boolean;
  x: number;
  y: number;
  date: string;
  uptime: number;
}

interface Service {
  name: string;
  dailyUptime: DailyUptime[];
  status: 'up' | 'down';
}

interface DailyUptime {
  date: string;
  uptime: number;
}

const UptimeRow: React.FC<Service> = ({ name, dailyUptime, status }) => {
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
    <div className={styles.row}>
      <div className={styles.serviceInfo}>
        <span>{name}</span>
        <span className={styles.uptimePercentage}>{averageUptime.toFixed(3)}%</span>
      </div>
      <div className={styles.uptimeBar}>
        {dailyUptime.map((day, index) => (
          <div
            key={index}
            className={`${styles.uptimeDay} ${day.uptime < 100 ? styles.down : ''}`}
            style={{ width: `${100 / dailyUptime.length}%` }}
            onMouseEnter={(e) => handleMouseEnter(e, day.date, day.uptime)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <span className={`${styles.statusIndicator} ${status === 'down' ? styles.down : ''}`}>
        {status === 'up' ? 'Up' : 'Down'}
      </span>
      {tooltip.show && (
        <div 
          className={styles.tooltip} 
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