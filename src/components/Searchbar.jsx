import React from "react";
import { Link } from 'react-router-dom';
import {search} from "../assets"
import "./Searchbar.css"


const Searchbar = () => {
  return (
<div className="search-container">

  <div className="search-bar">
    <img src={search} alt="search" className="icon" />
    <input type="text" placeholder="Search subject (e.g. Algorithms & Analysis)" />
    <span className="clear">✖</span>
  </div>

  <div className="dropdown">

    <div className="section-header">
      <span>Subjects</span>
      <span className="muted">See all</span>
    </div>

    {/* Subject 1 */}
    <div className="item">
      <div className="info">
        <div className="title">Algorithms & Analysis</div>
        <div className="sub">COSC2123 · ⭐ 4.6 / 5</div>
      </div>
    </div>

    {/* Subject 2 */}
    <div className="item">
      <div className="info">
        <div className="title">Software Engineering Fundamentals</div>
        <div className="sub">COSC2296 · ⭐ 4.2 / 5</div>
      </div>
    </div>

    {/* Subject 3 */}
    <div className="item">
      <div className="info">
        <div className="title">Artificial Intelligence</div>
        <div className="sub">COSC1125 · ⭐ 4.8 / 5</div>
      </div>
    </div>

    <div className="divider"></div>

    <div className="section-header">Popular Fields</div>

    <div className="item small">
      <div>
        <div className="title">Computer Science</div>
        <div className="sub">120 subjects</div>
      </div>
    </div>

    <div className="item small">
      <div>
        <div className="title">Data Science</div>
        <div className="sub">60 subjects</div>
      </div>
    </div>

    <div className="item small">
      <div>
        <div className="title">Cybersecurity</div>
        <div className="sub">40 subjects</div>
      </div>
    </div>

  </div>
</div>
   
  
  );
};

export default Searchbar