import React from "react";
import { Link } from 'react-router-dom';
import "./Subjects.css";

const Subjects = () => {
  return (
    <div className="subjects-page">
      <h1>All Subjects</h1>

      <div className="subjects-grid">

        <div className="subject-card">
          <h2>Algorithms & Analysis</h2>
          <p>COSC2123</p>
          <p>⭐ 4.6 / 5</p>
        </div>

        <div className="subject-card">
          <h2>Software Engineering Fundamentals</h2>
          <p>COSC2296</p>
          <p>⭐ 4.2 / 5</p>
        </div>

        <div className="subject-card">
          <h2>Artificial Intelligence</h2>
          <p>COSC1125</p>
          <p>⭐ 4.8 / 5</p>
        </div>

      </div>
    </div>
  );
};

export default Subjects;