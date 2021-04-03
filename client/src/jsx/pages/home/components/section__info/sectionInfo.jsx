import React from 'react';
import styles from './sectionInfo.module.css';
import datas from '../../../../../data/infos.json';
import SectionInfoItem from '../section__info__item/sectionInfoItem.jsx';
const SectionInfo = () => {
  return (
    <div className={styles.infos}>
      {datas.infos.map((info) => {
        return <SectionInfoItem data={info} key={info.id} />;
      })}
    </div>
  );
};

export default SectionInfo;
