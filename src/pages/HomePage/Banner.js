import React from 'react';
import BannerImg from '../../Assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={
            {backgroundImage:`url(${BannerImg})`
        }
        }>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Here you will get some extra ordinary drilling machine.
            We build powerful machines to make your life easy.</p>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;