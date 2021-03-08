import React, { useContext } from 'react';
import styles from './header__Nav.module.css';
import { stateContext } from '../../App.jsx';
import LinkBtn from '../linkBtn/linkBtn.jsx';

const HeaderNav = () => {
  const { onClickLoginOpen, loginModal } = useContext(stateContext);
  console.log(loginModal);
  return (
    <>
      <nav className={styles.navbar}>
        <LinkBtn name="SignIn" onClick={onClickLoginOpen} location="signIn" />
      </nav>
    </>
  );
};

export default HeaderNav;
