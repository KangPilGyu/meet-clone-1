import React from 'react';
import styles from './signin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import SignInBtn from '../signInButton/signInBtn.jsx';
library.add(fab);

const SignIn = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.photo}>
        <div className={styles.signUp}>
          {/* <p className={styles.signUpWord}>
            Do you want to join us? <br /> Click here!
          </p>
          <button className={styles.signUpBtn}>Sign Up</button> */}
        </div>
      </div>
      <div className={styles.signFormContainer}>
        <form className={styles.signForm}>
          <h1 className={styles.signTitle}>Login</h1>
          <span className={styles.signInSubTitle}>email</span>
          <input className={styles.signInInput} type="text" placeholder="Email" />
          <span className={styles.signInSubTitle}>password</span>
          <input className={styles.signInInput} type="password" placeholder="Password" />
          <SignInBtn name="Sign In" />
        </form>
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
          <p className={styles.createAccount}>Don't have an account?</p>
          <button className={styles.createAccountBtn}>Create account</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
