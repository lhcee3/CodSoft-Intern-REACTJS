import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import Reveal from "../../utils/Reveal";

const Footer = () => {
  return (
    <footer>
      <Reveal>
        <a href="#" className="footer__logo">
          <span className="text-yellow">&#60;</span> lhcee3{" "}
          <span className="text-yellow">/&#62;</span>
        </a>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/saianeeshg90/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/lhcee3"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Sai Aneesh. All rights reserved.</small>
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
