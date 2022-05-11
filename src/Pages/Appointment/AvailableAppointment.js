import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
      <div className="text-xl text-primary text-center">
        Available Appointments on {format(date, "PP")}
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:justify-center'>
          {services.map((singleService) => (
            <AppointService
              key={singleService._id}
              singleService={singleService}
            ></AppointService>
          ))}
        </div>
      </div>
    );
};

export default AvailableAppointment;