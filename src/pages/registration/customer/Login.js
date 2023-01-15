import React from "react";
import styles from "../Registration.module.css";
import { Link } from "react-router-dom";

const Login = () => {
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
        <img className="logo-image" src="" alt="logo" />
        <h1>Wilkommen zurück</h1>
        <p>Melde dich an, um alle Funktionen nutzen zu können</p>
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
        <Link to="/account" className="btn btn-primary" type="submit">
          Anmelden
        </Link>
        <div className={styles.loginLinks}>
          <Link className="link-primary" to="/signup">
            Du bist neu hier?
          </Link>
          <Link className="link-primary" to="/">
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
