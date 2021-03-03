import React from 'react';
import Button from '../button/button';
import styles from './sectionHome.module.css';
const SectionHome = () => {
  return (
    <div className={styles.background}>
      <div className={styles.column}></div>
      <div className={styles.welcome}>
        <div className={styles.logo}></div>
        <h1 className={styles.homeTitle}>
          Everywhere <br />
          you want to meet
        </h1>
        <h3 className={styles.homeSubTitle}>
          Share your story with <br />
          your friends
        </h3>
        <div className={styles.container}>
          <Button name="New meeting" />
          <input className={styles.input} type="text" placeholder="Enter code or link" />
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default SectionHome;
