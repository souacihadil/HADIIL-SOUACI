import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaPython, FaGraduationCap, FaGitAlt  } from "react-icons/fa"; 
import "./About.css";

export default function About() {
  const sectionRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimating(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section  id="about" className="about-section" ref={sectionRef}>
      <div className="about-wrapper">

        {/* ── الجانب الأيسر: قصتك التعريفية ── */}
        <div className="left-col">
          <div className="about-eyebrow expanded">About Me</div>

          <h1 className="hero-title">
            Developer.<br />
            Engineer.<br />
            <span className="accent">Educator.</span>
          </h1>

          <div className="role-badges">
            <span className="badge badge-teal">Frontend Dev</span>
            <span className="badge badge-purple">AI Engineer</span>
            <span className="badge badge-yellow">Online Tutor</span>
          </div>

          <div className="bio-container">
  <p className="bio-text">
    I'm <strong>Hadil Souaci</strong>, an AI Engineer and React Developer focused on creating intelligent web applications that combine technology, creativity, and user-centered design.
  </p>

  <p className="bio-text">
    Holding a Master's degree in Artificial Intelligence, I build AI-powered solutions, develop modern web experiences, and teach programming and robotics to the next generation of innovators.
  </p>
</div>
        </div>

        {/* ── الجانب الأيمن: المهارات والاقتباس ── */}
        <div className="right-col">
          
          {/* المهارات داخل إطارات كما كانت (2x2 Grid) */}
          {/* المهارات داخل إطارات (محدثة + أكثر) */}
<div className="skills-embed-grid">

  <div className={`skill-mini-card ${animating ? 'animate-in' : ''}`} style={{"--delay": "0.1s"}}>
    <FaReact className="mini-icon cyan" />
    <h4>Frontend</h4>
    <p>React, UI, HTML, Css, JS, Rest Api,  Tawlid</p>
  </div>

  <div className={`skill-mini-card ${animating ? 'animate-in' : ''}`} style={{"--delay": "0.2s"}}>
    <FaPython className="mini-icon purple" />
    <h4>AI / ML</h4>
    <p>
  Python, PyTorch, Deep Learning, Computer Vision, Data Handling
</p>
  </div>

  <div className={`skill-mini-card ${animating ? 'animate-in' : ''}`} style={{"--delay": "0.3s"}}>
    <FaGraduationCap className="mini-icon yellow" />
    <h4>Teaching</h4>
    <p>
  Robotics for Kids, Arduino, Cybersecurity, STEM Education, Gamification
</p>
  </div>

  <div className={`skill-mini-card ${animating ? 'animate-in' : ''}`} style={{"--delay": "0.4s"}}>
    <FaGitAlt  className="mini-icon gray" />
    <h4>Tools</h4>
    <p>Git, Linux, VS Code, Microsoft Tool, Edu Platforms </p>
  </div>


</div>

          {/* رجوع الجملة (الاقتباس) أسفل المهارات */}
          <blockquote className="bio-quote-right">
            "My goal is to turn complex ideas into tools anyone can use 
            and make sure the next developer doesn't have to figure it all out alone."
          </blockquote>
        </div>

      </div>
    </section>
  );
}