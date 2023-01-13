import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <i class="fa-solid fa-scissors"></i>
      </Link>

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
