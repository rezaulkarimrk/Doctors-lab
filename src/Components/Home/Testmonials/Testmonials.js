import React from 'react';

import Testmonial from '../Testmonial/Testmonial';
import './Testmonial.css';
import wilson from '../../../images/people1.png';
import ema from '../../../images/people2.png';
import aliza from '../../../images/people3.png';
const testmonialData = [
    {
        quate: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quate: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
        name: 'Ema Gomex',
        from: 'California',
        img: ema
    },
    {
        quate: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
        name: 'Aliz Farari',
        from: 'California',
        img: aliza
    },

]


const Testmonials = () => {
    return (
        <section className='testmonials my-5 py-5' >
            <div className='container'>
                <div className='section-header' >
                    <h5 style={{ color: '#1cc7c1' }} className=''>Testmonial</h5>
                    <h1>Whats Our Patients <br /> Says </h1>
                </div>
                <div className='card-deck mt-5' >
                    <div className='d-flex justify-content-center' >
                        <div className='row w-75'>
                            {
                                testmonialData.map(testmonial => <Testmonial testmonial={testmonial} ></Testmonial>)
                            }
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Testmonials;
