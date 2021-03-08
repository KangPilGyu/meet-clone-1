import React from 'react';
import LinkBtn from '../linkBtn/linkBtn';
import styles from './sectionTakeTour.module.css';

const SectionTakeTour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/images/takeTourImg.png" className={styles.img}></img>
        <div className={styles.explain}>
          <h1 className={styles.takeTourTitle}>
            Premium <br /> video <br />
            conferencing <br />
            is now free to
            <br /> anyone
          </h1>
          <div className={styles.button}>
            <LinkBtn name="Take tour" location="takeTour" />
          </div>
        </div>
      </div>
      <div className={styles.subDescContatiner}>
        <div className={styles.description}>
          The Google Meet service for secure business meeting has been redesigned so that anyone can
          use it for free
        </div>
      </div>
    </div>
  );
};

export default SectionTakeTour;
