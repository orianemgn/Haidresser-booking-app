import React from "react";
import styles from "./LandingPage.module.css";
import HairdresserContactInfos from "../components/HairdresserContactInfos";
import HairdresserOpenings from "../components/HairdresserOpenings";
import HairdresserAdresse from "../components/HairdresserAdresse";
import { Link } from "react-router-dom";

const LandingPage = () => {
  let hairdresserInfos = {
    contactInfos: {
      anrufen: "+49 241 25932877",
      website: "www.naturfriseul-aachen.de",
      email: "haidresser@gmail.com",
    },
    openings: {
      monday: "08:00 - 14:00uhr",
      tuesday: "08:00 - 14:00uhr",
      wednesday: "08:00 - 14:00uhr",
      thursday: "08:00 - 14:00uhr",
      friday: "08:00 - 14:00uhr",
      saturday: "08:00 - 14:00uhr",
      sunday: "08:00 - 14:00uhr",
    },
    adresse: {
      name: "Name",
      street: "street xxxxx",
      postcode: 10179,
      city: "Berlin",
      country: "Deutschland",
      lat: "",
      lng: "",
    },
  };
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.haidresserContainer}>
        <h1>Wir Lieben Natürlichkeit</h1>
        <img className="logo-image" src="" alt="logo" />
        <Link className="btn btn-primary" to="/">
          Termin buchen
        </Link>
      </div>
      <h2>Über uns</h2>
      <div className={styles.infosContainer}>
        <HairdresserContactInfos infos={hairdresserInfos.contactInfos} />
        <HairdresserOpenings infos={hairdresserInfos.openings} />
      </div>
      <div>
        <HairdresserAdresse infos={hairdresserInfos.adresse} />
      </div>
    </div>
  );
};

export default LandingPage;
