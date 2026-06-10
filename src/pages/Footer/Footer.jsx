import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">

        {/* القسم الأول: الهوية */}
        <div className="footer-brand">
          <h3>HADEEL<span>.</span></h3>
          <p>
            AI Specialist & Frontend Developer building intelligent systems
            and crafting exceptional digital experiences.
          </p>
          <div className="footer-socials">
            <a href="https://github.com/souacihadil" target="_blank" rel="noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/souaci-hadil-3726412b4/" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:hadilsouaci2@gmail.com" title="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* القسم الثاني: التنقل */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* القسم الثالث: زر الصعود */}
        <div className="footer-action">
          <h4>Back to Top</h4>
          <p>Jump back to the beginning of the page.</p>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaChevronUp />
          </button>
        </div>

      </div>

      {/* فاصل متدرج */}
      <div className="footer-divider" />

      {/* حقوق النشر */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hadil &mdash; Crafted with <span>♥</span> & React</p>
        <span className="footer-badge">All rights reserved</span>
      </div>
    </footer>
  );
}