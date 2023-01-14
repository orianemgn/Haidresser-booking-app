import React from "react";
import styles from "./BookingCards.module.css";

const EmployeeItem = (props) => {
  const { name } = props.employee;
  const { setSelectedEmployee } = props;

  return (
    <div
      className={styles.bookingContainer}
      onClick={() => setSelectedEmployee({ name })}
    >
      <p>{name}</p>
      {props.icon && <i className={props.icon}></i>}
    </div>
  );
};

export default EmployeeItem;
