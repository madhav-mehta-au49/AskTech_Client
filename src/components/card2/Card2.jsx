import styles from './card2.module.css';

const Card2 = ({ imageUrl, name,  description }) => {
  return (
    <div className={styles.card_2}>
      
        <img src={imageUrl} className={styles.cardImage} alt="" />
        <div className={styles.cardOverlay}>
          <div className={styles.cardHeader}>
            
            <div className={styles.cardHeaderText}>
              <h3 className={styles.cardTitle}>{name}</h3>
            </div>
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      
    </div>
  );
};

export default Card2;