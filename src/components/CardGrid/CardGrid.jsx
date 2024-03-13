import styles from './CardGrid.module.css';

const CardGrid = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.header_subtitle}>Adaptable engagement models ensure project agility.</p>
        <h1 className={styles.header_title}>Engagement models that are flexible</h1>
        <p className={styles.header_description}>Flexible models empower stakeholders to optimize resources, mitigate risks, and maximize project outcomes efficiently.</p>
      </header>

      <main className={styles.card_grid}>
        <section className={`${styles.card} ${styles.cyan}`}>
          <h2 className={styles.card_title}>MATERIALS & TIME</h2>
          <p className={styles.card_content}>Our T&M model is ideal for flexible engagement scenarios, such as discovery, rapid prototyping, and maintenance.</p>
          <img className={styles.card_img} src="grid2.jpg" alt="Supervisor" />
        </section>

        <section className={`${styles.card} ${styles.red}`}>
          <h2 className={styles.card_title}>PRICE FIXED</h2>
          <p className={styles.card_content}>The Fixed Price model is ideal for projects with clearly defined objectives and milestones. Our proposals, schedules, and deliverables are detailed.</p>
          <img className={styles.card_img} src="/grid1.jpg" alt="Team Builder" />
        </section>

        <section className={`${styles.card} ${styles.blue}`}>
          <h2 className={styles.card_title}>AGREEMENT WITH RETAINER</h2>
          <p className={styles.card_content}>AskTech has retained agreements with a number of clients on a monthly and annual basis. As a project kick-off or ongoing engagement, this structured engagement is ideal.</p>
          <img className={styles.card_img} src="/grid3.jpg" alt="Karma" />
        </section>

        <section className={`${styles.card} ${styles.orange}`}>
          <h2 className={styles.card_title}>HYBRID MODEL</h2>
          <p className={styles.card_content}>As each project is unique, we offer a variety of pricing and engagement models. Hybrid models offer the perfect balance of structure and flexibility.</p>
          <img className={styles.card_img} src="/grid4.jpg" alt="Calculator" />
        </section>
      </main>
    </div>
  );
};

export default CardGrid;