import React from 'react';
import styles from './sectionInfoItem.module.css';
const SectionInfoItem = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img src={data.img} alt="img" width="250px" height="250px" />
      <h3>{data.title}</h3>
      <p>{data.contents}</p>
    </div>
  );
};

export default SectionInfoItem;
