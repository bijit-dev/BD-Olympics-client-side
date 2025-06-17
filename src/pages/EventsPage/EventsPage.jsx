import { useLoaderData } from "react-router";
import EventPageCard from "./EventPageCard";
import { useState } from "react";

const EventsPage = () => {
    const events = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = events.filter(event =>
        event?.eventName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='container mx-auto px-4 py-12'>
                <div className="relative">
                    <h1 className='text-2xl text-center font-bold mb-4'>Events</h1>
                    <p className='mb-8 text-center'>Here you can find a list of all events.</p>

                    {/* Search form */}
                    <div className="mb-12 flex justify-center absolute top-3 right-0">
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="text" required placeholder="Search events by name" value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} />
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map(event => <EventPageCard key={event._id} event={event} />)}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;