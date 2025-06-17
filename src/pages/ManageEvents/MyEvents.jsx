import { use, useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
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
        <div className="overflow-x-auto mt-10 border-2 border-green-300 rounded-2xl shadow-2xl">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-gray-200 md:text-lg lg:text-xl'>
                        <th></th>
                        <th>Event Name</th>
                        <th className='text-center'>Event Type</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        myEvents?.map((event, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className=' text-base max-w-56'>{event.eventName}</td>
                                <td className='text-center'>{event.eventType}</td>

                                <td className='text-center '><NavLink to={`/updateEvent/${event._id}`} className='btn btn-soft btn-success w-full font-bold border-2 border-green-400'><FaEdit />Update</NavLink></td>

                                <td className='text-center'><button  onClick={() => handleDelete(event._id)} className='btn btn-soft btn-error w-full font-bold border-2 border-red-400'><RiDeleteBin6Fill  />Delete</button></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyEvents;