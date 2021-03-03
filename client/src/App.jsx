import React from 'react';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.jsx';
import Section from './components/section/section';

const App = () => {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default App;
