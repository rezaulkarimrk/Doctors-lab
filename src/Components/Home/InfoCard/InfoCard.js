import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className='col-md-4 text-white info-card ' >
            <div className={`d-flex info-container justify-content-around info-${info.background} align-items-center `}>
                <div className='mr-3' >
                    <FontAwesomeIcon className='info-icon' icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <small>{info.desc}</small>
                </div>
            </div>

        </div>
    );
}

export default InfoCard;
