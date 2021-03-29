import React, { useContext } from 'react';
import styles from './header__Nav.module.css';
import { stateContext } from '../../store.js';
import LinkBtn from '../linkBtn/linkBtn.jsx';
import Button from '../button/button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const HeaderNav = () => {
  const { loginModalDispatch, loginState, loginDispatch} = useContext(stateContext);
  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault();
    console.log('로그아웃 시도!');
    axios
      .post('/api/signOut')
      .then((res) => {
        console.log(res);
        localStorage.removeItem('jwt');
        loginDispatch({ type: 'logout' });
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
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
