import styles from './servicecard.module.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      {icon}
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.description}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
