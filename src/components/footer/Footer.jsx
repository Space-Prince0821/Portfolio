/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>PRINCE</a>
            
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experiece'>Skills</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.facebook.com/prince.chowdury.1'><FaFacebookF /></a>
                <a href='https://www.instagram.com/the_only_prince_charming/'><FiInstagram /></a>
                <a href='https://www.linkedin.com/in/prince-chowdury/'><BsLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Prince's Portfolio, all rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;