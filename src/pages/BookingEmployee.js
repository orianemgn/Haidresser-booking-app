import { useState } from "react";
import styles from "./Booking.module.css";
import { Link } from "react-router-dom";
import EmployeeItem from "../components/bookingCards/EmployeeItem";
import EmployeeCard from "../components/employeeCard/EmployeeCard";

const BookingEmployee = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  let employees = [
    {
      name: "John",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Marie",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Helene",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="page-container">
      <h1>Unsere Mitarbeiter</h1>
      <div className={styles.bookingContainer}>
        <div className="container">
          <h4>Employees</h4>
          {employees.map((employee, id) => {
            return (
              <EmployeeItem
                employee={employee}
                icon="fa-solid fa-circle-plus"
                key={id}
                setSelectedEmployee={setSelectedEmployee}
              />
            );
          })}
        </div>
        <div className="container">
          <h4>Ihre Auswahl</h4>
          <div>
            {!selectedEmployee && <p>Select a service</p>}
            <div onClick={() => setSelectedEmployee(null)}>
              {selectedEmployee && (
                <EmployeeItem
                  employee={selectedEmployee}
                  icon="fa-solid fa-circle-minus"
                  danger="danger"
                />
              )}
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to="/booking-service" className="btn btn-danger">
              Go back
            </Link>
            {selectedEmployee && (
              <Link
                to="/booking-service/booking-employee/"
                className="btn btn-primary"
              >
                Next step
              </Link>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2>Unsere Mitarbeiter</h2>
        <div className={styles.employeeCardContainer}>
          {employees.map((employee) => (
            <EmployeeCard employee={employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingEmployee;
