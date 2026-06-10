import React, { useEffect, useRef, useState } from 'react';
import { Layout, Cpu, Gamepad2, Rocket, Zap, Lightbulb } from 'lucide-react';
import './Skills.css';

const servicesData = [
  {
    id: 1,
    title: "Frontend Web Development",
    desc: "Pixel-perfect, responsive interfaces built with React. Fast to load, smooth to use, and beautiful to look at.",
    tags: ["React", "Tailwind", "UI / UX", "Animations"],
    icon: <Layout />,
    colorClass: "blue"
  },
  {
    id: 2,
    title: "Smart Web Applications",
    desc: "AI-powered apps with real logic  dashboards, automation, and real-time data powered by Python.",
    tags: ["AI Integration", "REST APIs", "Dashboards", "Python"],
    icon: <Cpu />,
    colorClass: "purple"
  },
  {
    id: 3,
    title: "Educational Games & Tools",
    desc: "Creative gamified learning interactive simulations and robotics tools that make knowledge stick.",
    tags: ["Scratch", "Robotics", "Gamification", "EdTech"],
    icon: <Gamepad2 />,
    colorClass: "yellow"
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills' className="services-section" ref={sectionRef}>
      <div className={`services-hero ${isVisible ? 'fade-up' : ''}`}>
        <div className="status-badge">
          <span className="blink-dot"></span>
          Available for work
        </div>
        <h1 className="services-h1">What I <em>Build</em> for You</h1>
        <p className="services-sub">
          Handcrafted digital experiences tailored to your vision.
        </p>
        <div className="accent-line"></div>
      </div>

      <div className="services-grid">
        {servicesData.map((service, idx) => (
          <div 
            key={service.id} 
            className={`service-card ${service.colorClass} ${isVisible ? 'fade-up' : ''}`}
            style={{ "--delay": `${0.2 + idx * 0.15}s` }}
          >
            <div className="card-top-line"></div>
            <div className="card-icon-box">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-desc">{service.desc}</p>
            <div className="card-tags">
              {service.tags.map((tag, tIdx) => (
                <span key={tIdx} className={`service-tag tag-${service.colorClass}`}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`why-me-strip ${isVisible ? 'fade-up' : ''}`} style={{ "--delay": "0.8s" }}>
        <p className="why-label">Why work with me</p>
        <div className="why-grid">
          <div className="why-box">
            <Rocket className="why-icon" />
            <h4>Zero Templates</h4>
            <p>Every line written from scratch for your exact needs.</p>
          </div>
          <div className="why-box">
            <Zap className="why-icon" />
            <h4>High Performance</h4>
            <p>Optimized animations built with React & Tailwind.</p>
          </div>
          <div className="why-box">
            <Lightbulb className="why-icon" />
            <h4>Creative & Smart</h4>
            <p>Combining technical skill with an educator's mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}