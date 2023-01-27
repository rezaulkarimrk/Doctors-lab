import React from 'react';
import featured from '../../../images/treatment.png';

const FeatureService = () => {
    return (
        <section className='features-service pb-0 pb-md-5 my-5' >
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img className='img-fluid' src={featured} alt='' />
                    </div>
                    <div className='col-md-7 align-self-center'>
                        <h1>Exception Dental Care, on you Term</h1>
                        <p className='text-secondary my-5' >y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validLine 31:25:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                        </p>
                        <button className='btn btn-primary' >Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureService;
