import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file for styling

function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      company: "Proceedit - Intern",
      details: "Feb 2024 - June 2024\n• Built two algorithmic BOTs for stock prediction.\n• Worked on Proximal Policy Optimization and Probability Forecast Network.\n• Utilised GraphQL and PostgreSQL, and created screens in Flutterflow.",
    },
    {
      company: "Solar Secure Solutions - Data Scientist",
      details: "Dec 2023 - Feb 2024\n• Interned on machine learning projects.\n• Focused on data cleaning and solution verification through graphs.",
    },
    {
      company: "Cyber Cell, Kochi, Kerala - Intern",
      details: "Jan 2023 - Feb 2023\n• Learned about cyber forensics and digital evidence recovery.\n• Worked on risk mitigation, IP tracking, and data duplication using Tableau.",
    },
    {
      company: "Virtually Testing Foundation, USA - Cyber Security Engineer",
      details: "May 2022 - July 2022\n• Learned fundamentals of cyber security.\n• Conducted research, attended meetings, and excelled in TryHackMe challenges.",
    },
  ];

  const handleSquareClick = (index) => {
    setActiveExperience(activeExperience === index ? null : index);
  };

  return (
    <section className="experience-section">
      <h2>P R O F E S S I O N A L   E X P E R I E N C E</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-square"
            onClick={() => handleSquareClick(index)}
          >
            {exp.company}
          </div>
        ))}
      </div>

      {activeExperience !== null && (
        <div className="experience-details">
          <p>{experiences[activeExperience].details}</p>
        </div>
      )}
    </section>
  );
}

export default Experience;
