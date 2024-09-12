import React from 'react';
import './Education.css'; // Ensure the path is correct

function Education() {
  return (
    <section id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-container">
        <div className="education-item">
          <div className="education-inner">
            <div className="education-front">
              <h3>University of Liverpool</h3>
            </div>
            <div className="education-back">
              <p>Masters in Data Science and AI (Present)</p>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-inner">
            <div className="education-front">
              <h3>Yenepoya Institute of Arts, Science, Commerce and Management</h3>
            </div>
            <div className="education-back">
              <p>BSc Forensic Science, Data Analytics, and Cyber Security with IBM</p>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-inner">
            <div className="education-front">
              <h3>Durga Higher Secondary School</h3>
            </div>
            <div className="education-back">
              <p>Class 12th</p>
            </div>
          </div>
        </div>
        <div className="education-item">
          <div className="education-inner">
            <div className="education-front">
              <h3>Chinmaya Vidyalaya</h3>
            </div>
            <div className="education-back">
              <p>Class 10th</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
