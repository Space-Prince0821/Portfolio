/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/10cd38d1d9f6f82dbc86b7addcaec7e2.webp";
import IMG2 from "../../assets/5df5a84f3ed908ad7bad36fa645e3d4a.webp";
import IMG3 from "../../assets/ac332cca20a284b8654e77da6c7102d2.webp";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Recipe Finder",
    github: "https://github.com/jvsooon/recipe-finder",
  },
  {
    id: 2,
    image: IMG2,
    title: "Blog Site",
    github: "https://github.com/Space-Prince0821/Comp440",
  },
  {
    id: 3,
    image: IMG1,
    title: "Giga Pet Game",
    github: "https://comp484-pro-2.glitch.me/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
