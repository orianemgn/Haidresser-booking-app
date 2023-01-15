import { useState } from "react";
import styles from "./SelectionCard.module.css";
import { Link } from "react-router-dom";
import ServiceItem from "../bookingCards/ServiceItem";
import EmployeeItem from "../bookingCards/EmployeeItem";

const SelectionCard = (props) => {
  const step = props.step;
  const selectedService = props.selectedService;
  const setSelectedService = props.setSelectedService;
  const selectedEmployee = props.selectedEmployee;
  const setSelectedEmployee = props.setSelectedEmployee;
  const service = props.service;
  return (
    <div className="container">
      <h4>Ihre Auswahl</h4>
      {step === "service" && (
        <>
          <div>
            {!selectedService && (
              <p className={styles.selectItemText}>Select a service</p>
            )}
            <div onClick={() => setSelectedService(null)}>
              {selectedService && (
                <ServiceItem
                  service={selectedService}
                  icon="fa-solid fa-circle-minus"
                />
              )}
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to="/" className="btn btn-danger">
              Go back
            </Link>
            {selectedService && (
              <Link to="/booking-employee" className="btn btn-primary">
                Next step
              </Link>
            )}
          </div>
        </>
      )}
      {step === "employee" && (
        <>
          <div>
            <ServiceItem service={service} />
            {!selectedEmployee && (
              <p className={styles.selectItemText}>Select a employee</p>
            )}
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
              <Link to="/booking-calendar" className="btn btn-primary">
                Next step
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SelectionCard;
