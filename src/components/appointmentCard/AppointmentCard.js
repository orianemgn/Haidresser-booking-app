import React from "react";
import styles from "./AppointmentCard.module.css";
import { Link } from "react-router-dom";

const AppointmentCard = (props) => {
  const { date, time, hairdresserName, style, passt } = props.infos;
  return (
    <div className={`${styles.appointmentCardContainer} container`}>
      <div>
        <h4>
          {date} / {time}
        </h4>
        <p>
          <i className="fa-regular fa-user" /> {hairdresserName}
        </p>
        <p>
          <i className="fa-solid fa-scissors"></i> {style}
        </p>
      </div>
      <Link
        className={
          passt === false ? `btn-small btn-danger` : `btn-small btn-primary`
        }
        to={passt && "/booking-service"}
      >
        {passt === false ? "cancel" : "book again"}
      </Link>
    </div>
  );
};

export default AppointmentCard;
