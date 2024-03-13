"use client"

import Image from 'next/image';
import styles from './clientSlider.module.css'
import { useState, useEffect } from 'react';

const ClientSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === clients.length - 5 ? 0 : prevIndex + 1));
      }, 3000); // Change every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    const clients = [
      { id: 1, imageUrl: '/c1.jpg', name: 'Client 1' },
      { id: 2, imageUrl: '/c16.jpg', name: 'Client 16' },
      { id: 3, imageUrl: '/c5.jpg', name: 'Client 5' },
      { id: 4, imageUrl: '/c9.jpg', name: 'Client 9' },
      { id: 5, imageUrl: '/c13.jpg', name: 'Client 13' },
      { id: 6, imageUrl: '/c17.jpg', name: 'Client 17' },
      { id: 7, imageUrl: '/c15.jpg', name: 'Client 15' },
      { id: 8, imageUrl: '/c3.jpg', name: 'Client 3' },
      { id: 9, imageUrl: '/c10.jpg', name: 'Client 10' },
      { id: 10, imageUrl: '/c14.jpg', name: 'Client 14' },
      { id: 11, imageUrl: '/c7.jpg', name: 'Client 7' },
      { id: 12, imageUrl: '/c4.jpg', name: 'Client 4' },
        { id: 13, imageUrl: '/c11.jpg', name: 'Client 11' },
        { id: 14, imageUrl: '/c18.jpg', name: 'Client 18' },
        { id: 15, imageUrl: '/c19.jpg', name: 'Client 19' },
        // Add more client objects as needed
      ];

  return (
    <div className={styles.slider}>
    <h1 className={styles.header}>Our Clients</h1>
    <div className={styles.sliderContainer}>
      <div className={styles.sliderTrack} style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}>
        {clients.map((client) => (
          <div key={client.id} className={styles.slide}>
            <Image src={client.imageUrl} alt={client.name} width={200} height={40}/>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ClientSlider
