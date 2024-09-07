import React from 'react';
import './Achievements.css'; // Ensure this file exists

const achievements = [
  { title: 'Indo-European Hackathon', description: 'Best Performing Team' },
  { title: 'National Level Hackathon', description: '' }
];

function Achievements() {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <h3>{achievement.title}</h3>
            {achievement.description && <p>{achievement.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;