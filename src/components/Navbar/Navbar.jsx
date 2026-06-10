import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaCode, FaRegFileLines, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const trackLength = docHeight - winHeight;
      const progress = Math.floor((scrollTop / trackLength) * 100);
      setScrollProgress(progress);

      updateActiveLink();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateActiveLink = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
          setActiveLink(section.charAt(0).toUpperCase() + section.slice(1));
          break;
        }
      }
    }
  };

  const navItems = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Skills', href: '#skills' },
    { id: 4, label: 'Projects', href: '#projects' },
    { id: 5, label: 'Contact', href: '#contact' },
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Hadil_Souaci_CV.pdf'; // بدليه بالملف الحقيقي
    link.download = 'Hadil_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (label, href) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        
        {/* LOGO */}
        <div className="logo" onClick={() => handleNavClick('Home', '#home')}>
          <div className="logo-circle">
            <FaCode />
          </div>
          <div className="logo-text">Hadil.</div>
        </div>

        {/* MOBILE BUTTON */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeLink === item.label ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label, item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* CV mobile */}
          <li className="cv-mobile">
            <button className="cv-button" onClick={downloadCV}>
              <FaRegFileLines className="cv-icon" />
              <span>Resume</span>
            </button>
          </li>
        </ul>

        {/* CV desktop */}
        <button className="cv-button desktop-cv" onClick={downloadCV}>
          <FaRegFileLines className="cv-icon" />
          <span>Resume</span>
        </button>

      </nav>

      {/* progress bar */}
      <div className="reading-progress">
        <div
          className="reading-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default Navbar;