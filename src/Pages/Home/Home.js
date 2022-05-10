import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
      <div className="container px-12 mx-auto">
        <Banner></Banner>
        <Info></Info>
            <Services></Services>
        <BannerBottom></BannerBottom>
        <Appointment></Appointment>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;