import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Signin</NavLink>
        </li>
        <li>
          <NavLink to="/signout">Signout</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
