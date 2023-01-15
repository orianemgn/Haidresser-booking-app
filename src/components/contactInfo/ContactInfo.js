import React from "react";
import styles from "./ContactInfo.module.css";
const contactInfo = (props) => {
  const { icon, title, info } = props;
  return (
    <div className={styles.contactInfo}>
      <div>
        <i className={icon}></i>
        <div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
};

export default contactInfo;
