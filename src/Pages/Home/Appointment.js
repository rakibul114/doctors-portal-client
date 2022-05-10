import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center my-10 p-5 md:p-5 lg:p-0"
      >
        <div className="flex-1 hidden lg:block">
          <img className='mt-[-150px]' src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-primary font-bold">Appointment</h3>
          <h2 className="text-3xl text-white">Make an Appointment Today</h2>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            quibusdam iusto alias et quo deleniti officia magni dicta
            perspiciatis odio unde explicabo, consequuntur molestias facere quis
            quas quos aspernatur quod? Id, reiciendis quae voluptas nobis
            dolorum dicta alias! Eveniet, ut!
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </section>
    );
};

export default Appointment;