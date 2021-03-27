import React, { useState } from 'react';
import useForm from '../utility/useForm.js';
import styles from './signUpForm.module.css';
import SignInBtn from '../signInButton/signInBtn.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'react-kakao-login';
import validate from '../utility/validate';

library.add(fab);

const SignUpForm = ({ switchOn, setSwitchOn, setLoginStatus, setIsSubmitted }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    setLoginStatus,
    setIsSubmitted,
  );
  const onClick = () => {
    setSwitchOn(!switchOn);
  };

  const responseGoogle = (res) => {
    console.log(res);
  };
  const responseKakao = (res) => {
    console.log(res);
  };

  return (
    <>
      <form className={styles.signForm}>
        <h1 className={styles.signTitle}>Join us</h1>
        <label className={styles.signInSubTitle} htmlFor="name">
          Name
        </label>
        <input
          id={styles.username}
          name="name"
          className={`${errors.name && styles.redSign} ${styles.signInInput}`}
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <label className={styles.signInSubTitle} htmlFor="email">
          Email
        </label>
        <input
          id={styles.email}
          value={values.email}
          onChange={handleChange}
          name="email"
          className={`${errors.email && styles.redSign} ${styles.signInInput}`}
          type="text"
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <label className={styles.signInSubTitle} htmlFor="pwd">
          Password
        </label>
        <input
          id={styles.password}
          value={values.password}
          onChange={handleChange}
          name="password"
          className={`${errors.password && styles.redSign} ${styles.signInInput}`}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p>{errors.password}</p>}
        <label className={styles.signInSubTitle} htmlFor="doubleCheckPwd">
          Confirm password
        </label>

        <input
          id={styles.doubleCheckPwd}
          value={values.password2}
          onChange={handleChange}
          name="password2"
          className={`${errors.password2 && styles.redSign} ${styles.signInInput}`}
          type="password"
          placeholder="Confirm password"
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <SignInBtn name="Join" onClick={handleSubmit} />
        {errors.message && <p>{errors.message}</p>}
      </form>
      <h2 className={styles.login}>
        <span className={styles.sideLine}>Sign up with</span>
      </h2>
      <div className={styles.socialLogin}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          render={(renderProps) => (
            <button
              className={styles.fontBtn}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FontAwesomeIcon className={styles.icon} icon={['fab', 'google']} />
            </button>
          )}
        />
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
        <KakaoLogin
          token={process.env.REACT_APP_KAKAO_CLIENT_ID}
          onSuccess={responseKakao}
          onFail={responseKakao}
          // onLogout={}
          render={({ onClick }) => {
            return (
              <button className={styles.fontBtn} onClick={onClick}>
                <img
                  src="/images/kakaoLogo.png"
                  alt="logo"
                  className={`${styles.icon} ${styles.iconSize}`}
                />
              </button>
            );
          }}
        />
      </div>
      <div className={styles.createAccountContainer}>
        <p className={styles.createAccount}>Are you our member?</p>
        <button className={styles.createAccountBtn} onClick={onClick}>
          Go to sign in
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
