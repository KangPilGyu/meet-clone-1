import React from "react";
import styles from "./section.module.css";
import SectionHome from "../section__home/sectionHome.jsx";
import SectionInfo from "../section__info/sectionInfo.jsx";
import SectionTakeTour from "../section__takeTour/sectionTakeTour.jsx";
import SectionDeveloperInfo from "../section__developerInfo/sectionDeveloperInfo.jsx";

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
