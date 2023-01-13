import React from "react";
import styles from "./CustomerCard.module.css";

const CustomerCard = (props) => {
  const { firstName, lastName, email, birthdate, image } = props.infos;
  return (
    <div className={`${styles.customerCardContainer} container`}>
      <img src={image} alt="profile-img" />
      <div>
        <h4>
          {lastName} {firstName}
        </h4>
        <p>{email}</p>
        <p>{birthdate}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
