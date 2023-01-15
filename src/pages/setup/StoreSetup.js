import React from "react";
import styles from "./SetUp.module.css";
import { Link } from "react-router-dom";

const StoreSetup = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let passwordConfirmation = e.target.passwordConfirmation.value;

    console.log(email, password, passwordConfirmation);
  };
  return (
    <div className="page-container">
      <h1>Store Setup</h1>
      <div className="container">
        <form className={styles.setUpForm} onSubmit={(e) => handleLogin(e)}>
          <div className={styles.row}>
            <div className={styles.col30}>
              <label>Salon name*</label>
            </div>
            <div className={styles.col70}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Salon name"
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col30}>
              <label>Adresse*</label>
            </div>
            <div className={styles.col70}>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="street, number"
                required
              />
              <div className={styles.row}>
                <div className={styles.col50}>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="postal code"
                    required
                  />
                </div>
                <div className={styles.col50}>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="city"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col30}>
              <label>Phone*</label>
            </div>
            <div className={styles.col70}>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="telephone number"
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col30}>
              <label>Logo*</label>
            </div>
            <div className={styles.col70}>
              <input type="file" name="logo" id="logo" required />
            </div>
          </div>

          <Link to="/admin-account" className="btn btn-primary" type="submit">
            Next step
          </Link>
        </form>
      </div>
    </div>
  );
};

export default StoreSetup;
