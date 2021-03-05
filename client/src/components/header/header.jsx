import React from 'react';
import Nav from '../header__Nav/header__Nav.jsx';
import SignIn from '../signInModal/signin.jsx';
import styles from './header.module.css';
const Header = () => {
  return (
    <header>
      <span className={styles.logo}>EveryWhere</span>
      <Nav />
      <SignIn />
    </header>
  );
};

export default Header;
