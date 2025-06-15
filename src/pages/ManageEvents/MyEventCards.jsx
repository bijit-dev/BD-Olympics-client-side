import { use, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const MyEventCards = ({ eventsCreatedByPromise }) => {
    const myEventsData = use(eventsCreatedByPromise);
    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        setMyEvents(myEventsData);
    }, [myEventsData]);

    // handle delete event
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // start deleting the event
                fetch(`${import.meta.env.VITE_API_URL}/event/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // remove the event from the state
                            const remainingevent = myEvents?.filter(e => e._id !== _id);
                            setMyEvents(remainingevent);
                        }
                    })
            }
        });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10">
            {myEvents.map((event, index) => <div key={index} className="card bg-base-100 shadow-lg">
                <figure>
                    <img src={event.imageURL} alt={event.eventName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{event.eventName}</h2>
                    <p className="text-gray-600 font-medium text-lg">Event Type: {event.eventType}</p>
                    <div className="card-actions justify-end">
                        <p className="text-green-600 font-medium text-lg">Event Date: {new Date(event.eventDate).toLocaleDateString()}</p>

                        <div className="w-full flex justify-evenly mt-2">
                            <NavLink to={`/updateEvent/${event._id}`} className='btn btn-soft btn-success  font-bold border-2 border-green-400'><FaEdit />Update</NavLink>
                            <button onClick={() => handleDelete(event._id)} className='btn btn-soft btn-error font-bold border-2 border-red-400'><RiDeleteBin6Fill />Delete</button>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    );
};

export default MyEventCards;