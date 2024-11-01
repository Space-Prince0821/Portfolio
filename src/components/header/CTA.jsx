import React from 'react';
import CV from '../../assets/Prince_Chowdury_Resume.pdf'

const CTA =  () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's chat</a>
        </div>
    );
}

export default CTA;