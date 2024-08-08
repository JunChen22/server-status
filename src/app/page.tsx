import React from 'react';
import Header from '@/components/Header';
import UptimeTable from '@/components/UptimeTable';
import OverallUptime from '@/components/OverallUptime';
import StatusOverview from '@/components/StatusOverview';
import StatusUpdates from '@/components/StatusUpdates';
import Footer from '@/components/Footer';

// Define the type 'UptimeData'
type UptimeData = {
  last24Hours: number;
  last7Days: number;
  last30Days: number;
  last90Days: number;
};

// Define the fake data
const fakeData: UptimeData = {
  last24Hours: 99.987,
  last7Days: 99.876,
  last30Days: 99.765,
  last90Days: 99.654,
};

const fakeUpdates = [
  { date: '2024-08-05', message: 'Service maintenance completed successfully.' },
  { date: '2024-08-03', message: 'Minor outage resolved in East US region.' },
  { date: '2024-08-01', message: 'New feature rollout: improved dashboard analytics.' },
  { date: '2024-07-30', message: 'Security patch applied to all servers.' },
  { date: '2024-07-28', message: 'Database optimization completed, resulting in 20% faster queries.' },
];


export default function Home() {
  return (
    <div style={{ backgroundColor: '#0F172A', minHeight: '100vh', padding: '20px' }}>
      <Header />
      <StatusOverview servicesDown={2} />
      <UptimeTable />
      <OverallUptime data={fakeData} />
      <div className="container mx-auto p-4">
      <StatusUpdates daysToShow={30} updates={fakeUpdates} />
      {/* Or to show no updates: */}
      {/* <StatusUpdates daysToShow={30} /> */}
      <Footer />
    </div>
  </div>
  );
}