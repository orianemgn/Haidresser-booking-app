import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Booking.module.css";
import ServiceItem from "../components/bookingCards/ServiceItem";
import EmployeeItem from "../components/bookingCards/EmployeeItem";

const BookingCalendar = () => {
  //const [selectedTime, setSelectedTime] = useState(null);

  //WE HAVE TO FIND A LOGIC HERE - maybe with moment.js

  let service = { style: "style 1", price: "45€", time: "30min" };
  let employee = {
    name: "John",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <div className="page-container">
      <h1>Unsere calandar</h1>
      <div className={styles.bookingContainer}>
        <div className="container">
          <h4>Calendar</h4>
        </div>
        <div className="container">
          <h4>Ihre Auswahl</h4>
          <div>
            <ServiceItem service={service} />
            <EmployeeItem employee={employee} />

            <p className={styles.selectItemText}>Select a time</p>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to="/booking-employee" className="btn btn-danger">
              Go back
            </Link>

            <Link to="/booking-confirmation" className="btn btn-primary">
              Next step
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
