import React, { useContext } from 'react';
import styles from './header__Nav.module.css';
import { stateContext } from '../../../../../store.js';
import LinkBtn from '../../../../commons/linkBtn/linkBtn.jsx';
import Button from '../../../../commons/button/button.jsx';
import { useHistory } from 'react-router-dom';

const HeaderNav = () => {
  const { loginModalDispatch, loginState, loginDispatch } = useContext(stateContext);
  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    loginDispatch({ type: 'logout' });
    history.push('/home');
  };
  return (
    <>
      <nav className={styles.navbar}>
        {loginState.isLoggedIn ? (
          <Button name="SignOut" onClick={handleSignOut} />
        ) : (
          <LinkBtn
            name="SignIn"
            onClick={() => loginModalDispatch({ type: 'open' })}
            location="signIn"
          />
        )}
      </nav>
    </>
  );
};

export default HeaderNav;
