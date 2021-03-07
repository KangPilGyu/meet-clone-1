import styles from './button.module.css';
import { Link, to } from 'react-router-dom';

const Button = ({ name, onClick, location }) => {
  return (
    <Link to={`/${location}`}>
      <button className={styles.button} onClick={onClick}>
        {name}
      </button>
    </Link>
  );
};

export default Button;
