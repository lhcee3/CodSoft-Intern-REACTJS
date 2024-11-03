import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { SiWebflow } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import Reveal from "../../utils/Reveal";

const Experience = () => {
  return (
    <section id="experience">
      <Reveal>
        <div className="section__header">
          <h2>Experience</h2>
        </div>
        <div className="container experience__container">
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h3>HTML</h3>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h3>CSS</h3>
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className="experience__details-icon" />
              <div>
                <h3>JavaScript</h3>
              </div>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h3>React</h3>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h3>Tailwind CSS</h3>
              </div>
            </article>
            <article className="experience__details">
              <DiBootstrap className="experience__details-icon" />
              <div>
                <h3>Bootstrap</h3>
              </div>
            </article>
            <article className="experience__details">
              <FiFigma className="experience__details-icon" />
              <div>
                <h3>Figma</h3>
              </div>
            </article>
            <article className="experience__details">
              <SiWebflow className="experience__details-icon" />
              <div>
                <h3>Webflow</h3>
              </div>
            </article>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
