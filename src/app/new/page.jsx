
import Image from 'next/image'
import styles from './new.module.css'

const page = () => {
  return (
    <>
    <div className={`${styles.blogCard} ${styles.alt}`}>
      <div className={styles.meta}>
        <div className={styles.photo} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg)` }}></div>
        <ul className={styles.details}>
          <li className={styles.author}><a href="#">user name</a></li>
          <li className={styles.date}>Nov. 13, 2020</li>
          <li className={styles.tags}>
            <ul>
              <li><a href="#">C++</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <h1>Learning to Code in python</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        <p className={styles.readMore}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
    <div className={styles.blogCard}>
      <div className={styles.meta}>
        <div className={styles.photo} style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2015/07/02/09/52/interior-design-828545_960_720.jpg)` }}></div>
        <ul className={styles.details}>
          <li className={styles.author}><a href="#">user name</a></li>
          <li className={styles.date}>Nov. 13, 2020</li>
          <li className={styles.tags}>
            <ul>
              <li><a href="#">Buy</a></li>
              <li><a href="#">channels</a></li>
              <li><a href="#">ads</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <h1>Apple TV Plus cost, shows, channels, devices</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        <p className={styles.readMore}>
          <a href="#">Read More</a>
        </p>
      </div>
    </div>
  </>
  )
}

export default page
