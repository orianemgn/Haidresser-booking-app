import React from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  const { style, price, time } = props.service;
  return (
    <div className={styles.styleContainer}>
      <p>{style}</p>
      <div>
        <p>{price}</p>
        <p>{time}</p>
      </div>
      <i class="fa-solid fa-circle-plus"></i>
    </div>
  );
};

export default ServiceCard;
