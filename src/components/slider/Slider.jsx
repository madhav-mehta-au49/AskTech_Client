"use client"

import { useState, useEffect } from "react";
import styles from "./slider.module.css";

function Slider({ images }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % images.length) + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentPage, images.length]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % images.length) + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? images.length : prevPage - 1));
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(${-100 * (currentPage - 1)}%)` }}
      >
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img className={styles.image} src={image.src} alt={image.alt} />
            <div className={styles.overlay}></div>
            <div className={styles.text}>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
              <button className={styles.start}>START NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.squareButton} onClick={goToPrevPage}></button>
        <div className={styles.pageIndicator}>{currentPage} / {images.length}</div>
        <button className={styles.squareButton} onClick={goToNextPage}></button>
      </div>
    </div>
  );
}

export default Slider;
