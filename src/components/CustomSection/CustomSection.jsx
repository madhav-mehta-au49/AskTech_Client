// CustomSection.js

import React from 'react';
import styles from './CustomSection.module.css';

const CustomSection = () => {
  return (
    <section>
      <div className={styles.customContainer}>
        <div className={styles.customContent}>
          <div className={styles.customMedia}>
            <img
              className={styles.customMediaImage}
              src="/custom6.jpg"
              alt="ADD_ALT_TEXT_HERE"
              loading="lazy"
            />
          </div>
          <div className={styles.customText}>
            <h2 className={styles.customTextHeading}>Custom Software Development Services:</h2>
            
            <ul className={styles.customList}>
                <li>Analyses and discovery</li>
                <li>UX/UI design and architecture</li>
                <li>Development of a POC and MVP</li>
                <li>Development of custom software</li>
              </ul>
              <ul className={styles.customList}>
                <li>Automated testing and quality assurance</li>
                <li>Incorporating DevOps</li>
                <li>Migrating to, optimizing, and maintaining the cloud</li>
                <li>Maintenance and support</li>
              </ul>
           
          </div>
        </div>

        {/* Second section */}
        <div className={styles.customContent}>
          <div className={styles.customText}>
            <h2 className={styles.customTextHeading}>Digital Transformation Services</h2>
            <span className={styles.customTextCopy2}>Innovate | Optimize | Automate</span>
            <p className={styles.customTextCopy}>
            We draw on our many years of experience modernizing legacy systems. With our top notch cloud engineering and custom software development talent, breadth of technical expertise, and extensive capabilities in Business Intelligence, Big Data and Analytics, we are capable of developing innovative, scalable custom software solutions. In order to drive competitive advantage, create customer value, agility, and innovation in the modern era, we help our clients reinvent and adapt their software solutions and applications. In a Secure, Reliable and Scalable manner, we promptly act upon your vision.
            </p>
          </div>
          <div className={styles.customMedia}>
            
            <img
              className={styles.customMediaImage}
              src="/custom7.jpg"
              alt="ADD_ALT_TEXT_HERE"
              loading="lazy"
            />
            
          </div>
        </div>
        <div className={styles.customContent}>
        <div className={styles.customMedia}>
            
            <img
              className={styles.customMediaImage}
              src="/custom8.jpg"
              alt="ADD_ALT_TEXT_HERE"
              loading="lazy"
            />
            
          </div>
          <div className={styles.customText}>
            <h2 className={styles.customTextHeading}>Devops-as-a-Service</h2>
            <p className={styles.customTextCopy}>
            AskTech customized DevOps services enable clients to adapt to market changes promptly and sustainably. Our goal is to unify software development and operations into an efficient and rapid deployment infrastructure by providing our clients with a solid plan for implementing DevOps practices tailored to their release schedules, implementing CI/CD and transitioning to and implementing a seamless automated software delivery pipeline that is scalable and secure.
            </p>
           
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default CustomSection;
