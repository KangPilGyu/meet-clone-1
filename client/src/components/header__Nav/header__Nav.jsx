import React, { useContext } from 'react';
import Button from '../button/button';
import styles from './header__Nav.module.css';
import SignIn from '../signInModal/signin.jsx';
import { stateContext } from '../../App.jsx';

const HeaderNav = () => {
  const { onClickLoginOpen, loginModal } = useContext(stateContext);
  console.log(loginModal);
  return (
    <>
      <nav className={styles.navbar}>
        {/* {loginModal ? <SignIn /> : null} */}
        <Button name="SignIn" onClick={onClickLoginOpen} location="signIn" />
      </nav>
    </>
  );
};

export default HeaderNav;
