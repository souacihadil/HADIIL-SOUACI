import React, { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import './MagneticButton.css';

const MagneticButton = () => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = 'translate(0, 0)';
    }
  };

  const handleClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      ref={buttonRef}
      className="magnetic-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      See My Work
      <HiArrowRight className="arrow-icon" />
    </button>
  );
};

export default MagneticButton;
