import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src="" alt="logo" />
      <ul>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        <NavLink className="btn" to="/signup">
          Sign up
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
