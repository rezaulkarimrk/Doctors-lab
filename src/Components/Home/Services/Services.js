import React from 'react';
import flouride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png';
import Whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetail/ServiceDetails';

const servicesData = [
    {
        name: 'Flouride Treatment',
        img: flouride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }

]

const Services = () => {
    return (
        <section className='services-container mt-5 ' >
            <div className='text-center' >
                <h5 style={{ color: '#1cc7c1' }} >OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center' >
                <div className='w-75 row mt-5 ' >
                    {
                        servicesData.map(service => <ServiceDetails service={service} ></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;
