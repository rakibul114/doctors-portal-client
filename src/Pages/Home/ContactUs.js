import React from 'react';
import bgImg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "604px",
        }}
      >
        <div>
          <div className="text-center my-4 pt-7">
            <h2 className="text-secondary font-bold">Contact Us</h2>
            <h3 className="text-3xl text-white">Stay connected with us</h3>
          </div>
          <div className="pb-8">
            <form className="flex flex-col justify-center items-center">
              <input
                type="email"
                placeholder="Email Address"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Subject"
                class="input input-bordered w-full max-w-xs my-3"
              />
              <textarea
                class="textarea w-80 mb-3"
                rows={3}
                placeholder="Your message"
              ></textarea>
              <PrimaryButton>Submit</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;