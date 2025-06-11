import { useLoaderData } from "react-router";

const EventDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold mb-4">{data.eventName}</h1>
            <p className="text-gray-600 font-medium text-lg">Event Type: {data.eventType}</p>
            <p className="mb-4">{data.description}</p>
            <img src={data.imageUrl} alt={data.eventName} className="w-full h-auto mb-4" />
            <p className="text-green-600 font-medium text-lg">Date: {new Date(data.eventDate).toLocaleDateString()}</p>

            
            <p className="text-gray-600 font-medium text-lg">Organizer: {data.creatorName}</p>
            <p className="text-gray-600 font-medium text-lg">Contact: {data.creatorEmail}</p>

            <button className="btn btn-primary mt-4">Book Now</button>
        </div>
    );
};

export default EventDetails;