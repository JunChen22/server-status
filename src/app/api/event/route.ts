import { NextResponse } from 'next/server';

interface Event {
    action: string;
    dateCreated: string;
    description: string;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
    }
    const response = await fetch(`http://localhost:8080/application/${id}/events`);
    const responseData = await response.json();
    const events: Event[] = responseData.events;

    return NextResponse.json(events);
}