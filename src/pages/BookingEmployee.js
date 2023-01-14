import { useState } from "react";
import styles from "./BookingEmployee.module.css";
import { Link } from "react-router-dom";
import EmployeeCard from "../components/bookingCards/EmployeeCard";

const BookingEmployee = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  let employees = [
    { name: "John", description: "John blblabla" },
    { name: "Marie", description: "sojdzjzodjzzoj" },
  ];
  return (
    <div className="page-container">
      <h1>Unsere Mitarbeiter</h1>
      <div className={styles.BookingEmployeeContainer}>
        <div className="container">
          <h4>Employees</h4>
          {employees.map((employee, id) => {
            return (
              <EmployeeCard
                employee={employee}
                icon="fa-solid fa-circle-plus"
                key={id}
                setSelectedEmployee={setSelectedEmployee}
              />
            );
          })}
        </div>
        <div className="container">
          <div>
            {!selectedEmployee && <p>Select a service</p>}
            <div onClick={() => setSelectedEmployee(null)}>
              {selectedEmployee && (
                <EmployeeCard
                  employee={selectedEmployee}
                  icon="fa-solid fa-circle-minus"
                  danger="danger"
                />
              )}
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to="/" className="btn btn-danger">
              Go back
            </Link>

            <Link
              to="/booking-service/booking-employee"
              className="btn btn-primary"
            >
              Next step
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingEmployee;
