import React from "react";
import AppointmentCard from "../components/appointmentCard/AppointmentCard";
import CustomerCard from "../components/customerCard/CustomerCard";
import styles from "./CustomerAccount.module.css";
import { Link } from "react-router-dom";

const CustomerAccount = () => {
  let customer = {
    firstName: "Oriane",
    lastName: "Mgn",
    email: "memail@email.com",
    birthdate: "29/01/1993",
    image: "",
  };

  let appointments = [
    {
      date: "01.12.22",
      time: "10:00-10:30",
      hairdresserName: "John",
      style: "short hair cut",
      passt: true,
    },
    {
      date: "01.01.23",
      time: "10:00-10:30",
      hairdresserName: "Marie",
      style: "Long hair cut",
      passt: true,
    },
    {
      date: "01.02.23",
      time: "10:00-10:30",
      hairdresserName: "John",
      style: "short hair cut",
      passt: false,
    },
  ];

  return (
    <div className="page-container">
      <div className={styles.accountHeader}>
        <h1>Mein Account</h1>
        <Link className="btn btn-primary" to="/">
          <i class="fa-regular fa-calendar"></i>Termin buchen
        </Link>
      </div>
      <h2>Meine Daten</h2>
      <CustomerCard infos={customer} />
      <div className={styles.appointmentContainer}>
        <div>
          <h2>My next appointment(s)</h2>
          {appointments.map((appointment, id) => {
            return (
              <>
                {appointment.passt === false && (
                  <AppointmentCard infos={appointment} key={id} />
                )}
              </>
            );
          })}
        </div>
        <div>
          <h2>My last appointments</h2>
          {appointments.map((appointment, id) => {
            return (
              <>
                {appointment.passt === true && (
                  <AppointmentCard infos={appointment} key={id} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;

// {/* <div>
//   <h2>My last appointment</h2>

//   <AppointmentCard infos={appointment} key={id} />
// </div>; */}
