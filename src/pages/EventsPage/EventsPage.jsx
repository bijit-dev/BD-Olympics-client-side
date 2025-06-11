import { useLoaderData } from "react-router";
import EventPageCard from "./EventPageCard";

const EventsPage = () => {
    const events = useLoaderData();
    
    return (
        <div>
            <div className='container mx-auto px-4 py-12'>
                <h1 className='text-2xl text-center font-bold mb-4'>Events</h1>
                <p className='mb-4 text-center'>Here you can find a list of all events.</p>

                {/* Search form */}
                <form className="mb-6 flex justify-center">
                    <input className="input md:w-2/5" type="text" name="search" id="scarch" placeholder="search event name or location " />
                    
                    <button className="btn btn-primary ml-2">Search</button>
                </form>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => <EventPageCard key={event._id} event={event} />)}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;