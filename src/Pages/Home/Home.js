import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
      <div className="container px-12 mx-auto">
        <Banner></Banner>
        <Info></Info>
            <Services></Services>
            <BannerBottom></BannerBottom>
      </div>
    );
};

export default Home;