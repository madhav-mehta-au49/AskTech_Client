"use client";
import React, { useState } from "react";
import styles from "./big-data-consulting-and-analytics-services.module.css";
import Popup from "@/components/popup/Popup";
import { FaMedkit } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AnalyticsServices = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const cardsData = [
    {
      title:
        "ADVANCE YOUR DATA INVESTMENT CONVERT BUSINESS AND CONSUMER PERCEPTIVITY TO ACTION",
      content: [
        "AskTech provides strategy, engineering, and analytics services related to big data. ",
        "Using analytics to help our guests gain practicable perceptivity to ameliorate business dexterity and competitiveness advantage. With our scalable, secure, and nimble big data results, we help associations thrive in a data- driven world.",
      ],
      image: "/data2.jpg",
      hasList: false,
    },
    {
      title: "We help companies work big data to:",
      image: "/data3.jpg",
      content: "Content for card 2",
      hasList: true,
      listItems: [
        "Rooting business value from data collection and connection ",
        "Transfigure data silos into practicable perceptivity",
        "The engineering, development, and launch of customized big data storages and lakes ",
        "Enhance the security and scalability of data platforms ",
        "Maintaining, optimizing, and managing Big Data platforms",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <div className={styles.backgroundImage}></div>
        <h1 className={styles.heading}>
          ANALYTICS SERVICES AND BIG DATA CONSULTING
        </h1>
      </div>

      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index % 2 === 0 ? styles.leftImage : styles.rightImage
            }`}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{card.title}</h2>
              {card.hasList ? (
                <ul className={styles.list}>
                  {card.listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <>
                  {Array.isArray(card.content) ? (
                    card.content.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{card.content}</p>
                  )}
                </>
              )}
            </div>
            <img
              src={card.image}
              alt={`Image for ${card.title}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <div className={styles.additionalContent}>
        <h3 className={styles.bigHeading}>Big Data Services</h3>
        <p className={styles.smallParagraph}> We offer consulting, development, optimization, and conservation services to cover the development of big data platforms from launch to finish.</p>
        <div className={styles.additionalListsContainer}>
          {/* Left side list */}
          <ul className={styles.additionalList}>
            <li>Consultancy services</li>
            <li>assaying big data projects</li>
            <li>Architecture and design of data storages and data lakes</li>
            <li>Software and platform development for big data</li>
            <li>Design and development of ETL</li>
            <li>Governance and security of data</li>
            <li>Services related to data integration</li>
            <li>Reporting and querying</li>
          </ul>
          {/* Right side list */}
          <ul className={styles.additionalList}>
            <li>Processes and operation of scalable data</li>
            <li>Migration to the pall and modernization of data storages</li>
            <li>Services related to optimization, conservation, and support</li>
            <li>Assaying and enforcing prophetic and real- time data</li>
            <li>AI and machine literacy</li>
            <li>Custom data modeling and data wisdom</li>
            <li>Visualizing data</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.additionalContent}>
        <h3 className={styles.bigHeading2}>Industries We Work With</h3>
        <p className={styles.smallParagraph2}> AskTech Big Data Development Services are acclimatized to meet the specific business objects and budgets of each customer. With our professed Data Scientists, Machine Learning masterminds, Big Data inventors, and Quality Assurance specialists, we’re suitable to help innovative startups and large enterprises work their data investments. We prize business value from their data, and enhance their productivity. use data to optimize business processes, gain consumer perceptivity, and prognosticate deals.</p>
        <div className={styles.iconsContainer}>
        <div className={styles.iconsRow}>
          <div className={styles.icon}>
            <FaMedkit size={50} /> {/* Replace IconName with the actual React Icon component */}
            <p className={styles.head}>Digital Health</p>
          </div>
          <div className={styles.icon}>
            <FaHandHoldingUsd size={50} />
            <p className={styles.head}>Financial Services</p>
          </div>
          <div className={styles.icon}>
            <FaCartShopping size={50} />
            <p className={styles.head}>Retail</p>
          </div>
        </div>
        <div className={styles.iconsRow}>
          <div className={styles.icon}>
            <FaUserGraduate size={50} />
            <p className={styles.head}>Education</p>
          </div>
          <div className={styles.icon}>
            <RiAdvertisementFill size={50} />
            <p className={styles.head}>AdTech & Marketing</p>
          </div>
          <div className={styles.icon}>
            <FaMoneyBillAlt size={50} />
            <p className={styles.head}>Non-Profit</p>
          </div>
        </div>
        <div className={styles.iconsRow}>
          <div className={styles.icon}>
            <FaEnvelopeOpenText size={50} />
            <p className={styles.head}>Publishing</p>
          </div>
          <div className={styles.icon}>
            <FaMobile size={50} />
            <p className={styles.head}>IoT</p>
          </div>
          <div className={styles.icon}>
            <FaStar size={50} />
            <p className={styles.head}>ISVs</p>
          </div>
        </div>
      </div>

      <div className={styles.cardContainer}>
    <div className={`${styles.card} ${styles.rightImage}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>AskTech Data Scientists are committed to bringing change to your business.</h2>
        <p>Our Data Scientists will explore and precisely examine data from a variety of distant sources to deliver new perceptivity pivotal for better decision- making processes related to competitive positioning or being business issues and give recommendations on how to effectively use being data to achieve unique customer pretensions. AskTech Data Scientists and software inventors dissect the volume, variety, and complexity of the customer’s data previous to proposing an optimal result.</p>
      </div>
      <img
        src="/data1.avif"
        alt="Image for Use Client"
        className={styles.image}
      />
    </div>
  </div>

      <div className={styles.contactSection}>
        <div className={styles.overlay}></div>{" "}
        <div className={styles.contact_content}>
          <p className={styles.Text}>
            Drop us a line! We are here to answer your questions 24/7
          </p>
          <h1 className={styles.bigHeading}>NEED A CONSULTATION?</h1>
          <button onClick={togglePopup} className={styles.button}>
            TALK TO AN EXPERT
          </button>
          <Popup show={showPopup} handleClose={togglePopup} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnalyticsServices;
