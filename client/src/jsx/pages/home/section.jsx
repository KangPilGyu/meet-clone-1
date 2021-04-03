import React from 'react';
import styles from './section.module.css';
import SectionHome from './components/section__home/sectionHome.jsx';
import SectionInfo from './components/section__info/sectionInfo.jsx';
import SectionTakeTour from './components/section__takeTour/sectionTakeTour.jsx';
import SectionDeveloperInfo from './components/section__developerInfo/sectionDeveloperInfo.jsx';

const Section = () => {
  return (
    <section>
      <SectionHome />
      <SectionInfo />
      <SectionTakeTour />
      <SectionDeveloperInfo />
    </section>
  );
};

export default Section;
