import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className="hero-container">
      <div className="hero-card">

        <div className="left-side">

          <div className="nav-tag">
            Portfolio — 2026
          </div>

          <div className="main-content">
            <span className="hello-line">Hello, I am</span>
            <h1 className="name-line">HADIL</h1>
            <h1 className="name-outline">SOUACI</h1>
            <div className="role-tag">
              <span className="dot-live"></span>
              React Developer · AI Engineer
            </div>
          </div>

          <button
  className="btn-work"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  }}
>
  See my work
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    className="btn-icon"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</button>
        </div>

        <div className="right-side">

          <div className="right-top-spacer" />

          <div className="orbital-wrapper">

            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />

            <div className="dot-track dot-track-1">
              <div className="orb-dot od-cyan" />
            </div>
            <div className="dot-track dot-track-2">
              <div className="orb-dot od-purple" />
            </div>
            <div className="dot-track dot-track-3">
              <div className="orb-dot od-yellow" />
            </div>

            <div className="core-circle">
              <span>H</span>
            </div>

            <div className="floating-tag tag-react">React</div>
            <div className="floating-tag tag-ai">AI / ML</div>
            <div className="floating-tag tag-ui">Teaching</div>

            <div className="glow-particle p1" />
            <div className="glow-particle p2" />
            <div className="glow-particle p3" />

          </div>

          <div className="right-footer">
            <div className="status-badge">
              <span className="status-dot" />
              <span className="status-text">Available for work</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
