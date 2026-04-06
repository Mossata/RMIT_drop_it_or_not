import React from "react";
import { Link } from "react-router-dom";
import ColourScheme from "./ColourScheme";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">

        <Link to="/">
          <button>Search</button>
        </Link>

        <Link to="/subjects">
          <button>Subjects</button>
        </Link>

        <Link to="/add-subject">
          <button>Add Subject</button>
        </Link>

        <Link to="/auth">
          <button>Log in / Sign Up</button>
        </Link>

      </div>

      <div className="navbar-right">
        <ColourScheme />
      </div>
    </nav>
  );
};

export default Navbar;