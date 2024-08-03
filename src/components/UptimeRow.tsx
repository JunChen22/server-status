import React, { useState } from 'react';
import styles from './UptimeRow.module.css';

interface UptimeRowProps {
  serviceName: string;
  uptime: number;
  status: 'up' | 'down';
}

const UptimeRow: React.FC<UptimeRowProps> = ({ serviceName, uptime, status }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowTooltip(true);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className={styles.row}>
      <div className={styles.serviceInfo}>
        <span>{serviceName}</span>
        <span className={styles.uptimePercentage}>{uptime.toFixed(3)}%</span>
      </div>
      <div 
        className={styles.uptimeBar} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className={`${styles.uptimeProgress} ${status === 'down' ? styles.down : ''}`} 
          style={{ width: `${uptime}%` }}
        />
      </div>
      <span className={`${styles.statusIndicator} ${status === 'down' ? styles.down : ''}`}>
        {status === 'up' ? 'Up' : 'Down'}
      </span>
      {showTooltip && (
        <div 
          className={styles.tooltip} 
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          <p>July 15, 2024</p>
          <p>{uptime.toFixed(3)}%</p>
        </div>
      )}
    </div>
  );
};

export default UptimeRow;