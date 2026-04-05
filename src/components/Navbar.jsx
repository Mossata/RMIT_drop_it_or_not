import React from "react";
import { Link } from 'react-router-dom';
import {logo} from "../assets";
import ColourScheme from "./ColourScheme";
import "./NavBar.css"


const Navbar = () => {
  return (
     <nav className="navbar">
      <div className="navbar-left">
        <button>Log in/Sign Up</button>
        <button>Search</button>
        <button>Add Subject</button>
        <button>Subjects</button>
      </div>
      <div className="navbar-right">
        <ColourScheme />
      </div>

    </nav>
  
  );
};

export default Navbar