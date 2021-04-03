import React from 'react';
import Nav from './header__Nav/header__Nav.jsx';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.logo}>EveryWhere</span>
      <Nav />
    </header>
  );
};

export default Header;
