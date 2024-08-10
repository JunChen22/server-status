interface UptimeData {
    last24Hours: number;
    last7Days: number;
    last30Days: number;
    last90Days: number;
}

const OverallUptime: React.FC<{ data: UptimeData }> = ({ data }) => (
    <div>
        <h2 className="text-3xl font-semibold mb-2 text-white p-1 my-4">Overall Uptime</h2>
        <div className="bg-gray-800 text-white p-4 my-4">
            <div className="grid md:grid-cols-4 gap-2 ml-8">
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-sm">Last 24 hours</p>
                        <p className="text-lg font-bold">
                            {data?.last24Hours !== undefined ? data.last24Hours.toFixed(3) : 'N/A'}%
                        </p>
                    </div>
                    <span className="divider">|</span>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-sm">Last 7 days</p>
                        <p className="text-lg font-bold">
                            {data?.last7Days !== undefined ? data.last7Days.toFixed(3) : 'N/A'}%
                        </p>
                    </div>
                    <span className="divider">|</span>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-sm">Last 30 days</p>
                        <p className="text-lg font-bold">
                            {data?.last30Days !== undefined ? data.last30Days.toFixed(3) : 'N/A'}%
                        </p>
                    </div>
                    <span className="divider">|</span>
                </div>
                <div className="flex items-center">
                    <div className="flex-1">
                        <p className="text-sm">Last 90 days</p>
                        <p className="text-lg font-bold">
                            {data?.last90Days !== undefined ? data.last90Days.toFixed(3) : 'N/A'}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OverallUptime;