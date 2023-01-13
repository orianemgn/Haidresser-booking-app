import React from "react";
import styles from "./HairdresserContactInfos.module.css";

const HairdresserContactInfos = (props) => {
  const { anrufen, website, email } = props.infos;
  return (
    <div className={`${styles.contactContainer} container`}>
      <div>
        <h3>Anrufen</h3>
        <p>{anrufen}</p>
      </div>
      <div>
        <h3>Website</h3>
        <p>{website}</p>
      </div>
      <div>
        <h3>Email</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default HairdresserContactInfos;
