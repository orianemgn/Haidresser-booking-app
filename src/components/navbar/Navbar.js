import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <i className="fa-solid fa-scissors"></i>
      </Link>

      <div>
        <NavLink className="link" to="/login">
          Login
        </NavLink>
        <NavLink className="btn" to="/signup">
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
