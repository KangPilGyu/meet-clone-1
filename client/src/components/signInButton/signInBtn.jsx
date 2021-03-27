import React from 'react';
import styles from './signInBtn.module.css';
const SignInBtn = ({ name, onClick }) => {
  return (
    <>
      <button className={styles.signBtn} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default SignInBtn;
