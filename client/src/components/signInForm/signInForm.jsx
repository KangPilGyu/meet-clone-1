import React, { useContext, useRef, useState } from 'react';
import styles from './signInForm.module.css';
import SignInBtn from '../signInButton/signInBtn.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { stateContext } from '../../App.jsx';
library.add(fab);

const SignInForm = ({ switchOn, setSwitchOn }) => {
  let createRef = useRef();
  const { setUserInfo, setLoginStatus } = useContext(stateContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  const onClick = () => {
    setSwitchOn(!switchOn);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios
      .post('/api/signIn', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (!res.data.auth) {
          setLoginStatus(false);
        } else {
          const { token } = res.data;
          console.log(token);
          // store the token in the local storage.
          localStorage.setItem('jwt', token);
          setUserInfo(res);
          setLoginStatus(true);
          history.push('/home');
        }
      })
      .catch((err) => {
        console.log('pass err');
        console.log(err);
      });
  };

  return (
    <>
      <form className={styles.signForm}>
        <h1 className={styles.signTitle}>Login</h1>
        <span className={styles.signInSubTitle}>email</span>
        <input
          className={styles.signInInput}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span className={styles.signInSubTitle}>password</span>
        <input
          className={styles.signInInput}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <SignInBtn name="Sign In" onClick={submitLogin} />
      </form>
      <h2 className={styles.login}>
        <span className={styles.sideLine}>Sign In with</span>
      </h2>
      <div className={styles.socialLogin}>
        <button className={styles.fontBtn}>
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'google']} />
        </button>
        <button className={styles.fontBtn}>
          <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
        </button>
        <button className={styles.fontBtn}>
          <img
            src="/images/naverLogo.png"
            alt="logo"
            className={`${styles.icon} ${styles.iconSize}`}
          />
        </button>
        <button className={styles.fontBtn}>
          <img
            src="/images/kakaoLogo.png"
            alt="logo"
            className={`${styles.icon} ${styles.iconSize}`}
          />
        </button>
      </div>
      <div className={styles.createAccountContainer}>
        <p className={styles.createAccount}>Don't have an account?</p>
        <button ref={createRef} className={styles.createAccountBtn} onClick={onClick}>
          Create account
        </button>
      </div>
    </>
  );
};

export default SignInForm;
