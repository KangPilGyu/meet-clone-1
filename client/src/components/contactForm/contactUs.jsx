import React from 'react';
import emailjs from 'emailjs-com';
import styles from './contactUs.module.css';

export default function ContactUs() {
  function sendEmail(e) {
    console.log(process.env.REACT_APP_EMAILJS_API_KEY);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_API_KEY,
      ) //
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  return (
    <form className={styles.email} onSubmit={sendEmail}>
      <input className={styles.commonStyle} type="hidden" name="contact_number" />
      <input className={styles.commonStyle} type="text" name="name" placeholder="Enter your Name" />
      <input
        className={styles.commonStyle}
        type="email"
        name="email"
        placeholder="Enter a vaild email address"
      />
      <textarea
        className={styles.commonStyle}
        name="message"
        cols="30"
        rows="10"
        placeholder="Enter your Message"
      />
      <button className={styles.btnStyle} type="submit" value="Send">
        submit
      </button>
    </form>
  );
}
