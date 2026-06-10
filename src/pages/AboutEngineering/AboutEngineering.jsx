import React from "react";
import { FaBrain, FaCogs, FaPaintBrush, FaCheckCircle } from "react-icons/fa";
import "./AboutEngineering.css";

const steps = [
  {
    number: 1,
    title: "Analysis",
    description: "Understand requirements, collect data, and define project goals.",
    icon: <FaBrain />
  },
  {
    number: 2,
    title: "Implementation",
    description: "Set up project structure, organize files, and prepare base components.",
    icon: <FaCogs />
  },
  {
    number: 3,
    title: "UI/UX Design",
    description: "Design the interface, choose colors, typography, and user interactions.",
    icon: <FaPaintBrush />
  },
  {
    number: 4,
    title: "Development",
    description: "Build the project, add features, and make everything work together.",
    icon: <FaCogs />
  },
  {
    number: 5,
    title: "Testing & QA",
    description: "Check responsiveness, fix bugs, optimize performance, and ensure quality.",
    icon: <FaCheckCircle />
  }
];

const AboutEngineering = ({ id = "engineering" }) => {
  return (
    <div id={id} className="engineering-container">
      <h2 className="engineering-title">Front-End Project Workflow</h2>
      <p className="engineering-subtitle">
        Step-by-step approach to building a high-quality front-end project.
      </p>

      <div className="engineering-grid">
  {steps.map((step, idx) => (
    <React.Fragment key={idx}>
      <div
        className="engineering-step"
        style={{ animationDelay: `${0.6 + idx * 0.2}s` }} 
      >
        <div className="step-number">{step.number}</div>
        <div className="step-icon">{step.icon}</div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
      {idx < steps.length - 1 && <div className="step-connector"></div>}
    </React.Fragment>
  ))}
</div>

    </div>
  );
};

export default AboutEngineering;

