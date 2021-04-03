import { loginReducer } from './jsx/utility/loginReducer.js';
import { positionReducer } from './jsx/utility/postionReducer.js';
import { loginModalReducer } from './jsx/utility/loginModalReducer.js';
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

export const stateContext = React.createContext();

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoading: false,
  message: '',
  isLoggedIn: false,
};

const initialPosition = {
  position: 0,
};

const initailModal = {
  modal: false,
};

const Store = (props) => {
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
  const [positionState, positionDispatch] = useReducer(positionReducer, initialPosition);
  const [loginModalState, loginModalDispatch] = useReducer(loginModalReducer, initailModal);

  const onScroll = () => {
    positionDispatch({ type: 'scroll' });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  // get user info
  useEffect(() => {
    let token = localStorage.getItem('jwt');
    if (token) {
      axios
        .get('/api/users')
        .then((res) => {
          console.log(res);
          loginDispatch({ type: 'success' });
        })
        .catch((err) => {
          console.log(err);
          loginDispatch({ type: 'error' });
        });
    }
  }, []);

  return (
    <stateContext.Provider
      value={{
        initialState,
        loginModalDispatch,
        loginState,
        loginDispatch,
        positionState,
        positionDispatch,
        loginModalState,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

export default Store;
