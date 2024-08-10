import React from 'react';

interface PageProps {
    id: string;
}

const Page: React.FC<PageProps> = ({ id }) => {
    return (
        <div className='text-white'>
            Hello {id}
        </div>
    );
};

export default Page;