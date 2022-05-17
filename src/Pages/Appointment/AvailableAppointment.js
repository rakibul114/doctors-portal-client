import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  // using React Query
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://shielded-beach-28674.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="text-xl text-primary text-center">
      Available Appointments on {format(date, "PP")}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 lg:justify-center">
        {services?.map((singleService) => (
          <AppointService
            key={singleService._id}
            singleService={singleService}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
