"use client";

import React, { useState } from 'react';
import styles from '../styles/UptimeTable.module.css';
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
    <div className={styles.container}>
      <h2 className={styles.title}>Uptime Last 90 days</h2>
      <div className={styles.tableContainer}>
        {services.map((service) => (
          <UptimeRow key={service.name} {...service} />
        ))}
      </div>
    </div>
  );
};

export default UptimeTable;