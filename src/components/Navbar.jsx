import React from "react";
import { Link } from 'react-router-dom';
import {logo} from "../assets"
import "./NavBar.css"


const Navbar = () => {
  return (
  <nav className ="navbar">
    <div className="navbar-left">
      <button>Log in/Sign Up</button>
      <button>Search</button>
      <button>Add Subject</button>
      <button>Subjects</button>
    </div>
    <div className="narbar-rght">
      {/* need to add some css and make logo and png or svg so its transparanet background */}
      {/* <img src={logo} alt="logo" className="navbar-logo"></img> */}
    </div>
  </nav>
  );
};

export default Navbar