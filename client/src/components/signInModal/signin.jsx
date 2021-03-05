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
        {/* <button className={styles.signBtn}>Register</button> */}
      </div>
      <div className={styles.signFormContainer}>
        <form className={styles.signForm}>
          <h1 className={styles.signTitle}>Login</h1>
          <span className={styles.emailSubTitle}>email</span>
          <input className={styles.emailInput} type="text" placeholder="Email" />
          <span className={styles.passwordSignSubTitle}>password</span>
          <input className={styles.passwordInput} type="text" placeholder="Password" />
          <SignInBtn name="Sign In" />
        </form>
        <div className={styles.socialLogin}>
          <button className={styles.fontBtn}>
            <FontAwesomeIcon className={styles.icon} icon={['fab', 'google']} />
          </button>
          <button className={styles.fontBtn}>
            <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
