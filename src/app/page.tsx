import React, { useState } from 'react';
import UptimeTable from '../components/UptimeTable';

export default function Home() {

  return (
    <div style={{ backgroundColor: '#0F172A', minHeight: '100vh', padding: '20px' }}>
      <UptimeTable />
    </div>
  );
}