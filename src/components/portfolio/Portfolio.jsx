/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Slack.png";
import IMG2 from "../../assets/Hoobank.png";
import IMG3 from "../../assets/linkedin.png";
import IMG4 from "../../assets/todo.png";
import IMG5 from "../../assets/chirp.png";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "LinkedIn Clone",
    github: "https://linkedin-clone-yt-6a785.web.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Hoobank",
    github: "https://hoobank-test-site.netlify.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "Slack with ChatGPT",
    github: "https://slack-clone-7a938.web.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "To Do Tracker",
    github: "https://todo-iirx8jfpf-space-prince0821.vercel.app/"
  },
  {
    id: 5,
    image: IMG5,
    title: "EmojiM",
    github: "https://chirp-nz149m3tu-space-prince0821.vercel.app/"
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
                  Website
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
