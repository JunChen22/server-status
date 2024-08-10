import React from 'react';
import StatusUpdateHistory from '@/components/StatusUpdateHistory';

interface PageProps {
    id: string;
}

interface StatusUpdate {
    id: string;
    timestamp: Date;
    content: string;
}

const mockStatusUpdates: StatusUpdate[] = [
    {
        id: '1',
        timestamp: new Date('2024-08-05T14:30:00'),
        content: 'Service maintenance completed successfully.',
    },
    {
        id: '2',
        timestamp: new Date('2024-08-03T09:15:30'),
        content: 'Minor outage resolved in East US region.',
    },
    {
        id: '3',
        timestamp: new Date('2024-08-01T12:45:15'),
        content: 'New feature rollout: improved dashboard analytics.',
    },
    {
        id: '4',
        timestamp: new Date('2024-08-30T08:00:00'),
        content: 'Security patch applied to all servers.',
    },
    {
        id: '5',
        timestamp: new Date('2024-08-28T16:20:45'),
        content: 'Database optimization completed, resulting in 20% faster queries.',
    },
    {
        id: '6',
        timestamp: new Date('2024-08-27T10:10:10'),
        content: 'Scheduled maintenance completed without issues.',
    },
    {
        id: '7',
        timestamp: new Date('2024-07-26T14:50:30'),
        content: 'Resolved intermittent connectivity issues in the EU region.',
    },
    {
        id: '8',
        timestamp: new Date('2024-07-25T09:30:00'),
        content: 'Updated SSL certificates across all services.',
    },
    {
        id: '9',
        timestamp: new Date('2024-07-24T11:45:00'),
        content: 'Improved load balancing for better performance.',
    },
];

const Page: React.FC<PageProps> = ({ id }) => {
    return (
        <div className='text-white'>
            <StatusUpdateHistory updates={mockStatusUpdates} />
        </div>
    );
};

export default Page;