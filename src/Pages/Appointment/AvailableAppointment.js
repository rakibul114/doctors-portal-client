import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/service")
          .then((res) => res.json())
          .then((data) => setServices(data));
    }, []);


    return (
      <div className="text-xl text-primary text-center">
        Available Appointments on {format(date, "PP")}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:justify-center">
          {services.map((singleService) => (
            <AppointService
              key={singleService._id}
              singleService={singleService}
              setTreatment={setTreatment}
            ></AppointService>
          ))}
        </div>
        {treatment && <BookingModal treatment={treatment}
          date={date}
          setTreatment={setTreatment}
        ></BookingModal>}
      </div>
    );
};

export default AvailableAppointment;