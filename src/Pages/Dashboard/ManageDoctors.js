import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
      fetch("http://localhost:5000/doctor", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
      }).then((res) => res.json())
    );


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
      <div className="container mx-auto">
        <h3 className="text-center">Manage your doctors: {doctors.length}</h3>
        <div className="overflow-x-auto">
          <div className="container mx-auto px-10">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Specialty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor, index) => (
                  <DoctorRow
                    key={doctor._id}
                    doctor={doctor}
                    index={index}
                    refetch={refetch}
                    setDeletingDoctor={setDeletingDoctor}
                  ></DoctorRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {deletingDoctor && (
          <DeleteConfirmModal
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
          ></DeleteConfirmModal>
        )}
      </div>
    );
};

export default ManageDoctors;