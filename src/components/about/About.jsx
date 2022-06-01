import React from 'react';
import './about.css';
import ME from '../../assets/E0B1CEDC-BC81-4C94-9A54-B8DE3193A242_1_105_c.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="selfie number 2"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Bachelor's</h5>
                            <small>in Computer Science</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>In progress</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>Multiple Completed</small>
                        </article>
                    </div>

                    <p>
                        Recently graduated with a bachelor's degree in Computer Science. Looking for frontend development job positions, as it is my passion and goal. I enjoy creating different types of webpages, especially using JavaScript libraries like reactJS. I plan to eventually become a full stack developer, once I gain more experience in the backend field.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;