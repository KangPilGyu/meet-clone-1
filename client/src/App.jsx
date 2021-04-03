import styles from './App.module.css';
import Footer from './jsx/pages/layouts/footer/footer.jsx';
import Header from './jsx/pages/layouts/header/header.jsx';
import Section from './jsx/pages/home/section.jsx';
import SignIn from './jsx/pages/signIn/signin.jsx';
import TakeTour from './jsx/pages/takeTour/takeTour.jsx';

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
