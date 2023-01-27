import React from 'react';

import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeApointMent = () => {
    return (
        <section className='make-appointment' >
            <div className='container'>
                <div className='row' >
                    <div className='col-md-5 d-none d-md-block ' >
                        <img src={doctor} alt="" />
                    </div>
                    <div   className='col-md-7 text-white py-5'>
                        <h5 style={{color: '#1cc7c1'}} className='text-uppercase' >Appointment</h5>
                        <h1 className=' mt-5 mb-4' >Make an appointment Today</h1>
                        <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its</p>
                        <button className='btn btn-primary mt-3 ' >Learn More</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default MakeApointMent;
