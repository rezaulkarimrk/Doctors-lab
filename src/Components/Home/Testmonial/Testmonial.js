import React from 'react';

const Testmonial = ({testmonial}) => {
    return (
        <div className='col-md-4' >
            <p className='text-center' >{testmonial.quate}</p>
            <div className='row align-item-center pt-3 ' >
                <div className='col-md-4' >
                    <img style={{height: '65px', paddingLeft:'20px'}}  className='mr-3' src={testmonial.img}  alt='' />
                </div>
                <div className='col-md-8 p-0 pl-4' >
                    <h4 className='text-primary' >{testmonial.name}</h4>
                    <h6>{testmonial.from}</h6>
                </div>

            </div>
        </div>
    );
}

export default Testmonial;
