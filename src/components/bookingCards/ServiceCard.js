import React from "react";
import styles from "./BookingCards.module.css";

const ServiceCard = (props) => {
  const { style, price, time } = props.service;
  const { setSelectedService } = props;

  return (
    <div
      className={styles.bookingContainer}
      onClick={() => setSelectedService({ style, price, time })}
    >
      <p>{style}</p>
      <div>
        <p>{price}</p>
        <p>{time}</p>
      </div>
      {props.icon && <i className={props.icon}></i>}
    </div>
  );
};

export default ServiceCard;
