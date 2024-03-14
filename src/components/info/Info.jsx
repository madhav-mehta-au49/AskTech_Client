"use client";
import { useState } from "react";
import styles from "./info.module.css";
import Image from "next/image";
import { IoArrowRedo } from "react-icons/io5";

const Info = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your submit logic
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>Power Your Business with Tailored Tech Solutions</h2>
          <p>We provide smart device solutions that streamline operations and boost productivity. Our custom applications are designed to address inefficient workflows and help you achieve your business goals. We offer expert cloud migration, security, and support, web development services, advanced mobility solutions, and digital marketing services for startups and enterprises of all sizes. Our quality-centered work culture focuses on client success and takes a customized approach, right from project research to implementation, and beyond. Our extensive cross-domain experience makes us an ideal partner for the entire project lifecycle. Contact us today for a free consultation and a customized quote.</p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/team.jpg" alt="Team photo" className={styles.image} width={600} height={400}/>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.title}>What Sets Us Apart</h2>
          <ul className={styles.list}>
            <li>
              <div className={styles.circle}><IoArrowRedo /></div>
              <span>We tackle everything from web development and mobile apps to security and digital marketing. Think of us as your tech Swiss Army knife.</span>
            </li>
            <li>
              <div className={styles.circle}><IoArrowRedo /></div>
              <span>Quality first: We&apos;re obsessed with exceeding your expectations. Every project gets our full attention and a customized approach, from research to launch and beyond.</span>
            </li>
            <li>
              <div className={styles.circle}><IoArrowRedo /></div>
              <span>Your success is our mission: We don&apos;t just build software, we build partnerships.</span>
            </li>
          </ul>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Subscribe to Our Newsletter</h1>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                />
                Accept T&amp;C
              </label>
            </div>
            <div className={styles.formGroup}>
              <button type="submit" className={styles.button}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Info;
