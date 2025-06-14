import { useNavigate } from "react-router";


const EventPageCard = ({ event }) => {
    const Navigate = useNavigate();

    const handleDetails = (id) => {
        Navigate(`/event/${id}`);
    };
    
    return (
        <div className="card bg-base-100 shadow-lg">
            <figure>
                <img src={event.imageURL} alt={event.eventName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{event.eventName}</h2>
                <p className="text-gray-600 font-medium text-lg">Event Type: {event.eventType}</p>
                <div className="card-actions justify-end">
                    <p className="text-green-600 font-medium text-lg">Event Date: {new Date(event.eventDate).toLocaleDateString()}</p>
                    <button onClick={()=>handleDetails(event._id)} className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>

    );
};

export default EventPageCard;