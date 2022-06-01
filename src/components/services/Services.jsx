import React from "react";
import "./services.css";
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className="service__list-icon" />
                <p>Create application prototypes using Adobe XD</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Utilize Photoshop to create graphics for webpages</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Design system mock-ups using Figma</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className="service__list-icon" />
                <p>Develop SAP Webpages using HTML as well as </p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive websites using CSS</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Implement complex features using JavaScript</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Create large web applications by building components using ReactJS</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Build cross platform mobile applications using React Native</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className="service__list-icon" />
                <p>Large scale web applications using component based JavaScript libraries</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Responsive webpages for all devices</p>
            </li>
            <li>
                <BiCheck className="service__list-icon" />
                <p>Advanced CSS styling and Bootstrap</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
