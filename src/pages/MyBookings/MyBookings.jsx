// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const MyBookings = () => {
    const data = useLoaderData();
    const { user } = useAuth();
    const [myEvents, setMyEvents] = useState([])

    useEffect(() => {
        if (user?.email) {
            const newMyBookingData = data.filter(event => event.user_email === user.email);
            setMyEvents(newMyBookingData);
        }
    }, [data, user?.email]);


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
                fetch(`${import.meta.env.VITE_API_URL}/booking/${_id}`, {
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
        <div className="overflow-x-auto">
            <title>
                My Bookings
            </title>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SI</th>
                        <th>Event Name</th>
                        <th className='text-center'>Event Type</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        myEvents?.map((event, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className='w-3/5'>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={event.imageURL}
                                                    alt={event.eventName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{event.eventName}</div>
                                            <div className="text-sm opacity-50">{event.location}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className='text-center'>{event.eventType}</td>

                                <td className='text-center'><button onClick={() => handleDelete(event._id)} className='btn btn-soft btn-error w-full font-bold border-2 border-red-400'><RiDeleteBin6Fill />Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyBookings;