export interface ServiceStatus {
    name: string;
    uptime: number; // This should be a number between 0 and 100
    // dates: string[];
    status: 'up' | 'down';
}