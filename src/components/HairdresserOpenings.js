import React from "react";
import styles from "./HairdresserOpenings.module.css";

const HairdresserOpenings = (props) => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    props.infos;
  return (
    <div className={`${styles.openingsContainer} container`}>
      <h3>Öffnungzeiten</h3>
      <table>
        <tr>
          <td>Montag</td>
          <td>{monday}</td>
        </tr>
        <tr>
          <td>Dienstag</td>
          <td>{tuesday}</td>
        </tr>
        <tr>
          <td>Mittwoch</td>
          <td>{wednesday}</td>
        </tr>
        <tr>
          <td>Donnerstag</td>
          <td>{thursday}</td>
        </tr>
        <tr>
          <td>Freitag</td>
          <td>{friday}</td>
        </tr>
        <tr>
          <td>Samstag</td>
          <td>{saturday}</td>
        </tr>
        <tr>
          <td>Sonntag</td>
          <td>{sunday}</td>
        </tr>
      </table>
    </div>
  );
};

export default HairdresserOpenings;
