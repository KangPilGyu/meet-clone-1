import React from 'react';
import Button from '../button/button';
import styles from './sectionDeveloperInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SectionDeveloperInfo = () => {
  return (
    <div className={styles.background}>
      <div className={styles.developerInfo}>
        <div className={styles.select}>
          <span> | Front-End | Back-End |</span>
        </div>
        <h1 className={styles.question}>If you have some Question or Comments?</h1>

        <div className={styles.avatar}></div>
        <p className={styles.welcome}>
          Hello!
          <br /> I am a Front-End Developer. <br /> Contact me if you have any questions or any
          comments.
        </p>
        <p className={styles.list}>
          <FontAwesomeIcon icon={faEnvelope} /> : GriGni@gmail.com
        </p>
      </div>
      <form className={styles.email}>
        <input className={styles.commonStyle} type="text" placeholder="Enter your Name" />
        <input
          className={styles.commonStyle}
          type="text"
          placeholder="Enter a vaild email address"
        />
        <textarea
          className={styles.commonStyle}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your Message"
        ></textarea>
        <Button name="submit" />
      </form>
    </div>
  );
};

export default SectionDeveloperInfo;
