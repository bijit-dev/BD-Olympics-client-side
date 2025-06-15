import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const EventDetails = () => {
    const data = useLoaderData();
    const { user } = useAuth();

    const navigate = useNavigate();

    const { eventName, eventType, description, imageURL, eventDate, creatorName, creatorEmail } = data;

    const handleBooking = () => {
        navigate(`/myBookings`);
        const bookingEvent = data;
        bookingEvent.user_email = user.email

        console.log(bookingEvent);

        axios.post(`${import.meta.env.VITE_API_URL}/booking`, bookingEvent)
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "New Event added successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="card lg:card-side bg-base-100 border  shadow-lg">
                <figure className="w-full lg:w-4/2 ">
                    <img className="w-full h-full "
                        src={imageURL}
                        alt={eventName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{eventName}</h2>
                    <p className="text-gray-600 font-medium text-lg">Event Type: {eventType}</p>
                    <p className="text-green-600 font-medium text-lg">Date: {new Date(eventDate).toLocaleDateString()}</p>
                    <p className=" text-justify">{description}</p>


                    <p className="text-gray-600 font-medium text-lg">Organizer: {creatorName}</p>
                    <p className="text-gray-600 font-medium text-lg">Contact: {creatorEmail}</p>

                    <div className="card-actions justify-end">
                        <button onClick={handleBooking} className="btn btn-primary mt-4">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventDetails;