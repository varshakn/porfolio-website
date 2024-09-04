import React from 'react';
import './ProjectCard.css'; // Import the CSS file for ProjectCard styling

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
