import React from 'react';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.jsx';
import Section from './components/section/section';
import SignIn from './components/signInModal/signin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Header />
            <Section />
            <Footer />
          </Route>
          {/* <Route path="/">
            <SignIn />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
