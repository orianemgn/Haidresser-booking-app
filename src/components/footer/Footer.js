import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>Impressum</li>
        <li>Datenschütz</li>
      </ul>
      <div>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
      </div>
    </div>
  );
};

export default Footer;
