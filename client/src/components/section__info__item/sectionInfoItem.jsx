import React from 'react';
import styles from './sectionInfoItem.module.css';
const SectionInfoItem = ({ data }) => {
  console.log(data);
  return (
    <li className={styles.info}>
      {data.position === 'left' ? (
        <>
          <img className={styles.imageStyle} src={data.img} alt="character" />
          <div className={styles.info__explain}>
            <p className={styles.infoTitle}>{data.title}</p>

            <p className={styles.infoContents}>{data.contents}</p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.info__explain}>
            <p className={styles.infoTitle}>{data.title}</p>
            <p className={styles.infoContents}>{data.contents}</p>
          </div>
          <img className={styles.imageStyle} src={data.img} alt="character" />
        </>
      )}
    </li>
  );
};

export default SectionInfoItem;
