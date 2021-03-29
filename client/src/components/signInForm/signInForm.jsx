import React, { useContext, useRef } from 'react';
import styles from './signInForm.module.css';
import SignInBtn from '../signInButton/signInBtn.jsx';
import { useHistory } from 'react-router-dom';
import { stateContext } from '../../store.js';
import SocialLogin from '../socialLogin/socialLogin.jsx';
import axios from 'axios';

const SignInForm = ({
  switchOn,
  setSwitchOn,
  setIsSubmittedFromSignIn,
  setIsSubmittedFromSignUp,
}) => {
  const { loginDispatch, loginState } = useContext(stateContext);
  const { email, password, isLoading, message, isLoggedIn, name } = loginState;
  let createRef = useRef();
  let history = useHistory();
  const onClick = () => {
    setSwitchOn(!switchOn);
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    loginDispatch({ type: 'login' });
    await axios
      .post('/api/signIn', {
        email: email,
        password: password,
      })
      .then((res) => {
        // server did't give auth to client because it wasn't authenticated.
        if (!res.data.auth) {
          loginDispatch({ type: 'authError' });
        } else {
          const { token } = res.data;
          // store the token in the local storage.
          localStorage.setItem('jwt', token);
          loginDispatch({ type: 'success', name: res.data.user.name });
          setIsSubmittedFromSignUp(true);
          setIsSubmittedFromSignIn(true);
          setTimeout(() => {
            history.push('/home');
          }, 1500);
        }
      })
      .catch((err) => {
        console.log('pass err');
        loginDispatch({
          type: 'error',
        });
        console.log(loginState);
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
            loginDispatch({ type: 'field', field: 'email', value: e.currentTarget.value });
          }}
        />
        <span className={styles.signInSubTitle}>password</span>
        <input
          className={styles.signInInput}
          type="password"
          placeholder="Password"
          onChange={(e) => {
            loginDispatch({ type: 'field', field: 'password', value: e.currentTarget.value });
          }}
        />
        {message && <span className={styles.error}>{message}</span>}
        <SignInBtn name="Sign In" onClick={submitLogin} />
      </form>
      <h2 className={styles.login}>
        <span className={styles.sideLine}>Sign In with</span>
      </h2>
      <SocialLogin />
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
