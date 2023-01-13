import React from "react";
import styles from "./HairdresserAdresse.module.css";

const HairdresserAdresse = (props) => {
  const { name, street, postcode, city, country, lat, lng } = props.infos;
  return (
    <div className={`${styles.adresseContainer} container`}>
      <div className={styles.adresse}>
        <h3>Adresse</h3>
        <h4>{name}</h4>
        <p>{street}</p>
        <p>
          {postcode} {city}
        </p>
        <p>{country}</p>
      </div>
      <div className={styles.map}>
        <div>map</div>
      </div>
    </div>
  );
};

export default HairdresserAdresse;
