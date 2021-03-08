import React, { useRef, useState } from 'react';
import styles from './sectionDeveloperInfo.module.css';
import profile from '../../data/profile.json';
import SectionDevFront from '../section__dev__front/sectionDevFront';
import SectionDevBack from '../section__dev__back/sectionDevBack';
import ContactUs from '../contactForm/contactUs.jsx';
import Button from '../button/button';

const SectionDeveloperInfo = () => {
  const [cardFlip, setCardFlip] = useState(false);
  const frontRef = useRef();
  const backRef = useRef();

  const onFlip = () => {
    setCardFlip(!cardFlip);
  };
  return (
    <div className={styles.background}>
      <div className={styles.developerInfo}>
        <div className={styles.cardController}>
          <Button name="Profile Change" onClick={onFlip} />
        </div>
        <div className={styles.card}>
          {cardFlip ? (
            <>
              <div className={styles.card__innerFlipped}>
                <div ref={frontRef} className={styles.card__innerBack}>
                  <SectionDevBack profInfo={profile.infos[1]} />
                </div>
                <div ref={backRef} className={styles.card__innerFront}>
                  <SectionDevFront profInfo={profile.infos[0]} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.card__inner}>
                <div ref={frontRef} className={styles.card__innerBack}>
                  <SectionDevBack profInfo={profile.infos[1]} />
                </div>
                <div ref={backRef} className={styles.card__innerFront}>
                  <SectionDevFront profInfo={profile.infos[0]} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default SectionDeveloperInfo;
