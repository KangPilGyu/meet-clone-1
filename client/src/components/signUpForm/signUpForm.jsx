import React, { useRef, useState } from 'react';
import styles from './signUpForm.module.css';
import SignInBtn from '../signInButton/signInBtn.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(fab);
const SignUpForm = ({ switchOn, setSwitchOn }) => {
  let createRef = useRef();

  const onClick = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <>
      <form className={styles.signForm}>
        <h1 className={styles.signTitle}>Join us</h1>
        <span className={styles.signInSubTitle}>email</span>
        <input className={styles.signInInput} type="text" placeholder="Email" />
        <span className={styles.signInSubTitle}>password</span>
        <input className={styles.signInInput} type="password" placeholder="Password" />
        <SignInBtn name="Join" />
      </form>
      <h2 className={styles.login}>
        <span className={styles.sideLine}>Log in with</span>
      </h2>
      <div className={styles.socialLogin}>
        <button className={styles.fontBtn}>
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'google']} />
        </button>
        <button className={styles.fontBtn}>
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
        </button>
        <button className={styles.fontBtn}>
          <img src="/images/naverLogo.png" className={`${styles.icon} ${styles.iconSize}`} />
        </button>
        <button className={styles.fontBtn}>
          <img src="/images/kakaoLogo.png" className={`${styles.icon} ${styles.iconSize}`} />
        </button>
      </div>
      <div className={styles.createAccountContainer}>
        <p className={styles.createAccount}>Are you our member?</p>
        <button ref={createRef} className={styles.createAccountBtn} onClick={onClick}>
          Go to sign in
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
