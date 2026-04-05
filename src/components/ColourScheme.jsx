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
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ColorScheme;