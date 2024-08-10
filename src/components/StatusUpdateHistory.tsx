'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface StatusUpdate {
    id: string;
    timestamp: Date;
    content: string;
}

interface StatusUpdateHistoryProps {
    updates: StatusUpdate[];
    onBack: () => void;
}

const StatusUpdateHistory: React.FC<StatusUpdateHistoryProps> = ({ updates, onBack }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showAll, setShowAll] = useState(false);

    const filteredUpdates = updates.filter(
        update => update.timestamp.getMonth() === currentMonth.getMonth() &&
            update.timestamp.getFullYear() === currentMonth.getFullYear()
    );

    const displayedUpdates = showAll ? filteredUpdates : filteredUpdates.slice(0, 5);

    const changeMonth = (increment: number) => {
        setCurrentMonth(prevMonth => {
            const newMonth = new Date(prevMonth);
            newMonth.setMonth(newMonth.getMonth() + increment);
            return newMonth;
        });
    };

    const formatTimestamp = (timestamp: Date) => {
        return timestamp.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <div className="bg-gray-900 text-white p-4 rounded-lg">
            <button onClick={onBack} className="p-1 rounded-full hover:bg-gray-700">
                <ArrowLeft size={20}
                />
            </button>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">

                    <h2 className="text-2xl font-bold">Status update history</h2>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-gray-700">
                        <ChevronLeft size={24} />
                    </button>
                    <span className="text-lg">
                        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </span>
                    <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-gray-700">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {displayedUpdates.length > 0 ? (
                <ul className="space-y-2">
                    {displayedUpdates.map(update => (
                        <li key={update.id} className="bg-gray-800 p-3 rounded">
                            <p className="text-sm text-gray-400">{formatTimestamp(update.timestamp)}</p>
                            <p>{update.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="bg-gray-800 p-4 rounded text-center text-gray-400">
                    No updates for this date.
                </div>
            )}

            {filteredUpdates.length > 5 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-4 text-blue-400 hover:text-blue-300"
                >
                    {showAll ? 'Show less' : 'Show more'}
                </button>
            )}
        </div>
    );
};

export default StatusUpdateHistory;