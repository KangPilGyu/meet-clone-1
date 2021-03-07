import React, { useContext, useEffect, useState } from 'react';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.jsx';
import Section from './components/section/section';
import SignIn from './components/signInModal/signin';
import TakeTour from './components/takeTour/takeTour.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const stateContext = React.createContext();

const App = () => {
  const [loginModal, setLoginModal] = useState(false);
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
          value={{ onClickLoginOpen, setLoginModal, loginModal, onClickLoginClose }}
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
          </Switch>
        </stateContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
