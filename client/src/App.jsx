import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.jsx';
import Section from './components/section/section';
import SignIn from './components/signInModal/signin';
import TakeTour from './components/takeTour/takeTour.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './store.js';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Store>
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
        </Store>
      </BrowserRouter>
    </div>
  );
};

export default App;
