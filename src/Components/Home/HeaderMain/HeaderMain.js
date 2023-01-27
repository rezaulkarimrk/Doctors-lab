import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1' >
                <h1 style={{color: '#3A4256'}} >Your New Smile <br/> Starts Here</h1>
                <p className='text-secondary' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                <button className='btn btn-primary' >Get Appointment</button>
            </div>
            <div className='col-md-6' >
                <img src={chair} alt=''  className='img-fluid' />
            </div>

        </main>
    );
}

export default HeaderMain;
