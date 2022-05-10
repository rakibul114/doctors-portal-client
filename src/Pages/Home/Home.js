import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
      <div className="mx-auto">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <BannerBottom></BannerBottom>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    );
};

export default Home;