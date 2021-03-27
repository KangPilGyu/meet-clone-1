import React, { useContext } from 'react';
import styles from './sectionInfoItem.module.css';
import { stateContext } from '../../App.jsx';

const SectionInfoItem = ({ data }) => {
  const { position } = useContext(stateContext);
  return (
    <li className={styles.info}>
      {data.position === 'left' ? (
        <>
          <img className={styles.imageStyle} src={data.img} alt="character" />
          <div className={styles.info__explain}>
            <p className={`${position > 15 ? styles.titleDown : null} ${styles.infoTitle}`}>
              {data.title}
            </p>

            <p className={styles.infoContents}>{data.contents}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.info__explain}>
            <p className={`${position > 41 ? styles.titleDown : null} ${styles.infoTitle}`}>
              {data.title}
            </p>
            <p className={styles.infoContents}>{data.contents}</p>
          </div>
          <img className={styles.imageStyle} src={data.img} alt="character" />
        </>
      )}
    </li>
  );
};

export default SectionInfoItem;
