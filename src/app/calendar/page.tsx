import React from 'react';
import StatusCalendar from '@/components/StatusCalendar';

interface PageProps {
    id: string;
}

const Page: React.FC<PageProps> = ({ id }) => {

    const data = [
        { date: '2024-08-01', status: 100 },
        { date: '2024-08-02', status: 75 },
        // ... more data
    ];
    return (
        <div className='text-white'>
            calendar + {id}
            <div className="container mx-auto mt-8">
                <StatusCalendar month={7} year={2024} data={data} />
            </div>
        </div>
    );
};

export default Page;


