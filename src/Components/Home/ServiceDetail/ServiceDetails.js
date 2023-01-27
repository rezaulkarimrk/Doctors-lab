import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 text-center ' >
            <img style={{height: '50px'}} src={service.img} alt='' />
            <h5 className='mt-5 mb-5' >{service.name}</h5>
            <p className='text-secondary' > as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.</p>
        </div>
    );
}

export default ServiceDetails;
