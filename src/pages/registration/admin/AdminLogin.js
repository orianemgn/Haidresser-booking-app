import React from "react";
import styles from "../Registration.module.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let passwordConfirmation = e.target.passwordConfirmation.value;

    console.log(email, password, passwordConfirmation);
  };
  return (
    <div className="page-container">
      <div className={styles.haidresserContainer}>
        <h1>Login</h1>
      </div>
      <form
        className={styles.registrationForm}
        onSubmit={(e) => handleLogin(e)}
      >
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Link to="/admin-account" className="btn btn-primary" type="submit">
          Login
        </Link>
        <div className={styles.loginLinks}>
          <Link className="link-primary" to="/admin-signup">
            Hast du kein konto noch?
          </Link>
          <Link className="link-primary" to="/">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
