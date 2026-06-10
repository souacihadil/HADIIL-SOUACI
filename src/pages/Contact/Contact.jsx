import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTimes,
  FaArrowRight,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm(
        "service_rmsje91",
        "template_yb1r7th",
        form.current,
        "932_LKGhDLX4-aNH5"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setOpen(false);
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="contact-section" onClick={(e) => e.stopPropagation()}>
      <div className="about-title">
        <h1 className="about-main">
          CONTACT <span>ME</span>
        </h1>
        <div className="underline"></div>
      </div>

      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        {!open ? (
          <div className="contact-cta">
            <div className="icon-circle">
              <FaCommentDots size={30} />
            </div>

            <h2>Ready to Collaborate?</h2>
            <p>Let's turn your ideas into reality.</p>

            <button
              type="button"
              className="primary-btn toggle-trigger-btn"
              onClick={handleOpen}
              onMouseDown={(e) => e.stopPropagation()}
            >
              Start a Conversation <FaArrowRight />
            </button>
          </div>
        ) : (
          <div className="contact-content animate" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <FaTimes />
            </button>

            <h2>Let's Talk</h2>

            <div className="contact-grid">
              <div className="contact-info">
                <a href="https://github.com/souacihadil" target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>

                <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/" target="_blank" rel="noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>

                <a href="mailto:hadilsouaci2@gmail.com">
                  <FaEnvelope /> Email
                </a>
              </div>

              {/* FORM EMAILJS */}
              <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                />

                <button type="submit" className="primary-btn">
                  Send Message <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}