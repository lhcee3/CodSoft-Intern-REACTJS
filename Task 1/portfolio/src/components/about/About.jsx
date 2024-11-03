import React from "react";
import "./about.css";
import { HiOutlineCode } from "react-icons/hi";
import { BiPaint } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
import Reveal from "../../utils/Reveal";

const About = () => {
  return (
    <section id="about">
      <Reveal>
        <div className="container about__container">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineCode className="about__icon" />
              <div className="about__text">
                <h3 className="text-green">Web Development</h3>
                <p>Proficient</p>
              </div>
            </article>
            <article className="about__card">
              <BiPaint className="about__icon" />
              <div className="about__text">
                <h3 className="text-green">Web Design</h3>
                <p>Excelling</p>
              </div>
            </article>
            <article className="about__card">
              <BiBookContent className="about__icon" />
              <div className="about__text">
                <h3 className="text-green">Content Strategy</h3>
                <p>Highly Proficient</p>
              </div>
            </article>
          </div>

          <div className="about__content">
            <div className="about__header">
              <h2>About Me</h2>
            </div>
            <p>
              I’m a frontend web developer passionate about building beautiful
              websites that people love to use. With less than an year of experience
              in the tech, healthcare and aviation industries, I've built a
              reputation for helping companies drive results by improving
              digital experiences and organizational processes using tools and
              technologies including React, JavaScript, HTML, CSS, Figma, Webflow
              and more.
            </p>
            <p className="bold">
              Learn more about my skills and experience{" "}
              <span className="underline__yellow">below</span>. <BsArrowDown />
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
