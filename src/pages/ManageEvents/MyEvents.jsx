import { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';

const MyEvents = ({ eventsCreatedByPromise }) => {
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
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-gray-200 md:text-lg lg:text-xl'>
                        <th></th>
                        <th>Event Name</th>
                        <th className='text-center'>Event Type</th>
                        <th colSpan={2} className='text-center'>
                            <NavLink to="/create-event" className='btn btn-accent w-3/4 font-bold lg:text-lg text-red-700'> Add New Event</NavLink>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        myEvents.map((event, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className=' text-base max-w-56'>{event.eventName}</td>
                                <td className='text-center'>{event.eventType}</td>

                                <td className='text-center '><NavLink to={`/updateEvent/${event._id}`} className='btn btn-success w-full font-bold text-indigo-600'>Update</NavLink></td>

                                <td onClick={() => handleDelete(event._id)} className='text-center'><button className='btn btn-error w-full font-bold'>Delete</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyEvents;