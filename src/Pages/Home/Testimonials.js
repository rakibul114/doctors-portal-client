import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
      <section className='my-20'>
        <div className='flex justify-between'>
          <div>
            <h3 className="text-xl text-primary font-bold">Testimonials</h3>
            <h2 className="text-3xl">What Our Patients Say</h2>
          </div>
                <div>
                <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
        </div>
        <div></div>
      </section>
    );
};

export default Testimonials;