import React, { useContext, useState } from 'react';
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

  return (
    <div className={styles.modalContainer}>
      <div className={switchOn ? styles.photoSlideRight : styles.photo}>
        <div className={styles.signUp}></div>
      </div>
      <div className={switchOn ? styles.signFormSlideLeft : styles.signFormContainer}>
        <Link
          to="/home"
          className={switchOn ? styles.closeBtnLeft : styles.closeBtnRight}
          onClick={onClickLoginClose}
        >
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
