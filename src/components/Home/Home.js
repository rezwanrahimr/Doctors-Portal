import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Info from '../Info/Info';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Care></Care>
        </div>
    );
};

export default Home;