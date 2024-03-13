"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./custom-software-development.module.css";
import Popup from "@/components/popup/Popup";

import Image from "next/image";
import NewSlider from "@/components/newSlider/NewSlider";
import CardGrid from "@/components/CardGrid/CardGrid";
import CustomSection from "@/components/CustomSection/CustomSection";

const CustomSoftwareDevelopment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [cardContainers, setCardContainers] = useState([]);
  const [cardsContainers, setCardsContainers] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardContainersResponse = await axios.get(
          "http://localhost:5000/cardcontainers"
        );
        console.log("Card Containers Response:", cardContainersResponse.data); // Added console.log
        const cardsContainersResponse = await axios.get(
          "http://localhost:5000/cardscontainers"
        );
        console.log("Cards Containers Response:", cardsContainersResponse.data); // Added console.log
        setCardContainers(cardContainersResponse.data);
        setCardsContainers(cardsContainersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    axios
      .get("http://localhost:5000/cardcontainers")
      .then((response) => {
        setCardContainers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching card containers:", error);
      });

    axios
      .get("http://localhost:5000/cardscontainers")
      .then((response) => {
        setCardsContainers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cards containers:", error);
      });

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {cardContainers.map((container_2, index) => (
        <div key={index} className={styles.container_2}>
          <img src={container_2.image} alt="" />
          <div className={styles.heroText}>
            <h1>{container_2.title}</h1>
            <p>{container_2.content}</p>
            <button className={styles.Button}>TALK TO EXPERT</button>
          </div>
        </div>
      ))}

      <div className={styles.cardsContainer}>
        <h2 className={styles.mediumHeading}>Why AskTech?</h2>
        <div className={styles.row}>
          {cardsContainers.map((cardsContainer, index) => (
            <div key={index} className={styles.card_2}>
              <img
                src={cardsContainer.image}
                className={styles.cardImage}
                alt={`Image ${index + 1}`}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardHeaderText}>
                    <h3 className={styles.cardTitle}>{cardsContainer.title}</h3>
                  </div>
                </div>
                <p className={styles.cardDescription}>
                  {cardsContainer.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CardGrid />
      {/* <NewSlider /> */}
      <CustomSection/>

      <div className={styles["timeline-section"]}>
        <h2 className={styles.timelineHeading}>Our “Secret Sauce”</h2>
        <div className={styles["timeline-items"]}>
          <div className={styles["timeline-item"]}>
            <div className={styles["timeline-dot"]}></div>
            <div className={styles["timeline-date"]}>Skill</div>
            <div className={styles["timeline-content"]}>
              <Image src="/custom9.jpg" alt="" height={200} width={200} />
              <p>
                We recruit and retain exceptional engineering talent and
                continue to train them. Most of AskTech developers and over half
                of its quality assurance staff hold master’s degrees in computer
                science or related fields. We have developed and perfected
                recruitment, hiring, training, and retention practices that
                allow us to hire the best and the brightest technical personnel
                and empower them with rigorous agile engineering processes –
                both of which contribute to our competitive advantage.
              </p>
            </div>
          </div>
          {/* More timeline items go here */}
          <div className={styles["timeline-item"]}>
            <div className={styles["timeline-dot"]}></div>
            <div className={styles["timeline-date"]}>Speed</div>
            <div className={styles["timeline-content"]}>
              <Image src="/custom10.jpg" alt="" height={200} width={200} />
              <p>
                We assemble a team of dedicated professionals who can be engaged
                more quickly than if they were hired locally. Depending on the
                needs of our clients, we are able to rapidly scale up or down
                Embedded Agile Development Methodology. Integration with the
                Client’s team and processes
              </p>
            </div>
          </div>
          <div className={styles["timeline-item"]}>
            <div className={styles["timeline-dot"]}></div>
            <div className={styles["timeline-date"]}>Security</div>
            <div className={styles["timeline-content"]}>
              <Image src="/custom11.jpg" alt="" height={200} width={200} />
              <p>
                We assemble a team of dedicated professionals who can be engaged
                more quickly than if they were hired locally. Depending on the
                needs of our clients, we are able to rapidly scale up or down
                Embedded Agile Development Methodology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
