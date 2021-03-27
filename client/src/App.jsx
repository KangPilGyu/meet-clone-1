import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.jsx';
import Section from './components/section/section';
import SignIn from './components/signInModal/signin';
import TakeTour from './components/takeTour/takeTour.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

export const stateContext = React.createContext();

const App = () => {
  const [loginModal, setLoginModal] = useState(false);

  //scroll effect
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  // get user info
  const [userInfo, setUserInfo] = useState(null);
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      axios
        .get('/api/user')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userInfo]);

  const onClickLoginOpen = () => {
    setLoginModal(true);
  };
  const onClickLoginClose = () => {
    setLoginModal(false);
  };
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <stateContext.Provider
          value={{
            onClickLoginOpen,
            setLoginModal,
            loginModal,
            onClickLoginClose,
            position,
            setUserInfo,
            loginStatus,
            setLoginStatus,
          }}
        >
          <Switch>
            <Route path={['/', '/home']} exact>
              <Header />
              <Section />
              <Footer />
            </Route>
            <Route path="/signIn" exact>
              <SignIn />
            </Route>
            <Route path="/takeTour" exact>
              <TakeTour />
            </Route>
            <Route path="/meeting" exact>
              <TakeTour />
            </Route>
          </Switch>
        </stateContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
