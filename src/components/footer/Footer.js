import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <Link to="/">Impressum</Link>
        <Link to="/">Datenschütz</Link>
        <Link to="/admin-login">Admin</Link>
      </div>

      <div>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </div>
  );
};

export default Footer;
