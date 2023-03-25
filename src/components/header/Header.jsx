import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/DB5DE4F6-6452-4759-B164-16242C3192CC_1_105_c.jpeg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Prince Chowdury</h1>
                <h5 className="text-light">Full-Stack Ruby on Rails and React Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="selfie"/>
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;