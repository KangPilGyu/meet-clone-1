import React from 'react';
import useForm from '../../../../utility/useForm.js';
import styles from './signUpForm.module.css';
import SignInBtn from '../signInButton/signInBtn.jsx';
import validate from '../../../../utility/validate.js';
import SocialLogin from '../socialLogin/socialLogin.jsx';

const SignUpForm = ({ switchOn, setSwitchOn, setIsSubmittedFromSignUp, loginDispatch }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    setIsSubmittedFromSignUp,
    loginDispatch,
  );
  const onClick = () => {
    setSwitchOn(!switchOn);
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
          placeholder="Ex : clayKang"
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
          placeholder="Ex : everywheremeet@gmail.com"
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
          placeholder="Ex : Candoit12!@"
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
          placeholder="Ex : Candoit12!@"
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <SignInBtn name="Join" onClick={handleSubmit} />
        {errors.message && <p>{errors.message}</p>}
      </form>
      <h2 className={styles.login}>
        <span className={styles.sideLine}>Sign up with</span>
      </h2>
      <SocialLogin />
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
