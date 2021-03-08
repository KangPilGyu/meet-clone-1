import styles from './linkBtn.module.css';
import { Link } from 'react-router-dom';

const LinkBtn = ({ name, onClick, location }) => {
  return (
    <Link to={`/${location}`}>
      <button className={styles.button} onClick={onClick}>
        {name}
      </button>
    </Link>
  );
};

export default LinkBtn;
