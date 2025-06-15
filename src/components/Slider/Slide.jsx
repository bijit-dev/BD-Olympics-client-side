import React from 'react';

const Slide = ({ imges }) => {

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
                </div>
            </div>
        </div>
    );
};

export default Slide;