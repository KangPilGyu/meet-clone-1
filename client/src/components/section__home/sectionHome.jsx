import React from "react";
import styles from "./sectionHome.module.css";
const SectionHome = () => {
  return (
    <div className={styles.background}>
      <div className={styles.column}></div>
      <div className={styles.welcome}>
        <div className={styles.logo}></div>
        <h1>
          Everywhere <br />
          you want to meet
        </h1>
        <h3>
          Share your story with <br />
          your friends
        </h3>
        <div className={styles.container}>
          <button className={styles.button}>New meeting</button>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter code or link"
          />
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default SectionHome;
