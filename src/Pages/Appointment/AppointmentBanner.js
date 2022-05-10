import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from '../../assets/images/chair.png';

const AppointmentBanner = () => {
    const [data, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
            <div>
              <DayPicker mode="single" selected={data} onSelect={setDate} />
              <p className="text-center mt-0">
                You have seleted: {format(data, "PP")}
              </p>
              ;
            </div>
          </div>
        </div>
     
    );
};

export default AppointmentBanner;
 