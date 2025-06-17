import React from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router';

const Slide = ({ imges }) => {
    const { user } = useAuth();

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    `url(${imges})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content">
                <div className="flex flex-col justify-center items-center">
                    <h1 className='md:text-4xl text-success font-bold capitalize '>welcome our webside</h1>
                    {
                        user && <NavLink to="/create-event" className="btn btn-primary btn-lg mt-8">Create Event</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Slide;