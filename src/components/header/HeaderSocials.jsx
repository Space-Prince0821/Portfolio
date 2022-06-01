import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/prince-chowdury" target='_blank' rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/Space-Prince0821" target='_blank' rel="noreferrer"><BsGithub /></a>
            <a href="https://www.instagram.com/the_only_prince_charming/" target='_blank' rel="noreferrer"><BsInstagram /></a>
        </div>
    );
}

export default HeaderSocials;