import React from "react";
import styles from "./EmployeeCard.module.css";

const EmployeeCard = (props) => {
  const { name, description } = props.employee;
  return (
    <div className={`${styles.employeeCard} container`}>
      <img className={styles.employeeImg} src="" alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default EmployeeCard;
