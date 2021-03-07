import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './signin.module.css';
import SignInForm from '../signInForm/signInForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { stateContext } from '../../App.jsx';
import { Link } from 'react-router-dom';
import SignUpForm from '../signUpForm/signUpForm';

const SignIn = () => {
  const { onClickLoginClose, loginModal } = useContext(stateContext);
  const [switchOn, setSwitchOn] = useState(false);
  let photoRef = useRef();
  let signFormRef = useRef();

  return (
    <div className={styles.modalContainer}>
      <div className={switchOn ? styles.photoSlideRight : styles.photo}>
        <div ref={photoRef} className={styles.signUp}></div>
      </div>
      <div
        ref={signFormRef}
        className={switchOn ? styles.signFormSlideLeft : styles.signFormContainer}
      >
        <Link to="/home" className={styles.closeBtn} onClick={onClickLoginClose}>
          <FontAwesomeIcon className={styles.icon} icon={faTimes} />
        </Link>
        {switchOn ? (
          <SignUpForm switchOn={switchOn} setSwitchOn={setSwitchOn} />
        ) : (
          <SignInForm switchOn={switchOn} setSwitchOn={setSwitchOn} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
