'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Event {
  action: string;
  dateCreated: string;
  description: string;
}

interface StatusUpdatesProps {
  events?: Event[];
}

const StatusUpdates: React.FC<StatusUpdatesProps> = ({ events = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const initialDisplayCount = 3;

  const handleShowMore = () => {
    if (showAll) {
      router.push('/history');
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className='text-white '>
      <h2 className="text-2xl font-semibold mb-2 p-1 my-4">
        Status updates <span className="text-gray-400 text-sm">Last 30 days</span>
      </h2>
      <div className="bg-gray-800 p-3 rounded-lg">
        <div className="bg-gray-700 p-3 rounded">
          {events.length > 0 ? (
            <>
              <ul className="space-y-2">
                {(showAll ? events : events.slice(0, initialDisplayCount)).map((events, index) => (
                  <li key={index} className="border-b border-gray-600 pb-2 last:border-b-0">
                    <span className="text-gray-400">{events.dateCreated} {events.action} </span> - {events.description}
                  </li>
                ))}
              </ul>
              {events.length > initialDisplayCount && (
                <button
                  onClick={handleShowMore}
                  className="mt-4 text-green-400 hover:underline"
                >
                  {showAll ? 'View full history' : 'Show more'}
                </button>
              )}
            </>
          ) : (
            <p className="text-gray-400">
              There are no updates in the last 30 days.{' '}
              <Link href="/history" className="text-green-400 hover:underline">
                Status update history
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusUpdates;