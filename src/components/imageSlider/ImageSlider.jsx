"use client"

import { useState, useEffect } from 'react';
import styles from './imageSlider.module.css';

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === clients.length - 3 ? 0 : prevIndex + 1));
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const clients = [
        { id: 1, imageUrl: '/1.png', name: 'Client 1' },
        { id: 2, imageUrl: '/2.png', name: 'Client 2' },
        { id: 3, imageUrl: '/3.png', name: 'Client 3' },
        { id: 4, imageUrl: '/4.png', name: 'Client 4' },
        { id: 5, imageUrl: '/5.png', name: 'Client 5' },
        { id: 6, imageUrl: '/6.png', name: 'Client 6' },
        { id: 7, imageUrl: '/7.png', name: 'Client 7' },
        { id: 8, imageUrl: '/8.png', name: 'Client 8' },
        { id: 9, imageUrl: '/9.png', name: 'Client 9' },
        // Add more client objects as needed
    ];

    return (
        <div className={styles.slider}>
            <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack} style={{ transform: `translateX(-${currentIndex * (100 / (clients.length - 3))}%)` }}>
                    {clients.map((client, index) => (
                        <div key={client.id} className={styles.slide}>
                            <img src={client.imageUrl} alt={client.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;


