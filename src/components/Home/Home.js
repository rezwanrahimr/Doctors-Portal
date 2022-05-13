import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Info from '../Info/Info';
import Service from '../Service/Service';
import Tastomonial from '../Tastomonial/Tastomonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Care></Care>
            <Appoinment></Appoinment>
            <Tastomonial></Tastomonial>
        </div>
    );
};

export default Home;