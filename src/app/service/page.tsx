import React from 'react';

interface PageProps {
    // Define your props here
}

const Page: React.FC<PageProps> = () => {
    // Add your component logic here

    return (
        <div>
            {/* Add your JSX content here */}
            <div className="animate-bounce">
                This element will bounce
            </div>
        </div>
    );
};

export default Page;