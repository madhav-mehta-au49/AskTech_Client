"use client"

import React, { useState } from 'react';
import styles from './StickyContactButton.module.css';

const StickyContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={styles["sticky-contact-button"]} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      Contact Us
      {isOpen && (
        <div className={styles["contact-form"]}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StickyContactButton;
