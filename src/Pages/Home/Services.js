import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ];
    return (
      <div className="my-28 px-20">
        <div className="text-center">
          <h3 className="text-primary text-xl font-bold uppercase">
            Our Services
          </h3>
          <h2 className="text-4xl mb-5">Services We Provide</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3 justify-items-center">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;