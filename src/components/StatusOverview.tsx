import React from 'react';

interface StatusOverviewProps {
  servicesDown: number;
}

const StatusOverview: React.FC<StatusOverviewProps> = ({ servicesDown }) => (
  <div className="bg-gray-800 text-white p-4 my-4 rounded-lg flex items-center">
    <div
      className={`rounded-full w-6 h-6 ${
        servicesDown > 0 ? 'bg-red-400' : 'bg-green-400 animate-pulse'
      } mr-4 flex-none`}
    ></div>
    <h2 className="text-xl font-semibold">
      {servicesDown > 0
        ? `${servicesDown} service${servicesDown > 1 ? 's' : ''} down`
        : 'All services up'}
    </h2>
  </div>
);

export default StatusOverview;