import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
const Footer = () => {
  return (
    <footer className={styles.background}>
      <FontAwesomeIcon className={styles.icon} icon={['fab', 'instagram']} />
      <FontAwesomeIcon className={styles.icon} icon={['fab', 'github']} />
      <FontAwesomeIcon className={styles.icon} icon={['fab', 'twitter']} />
      <FontAwesomeIcon className={styles.icon} icon={['fab', 'linkedin']} />
    </footer>
  );
};

export default Footer;
