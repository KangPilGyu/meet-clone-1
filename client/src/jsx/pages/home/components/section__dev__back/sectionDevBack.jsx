import React from 'react';
import styles from './sectionDevBack.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const SectionDevBack = ({ profInfo }) => {
  return (
    <>
      <h1 className={styles.question}>Question or Comments?</h1>
      <img src={profInfo.img} className={styles.avatar} alt="avatar"></img>
      <p className={styles.welcome}>
        Hello!
        <br /> I am a {profInfo.position}. <br /> Contact me if you have any questions or any
        comments.
      </p>
      <p className={styles.list}>
        <FontAwesomeIcon icon={faEnvelope} /> : {profInfo.email}
      </p>
    </>
  );
};

export default SectionDevBack;
