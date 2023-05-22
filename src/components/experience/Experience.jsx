import React from 'react';
import './experience.css';

const Experience = () => {
  const bullet = (company, title, date) => (
    <div className='bullet__container'>
        <div className='line'>
            <div className='company__container'>
                <h4>{company}</h4>
                <h5>{title}</h5>
                <h5>{date}</h5>
            </div>
        </div>
    </div>
  );

  return (
    <section id="experience">
      <h5>My Experience So Far</h5>
      <h2>Experience</h2>

      <div className='container timeline__container'>
          {bullet('Lief Labs', 'Software Engineer', '08/2022 - Present')}
          {bullet('MetaLab', 'Software Engineer', '06/2020 - 09/2021')}
          {bullet('Kyte Rental', 'Software Engineer Intern', '05/2018 - 08/2019')}
      </div>
    </section>
  )
}

export default Experience
