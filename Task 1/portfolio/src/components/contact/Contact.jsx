import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { BsArrowRight } from "react-icons/bs";
import Reveal from "../../utils/Reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_73htloi",
      "template_5dloqiw",
      form.current,
      "yjKiiWeFFvwY6rZFF"
    );

    e.target.reset();
    alert("Your message has been sent successfully!");
  };

  return (
    <section id="contact">
      <Reveal>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <h2 className="text-green">
                Let's connect <BsArrowRight className="contact__option-icon" />
              </h2>
              <p>
                I'm a India-based{" "}
                <span className="bold underline__yellow">frontend developer</span> who
                brings my unique blend of expertise in{" "}
                <span className="bold underline__yellow">web design</span> and{" "}
                <span className="bold underline__yellow">content strategy</span> to
                create exceptional user interfaces with{" "}
                <span className="bold underline__yellow">React</span>.
              </p>
              <p>
                If you consider me a good candidate for an open position, would
                like to discuss a freelance project, or just say hello, feel
                free to contact me on social media or by email.
              </p>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
