import React from "react";
import styles from "./HairdresserContactInfos.module.css";
import ContactInfo from "./contactInfo/ContactInfo";

const HairdresserContactInfos = (props) => {
  const { anrufen, website, email } = props.infos;

  //the infos can maybe become components
  return (
    <div className={`${styles.contactContainer} container`}>
      <ContactInfo icon="fa-solid fa-phone" title="Anrufen" info={anrufen} />
      <ContactInfo icon="fa-solid fa-computer" title="Website" info={website} />
      <ContactInfo icon="fa-solid fa-at" title="Email" info={email} />
    </div>
  );
};

export default HairdresserContactInfos;
