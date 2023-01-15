import React from "react";
import { Link } from "react-router-dom";
import styles from "../Registration.module.css";

const AdminSignUp = () => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let passwordConfirmation = e.target.passwordConfirmation.value;

    console.log(email, password, passwordConfirmation);
  };
  return (
    <div className="page-container">
      <div className={styles.haidresserContainer}>
        <h1>Register</h1>
      </div>
      <form
        className={styles.registrationForm}
        onSubmit={(e) => handleSignUpSubmit(e)}
      >
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="&#xf0e0; Password"
        />
        <input
          type="text"
          name="passwordConfirmation"
          id="passwordConfirmation"
          placeholder="password confirmation"
        />
        <Link to="/store-setup" className="btn btn-primary" type="submit">
          Konto erstellen
        </Link>
        <Link className="link-primary" to="/admin-account">
          Du hast bereits einen Account
        </Link>
      </form>
    </div>
  );
};

export default AdminSignUp;
