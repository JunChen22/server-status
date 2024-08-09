import React from 'react';

interface ServerStatusProps {
  totalServers: number;
  serversUp: number;
  serversDown: number;
  serversPaused: number;
}

const ServerStatus: React.FC<ServerStatusProps> = ({
  totalServers,
  serversUp,
  serversDown,
  serversPaused,
}) => {
  return (
    <div className="fixed bottom-0 right-0 bg-gray-900 text-white py-2 px-4 rounded-tl-md">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">Total</span>
          <span className="font-bold">{totalServers}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">Up</span>
          <span className="font-bold text-green-400">{serversUp}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">Down</span>
          <span className="font-bold text-red-400">{serversDown}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-400 mr-2">Paused</span>
          <span className="font-bold text-yellow-400">{serversPaused}</span>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;