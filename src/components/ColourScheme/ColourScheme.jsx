import "./ColourScheme.css";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const ColorScheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Apply theme class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <label className="theme-toggle">
      <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
      <span className="slider"></span>
      <span className="toggle-label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
    </label> 
  );
};

export default ColorScheme;