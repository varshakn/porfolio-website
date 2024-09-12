// src/components/experiencecard.jsx
import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ title, details }) {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <p>{details}</p>
    </div>
  );
}

export default ExperienceCard;

