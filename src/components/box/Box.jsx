"use client"

import { useState, useEffect } from 'react';
import styles from './box.module.css';

const Box = () => {
  const [projectCount, setProjectCount] = useState(1);
  const [customerCount, setCustomerCount] = useState(1);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    let interval;
    
    if (!stopTimer) {
      interval = setInterval(() => {
        setProjectCount((prevCount) => {
          if (prevCount < 80) {
            return prevCount + 1;
          } else if (prevCount < 130) {
            return prevCount + 2; 
          } else {
            return prevCount;
          }
        });
        setCustomerCount((prevCount) => (prevCount < 80 ? prevCount + 1 : 80));
      }, 20);
    }

   
    setTimeout(() => {
      setStopTimer(true);
    }, 300000); 

    return () => clearInterval(interval);
  }, [stopTimer]);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.image} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>{projectCount}+</h1>
            <h2>Projects Completed</h2>
            <p>Successfully delivered so many projects with customer success stories.</p>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.image2} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>{customerCount}+</h1>
            <h2>Happy Customers</h2>
            <p>Customer satisfaction is our prime motto and we are able to achieve it well.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
