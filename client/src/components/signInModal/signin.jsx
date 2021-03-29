import React, { useContext, useState } from 'react';
import styles from './signin.module.css';
import SignInForm from '../signInForm/signInForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { stateContext } from '../../store.js';
import { Link } from 'react-router-dom';
import SignUpForm from '../signUpForm/signUpForm';


const SignIn = () => {
  const { loginModalDispatch, setLoginStatus, loginDispatch } = useContext(stateContext);
  const [switchOn, setSwitchOn] = useState(false);
  const [isSubmittedFromSignUp, setIsSubmittedFromSignUp] = useState(false);
  const [isSubmittedFromSignIn, setIsSubmittedFromSignIn] = useState(false);
  return (
    <div className={styles.modalContainer}>
      <div className={`${switchOn ? styles.slideRight : null} ${styles.photo}`}></div>
      {!isSubmittedFromSignUp ? (
        <div className={`${switchOn ? styles.slideLeft : null} ${styles.signFormContainer}`}>
          <Link
            to="/home"
            className={switchOn ? styles.closeBtnLeft : styles.closeBtnRight}
            onClick={() => loginModalDispatch({ type: 'close' })}
          >
            <FontAwesomeIcon className={styles.icon} icon={faTimes} />
          </Link>
          {switchOn ? (
            <SignUpForm
              switchOn={switchOn}
              setSwitchOn={setSwitchOn}
              isSubmittedFromSignUp={isSubmittedFromSignUp}
              setIsSubmittedFromSignUp={setIsSubmittedFromSignUp}
              setLoginStatus={setLoginStatus}
              loginDispatch={loginDispatch}
            />
          ) : (
            <SignInForm
              switchOn={switchOn}
              setSwitchOn={setSwitchOn}
              isSubmittedFromSignIn={isSubmittedFromSignIn}
              setIsSubmittedFromSignIn={setIsSubmittedFromSignIn}
              setIsSubmittedFromSignUp={setIsSubmittedFromSignUp}
            />
          )}
        </div>
      ) : (
        <div className={`${switchOn ? styles.slideLeft : null} ${styles.signFormContainer}`}>
          {!isSubmittedFromSignIn ? (
            <div className={styles.welcome}></div>
          ) : (
            <div className={`${styles.welcome} ${styles.radiusRightSide}`}></div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignIn;
