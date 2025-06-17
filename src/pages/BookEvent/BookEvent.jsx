import React from 'react';
import { Link } from 'react-router';

const BookEvent = () => {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <title>Booking Events</title>
            comeing sone . <br />
            you can vizit events
            <Link to="/eventsPage" className='btn btn-success mt-8'>events </Link>
        </div>
    );
};

export default BookEvent;BookEvent