import React from 'react';
import './App.css'; // Import global styles
import Navbar from './components/Navbar'; // Import the Navbar component
import SoftSkills from './components/Softskills'; // Import the SoftSkills component
import Experience from './components/Experience'; // Import the Experience component
import Projects from './components/Projects'; // Import the Projects component
import Education from './components/Education'; // Import the Education component
import Certifications from './components/Certifications'; // Import the Certifications component
import Introduction from './components/Introduction'; // Import the Introduction component
import Skills from './components/Skills'; // Import the Skills component

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Introduction />
        <Skills /> {/* Technical Skills Section */}
        <SoftSkills /> {/* Soft Skills Section */}
        <Experience /> {/* Professional Experience Section */}
        <Education />  {/* Education Section */}
        <Certifications /> {/* Certifications Section */}
        <Projects /> {/* Projects Section */}
      </main>
      <footer>
        <p>© 2024 Varsha Kizhakkillam Neelamana - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
