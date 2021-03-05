import React from 'react';
import Button from '../button/button';
import styles from './header__Nav.module.css';

const HeaderNav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Button name="SignIn" />
      </nav>
    </>
  );
};

export default HeaderNav;
