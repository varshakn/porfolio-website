// src/components/SoftSkills.jsx
import React from 'react';
import './SoftSkills.css'; // Ensure you import the CSS file

const SoftSkills = () => {
  return (
    <section id="soft-skills">
      <h2 className="soft-skills-title">Soft Skills</h2>
      <div className="soft-skills-container">
        <div className="soft-skill">
          <img src="https://th.bing.com/th/id/R.0012c2a9bbc804fad3251ccc3b9aed8b?rik=%2bIKaM85BhO19aw&riu=http%3a%2f%2fsusanbiali.com%2fwp-content%2fuploads%2f2018%2f09%2fspeech-icon-mcmurrayjulie-2797263_1280.png&ehk=fgK%2bfCJ7JimKzc56SqB7C5Rz%2bCvNoo8CCyACnDJiOVY%3d&risl=&pid=ImgRaw&r=0" alt="Communication" />
          <p>Communication</p>
        </div>
        <div className="soft-skill">
          <img src="https://static.vecteezy.com/system/resources/previews/023/221/527/original/success-people-logo-template-design-leadership-logo-concept-simple-vector.jpg" alt="Leadership" />
          <p>Leadership</p>
        </div>
        <div className="soft-skill">
          <img src="https://static.vecteezy.com/system/resources/previews/035/642/224/original/presentation-skills-icon-line-illustration-vector.jpg" alt="Presentation" />
          <p>Presentation</p>
        </div>
        <div className="soft-skill">
          <img src="https://thumbs.dreamstime.com/b/hours-punctuality-time-icon-black-vector-sketch-hours-punctuality-time-icon-well-organized-simple-vector-use-commercial-252601318.jpg" alt="Punctuality" />
          <p>Punctuality</p>
        </div>
        <div className="soft-skill">
          <img src="https://thumbs.dreamstime.com/b/quick-learner-text-red-rectangle-stamp-sign-quick-learner-text-written-red-stamp-sign-250888796.jpg" alt="Quick Learner" />
          <p>Quick Learner</p>
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
