import React from 'react';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeApointMent from '../MakeApointment/MakeApointMent';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeApointMent></MakeApointMent>
            <Testmonials></Testmonials>
        </div>
    );
}

export default Home;
