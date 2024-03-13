import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? styles.popupContainer : styles.hide;

  return (
    <div className={showHideClassName}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>Close</button>
        <h2 className={styles.title}>Ask an Expert</h2>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="Name" />
          <input type="email" className={styles.input} placeholder="Email" />
          <input type="tel" className={styles.input} placeholder="Phone Number" />
          <textarea className={styles.textarea} placeholder="Your Message"></textarea>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
