import React from 'react';

interface UptimeData {
  last24Hours: number;
  last7Days: number;
  last30Days: number;
  last90Days: number;
}

const OverallUptime: React.FC<{ data: UptimeData }> = ({ data }) => (
  <div className="bg-gray-700 text-white p-4 my-4">
    <h2 className="text-xl font-semibold mb-2">Overall Uptime</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <p className="text-sm">Last 24 hours</p>
        <p className="text-lg font-bold">{data.last24Hours.toFixed(3)}%</p>
      </div>
      <div>
        <p className="text-sm">Last 7 days</p>
        <p className="text-lg font-bold">{data.last7Days.toFixed(3)}%</p>
      </div>
      <div>
        <p className="text-sm">Last 30 days</p>
        <p className="text-lg font-bold">{data.last30Days.toFixed(3)}%</p>
      </div>
      <div>
        <p className="text-sm">Last 90 days</p>
        <p className="text-lg font-bold">{data.last90Days.toFixed(3)}%</p>
      </div>
    </div>
  </div>
);

export default OverallUptime;