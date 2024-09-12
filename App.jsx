import React from 'react';
import './App.css'; // Import global styles
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import SoftSkills from './components/SoftSkills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Achievements from './components/Achievement';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="soft-skills">
          <SoftSkills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        <section id="Contact">
          <Contact />
        </section>
         

      </main>
      <footer>
        <p>© 2024 Varsha Kizhakkillam Neelamana - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;