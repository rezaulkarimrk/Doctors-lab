import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

const infosData = [
    {
        title: 'Openint Hours',
        desc: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Locetion',
        desc: 'Akkelpur, Joypurhat 5640, Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us Now',
        desc: '+8801521533574',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className='d-flex justify-content-center ' >
            <section className='row w-75 ' >
            {
                infosData.map(info => <InfoCard info={info} ></InfoCard>)
            }
        </section>

        </div>
        
    );
}

export default BusinessInfo;
