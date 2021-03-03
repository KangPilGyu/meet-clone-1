import React from 'react';
import styles from './sectionInfo.module.css';
import datas from '../../data/infos.json';
import SectionInfoItem from '../section__info__item/sectionInfoItem.jsx';
const SectionInfo = () => {
  return (
    <ul className={styles.infos}>
      {datas.infos.map((info) => {
        return <SectionInfoItem data={info} key={info.id} />;
      })}
    </ul>
  );
};

export default SectionInfo;
