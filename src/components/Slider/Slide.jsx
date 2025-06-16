import React from 'react';
import useAuth from '../../hooks/useAuth';

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
                <div className="">
                    <h1 className='md:text-4xl text-success font-bold capitalize '>welcome our webside</h1>
                    {
                        user && <NavLink to="/create-event" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>Create Event</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Slide;