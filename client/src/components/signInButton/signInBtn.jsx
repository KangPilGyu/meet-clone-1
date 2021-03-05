import React from 'react';
import styles from './signInBtn.module.css';
const SignInBtn = ({ name }) => {
  return (
    <>
      <button className={styles.signBtn}>{name}</button>
    </>
  );
};

export default SignInBtn;
