import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="portfolio-title">Portfolio</div>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
