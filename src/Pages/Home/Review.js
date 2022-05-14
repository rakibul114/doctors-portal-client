import React from 'react';

const Review = ({review}) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, quaerat architecto reiciendis tempora ex magnam ratione
            modi a natus, id, corporis odit. Culpa, magnam provident in tempora
            odit error! Voluptas?
          </p>
        </div>
        <div className='flex items-center p-5 gap-5'>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt='' />
            </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
        </div>
      </div>
    );
};

export default Review;