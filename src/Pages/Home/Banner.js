import React from 'react';
import chair from '../../assets/images/chair.png';
import bgImage from '../../assets/images/bg.png';

const Banner = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "cover",
        }}
        className="hero min-h-screen "
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img className="w-75" src={chair} alt="" />
          </div>
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;