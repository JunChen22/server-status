'use client';
import React, { useState, useEffect } from 'react';
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

interface Event {
  action: string;
  dateCreated: string;
  description: string;
}

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/event?id=1`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const responseData: Event[] = await response.json();

        console.log('responseData:', responseData);
        setEvents(responseData);
      } catch (err) {
        console.error('Fetch error:', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="bg-gray-900 min-h-screen p-5">
      <StatusOverview servicesDown={0} />
      <UptimeTable />
      <OverallUptime data={fakeData} />
      <StatusUpdates events={events} />
      {/* Or to show no updates: */}
      {/* <StatusUpdates daysToShow={30} /> */}
      <Footer />
    </div>
  );
}