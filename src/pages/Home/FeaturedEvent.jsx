import FeaturedEventCard from "./FeaturedEventCard";
import { Link } from "react-router";

const FeaturedEvent = ({ data }) => {
    const newData = data.filter(event => {
        const eventDate = new Date(event.eventDate);
        const today = new Date();
        return eventDate >= today;
    }).slice(0, 6);

    return (
        <section className="pb-6 rounded-lg bg-green-50">
            <div className=" container mx-auto px-5 my-12 rounded-lg">
                <div className="text-center py-8">
                    <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-center mb-4">Welcome to Our Featured Event</h1>
                    <p className="text-center">Discover exciting events and book your spot today!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {
                        newData.map(event => <FeaturedEventCard key={event._id} event={event} />)}
                </div>

                {/* see all btn  */}
                <div className="flex justify-center">
                    <Link to="/eventsPage" className=" btn btn-success btn-md btn-wide mt-8 text-lg font-bold">See All</Link>
                </div>

            </div>
        </section>
    );
};

export default FeaturedEvent;