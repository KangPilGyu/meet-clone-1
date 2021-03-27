import React, { useContext } from 'react';
import styles from './header__Nav.module.css';
import { stateContext } from '../../App.jsx';
import LinkBtn from '../linkBtn/linkBtn.jsx';
import Button from '../button/button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const HeaderNav = () => {
  const { onClickLoginOpen, loginStatus, setLoginStatus } = useContext(stateContext);
  const history = useHistory();
  const handleSignOut = (e) => {
    e.preventDefault();
    console.log('로그아웃 시도!');
    axios
      .post('/api/signOut')
      .then((res) => {
        console.log(res);
        setLoginStatus(localStorage.removeItem('jwt'));
        console.log(loginStatus);
        history.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <nav className={styles.navbar}>
        {(localStorage.getItem('jwt') || loginStatus ? true : false) ? (
          <Button name="SignOut" onClick={handleSignOut} />
        ) : (
          <LinkBtn name="SignIn" onClick={onClickLoginOpen} location="signIn" />
        )}
      </nav>
    </>
  );
};

export default HeaderNav;
