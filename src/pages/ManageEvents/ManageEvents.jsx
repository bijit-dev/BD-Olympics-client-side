import React from 'react';
import { NavLink } from 'react-router';

const ManageEvents = () => {
    return (
        <div className='container mx-auto px-4 py-12'>
            <h1 className='text-2xl font-bold mb-4'>Manage Events</h1>
            <p className='mb-4'>Here you can manage your events, including editing and deleting them.</p>
            
            {/* Add functionality to list, edit, and delete events here */}
            <NavLink to="/create-event" className='btn btn-success'> Add New Event</NavLink>
            
        </div>
    );
};

export default ManageEvents;