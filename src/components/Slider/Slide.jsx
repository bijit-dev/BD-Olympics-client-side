import React from 'react';

const Slide = ({ imges,title,semeTitle,detile }) => {

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
                    <h1 className="mb-2 text-xl lg:text-5xl font-bold">{title}</h1>
                    <h2 className="mb-5 text-base lg:text-xl font-semibold">{semeTitle}</h2>
                    <p className="mb-5 w-6/12 text-sm lg:text-base text-justify">{detile}</p>
                    <button className="btn rounded-3xl btn-primary ">Add to your interest</button>
                </div>
            </div>
        </div>
    );
};

export default Slide;