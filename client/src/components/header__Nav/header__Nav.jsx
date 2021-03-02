import React from "react";
import styles from "./header__Nav.module.css";

const HeaderNav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <button className={styles.nav__button}>SignIn</button>
      </nav>
    </>
  );
};

export default HeaderNav;
