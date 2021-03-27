import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './sectionHome.module.css';
import { stateContext } from '../../App.jsx';
import LinkBtn from '../linkBtn/linkBtn';

const SectionHome = () => {
  const { position } = useContext(stateContext);
  const welcomeRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (position === 0) {
        welcomeRef.current.style.transform = `translateY(0px)`;
      }
    }, 500);
  }, []);
  return (
    <div className={styles.background}>
      <div className={styles.column}></div>
      <div className={styles.welcomeContainer}>
        <div ref={welcomeRef} className={styles.welcome}>
          <img src="/images/logo.png" alt="logo" className={styles.logo} />
          <h1 className={styles.homeTitle}>
            Everywhere <br />
            you want to meet
          </h1>
          <h3 className={styles.homeSubTitle}>
            Share your story with <br />
            your friends
          </h3>
          <div className={styles.container}>
            <LinkBtn name="New meeting" location="meeting" />
          </div>
        </div>
      </div>
      <div className={styles.img}></div>
    </div>
  );
};

export default SectionHome;
