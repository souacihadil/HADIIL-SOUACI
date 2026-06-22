import React from 'react';
import CustomerCursor from './components/CustomerCursor/CustomerCursor';
import GradientBackground from './components/GradientBackground/GradientBackground';
import GridOverlay from './components/GridOverlay/GridOverlay';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import './App.css';
import About from './pages/About/About'
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Services from './pages/Skills/Skills';
import Footer from './pages/Footer/Footer'


function App() {
  return (
    <div className="App">
      <CustomerCursor />
      <GradientBackground />
      <GridOverlay />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
