import React from 'react';
import Button from '../button/button';
import styles from './sectionDeveloperInfo.module.css';

const SectionDeveloperInfo = () => {
  return (
    <div className={styles.background}>
      <div className={styles.developerInfo}>
        <div className={styles.select}>| Front-End | Back-End |</div>
        <h1 className={styles.question}>If you have some Question or Comments?</h1>
        <div className={styles.avatar}></div>
        <p className={styles.list}>
          Hello! I am lee <br /> nice to see you guys
        </p>
        <p className={styles.list}>Address: grigni@gmail.com</p>
        <p className={styles.list}>GitHub: www.github.com/grigni</p>
        <p className={styles.list}>Stack : JavaScript, HTML, CSS </p>
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
