import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import Reveal from "../../utils/Reveal";

// METHOD FOR PORTFOLIO OBJECTS

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Monkeytype Clone",
    subtitle: "React",
    github: "https://github.com/lhcee3/Monketype-Clone",
    demo: "https://eazytype.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Future Prod",
    subtitle: "Open Source",
    github: "https://github.com/lhcee3/Productivity-app",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lora",
    subtitle: "React",
    github: "https://github.com/lhcee3/Algorand-Devtrack-Heatmap",
    demo: "https://lora.algokit.io/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio",
    subtitle: "Next Js",
    github: "https://github.com/lhcee3/Portfolio-Website",
    demo: "https://lhcee3.netlify.app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Reveal>
        <div className="section__header">
          <h2>Projects</h2>
        </div>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, subtitle, github, demo }) => {
            return (
              <Reveal>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <small>{subtitle}</small>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Portfolio;
