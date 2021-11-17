import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <NavLink className="nav_link" to="/">
        Home
      </NavLink>
      <NavLink className="nav_link" to="/retrieve">
        Retrieve
      </NavLink>
      <NavLink className="nav_link" to="/insert">
        Insert
      </NavLink>
    </div>
  );
};

export default Navbar;
