import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceItem from "../components/bookingCards/ServiceItem";
import EmployeeItem from "../components/bookingCards/EmployeeItem";
import styles from "./Booking.module.css";
import AppointmentConfirmation from "../components/appointmentConfirmation/AppointmentConfirmation";

const BookingConfirmation = () => {
  const [confirmed, setConfirmed] = useState(false);

  const handleBookingConfirmation = () => {
    setConfirmed(true);
  };

  let service = { style: "style 1", price: "45€", time: "30min" };
  let employee = {
    name: "John",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };
  return (
    <div className="page-container">
      <h1 className={styles.center}>Your booking confirmation</h1>
      {confirmed ? (
        <>
          <AppointmentConfirmation />
          <div className={styles.buttonsContainer}>
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
            <Link to="/" className="btn btn-primary">
              Home
            </Link>
            <Link to="/account" className="btn btn-primary">
              My account
            </Link>
          </div>
        </>
      ) : (
        <div className={`${styles.bookingContainer} ${styles.uniqueContainer}`}>
          <div className="container">
            <h4>Ihre Auswahl</h4>
            <div>
              <ServiceItem service={service} />
              <EmployeeItem employee={employee} />
            </div>
            <div className={styles.buttonsContainer}>
              <Link to="/booking-canlendar" className="btn btn-danger">
                Go back
              </Link>

              <Link
                to="/booking-confirmation"
                className="btn btn-primary"
                onClick={handleBookingConfirmation}
              >
                Confirm
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingConfirmation;
