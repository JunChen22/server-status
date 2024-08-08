'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Update {
  date: string;
  message: string;
}

interface StatusUpdatesProps {
  daysToShow: number;
  updates?: Update[];
}

const StatusUpdates: React.FC<StatusUpdatesProps> = ({ daysToShow, updates = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const initialDisplayCount = 3;

  const handleShowMore = () => {
    if (showAll) {
      router.push('/status-history');
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-2">
        Status updates <span className="text-gray-400 text-sm font-normal">Last {daysToShow} days</span>
      </h2>
      <div className="bg-gray-700 p-3 rounded">
        {updates.length > 0 ? (
          <>
            <ul className="space-y-2">
              {(showAll ? updates : updates.slice(0, initialDisplayCount)).map((update, index) => (
                <li key={index} className="border-b border-gray-600 pb-2 last:border-b-0">
                  <span className="text-gray-400">{update.date}</span> - {update.message}
                </li>
              ))}
            </ul>
            {updates.length > initialDisplayCount && (
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
            There are no updates in the last {daysToShow} days.{' '}
            <Link href="/status-history" className="text-green-400 hover:underline">
              Status update history
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default StatusUpdates;