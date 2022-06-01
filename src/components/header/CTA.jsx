import React from 'react';
import CV from '../../assets/Updated-Resume4.pdf'

const CTA =  () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's chat</a>
        </div>
    );
}

export default CTA;