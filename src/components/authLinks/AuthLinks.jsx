"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";

const AuthLinks = ({ className }) => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
   

  const handleCall = () => {
    // Redirect to phone dial pad
    window.location.href = "tel:+919685005583"; // Replace with your phone number
  };

  return (
    <>
      
      <div className={`${styles.burger} ${className}`} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.mobilePhoneIcon}>
        <button className={styles.callButton} onClick={handleCall}>
          <BiSolidPhoneCall className={styles.phoneIcon} />
        </button>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
           <div className={styles.dropdown}>
            <Link href="/" className={styles.navlink}>Home</Link>
          </div>
          <div className={styles.dropdown}>
          <Link href="/allservices" className={styles.navlink}>Services <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="#service1" className={styles.sublink}>Outsourcing</Link>
            <Link href="/mobile-application-development-services" className={styles.sublink}>Application Development</Link>
            <Link href="/big-data-consulting-and-analytics-services" className={styles.sublink}>Analytics Services and Big Data Consulting</Link>
            <Link href="/custom-software-development" className={styles.sublink}>Customised Software Development</Link>
            <Link href="#service3" className={styles.sublink}>Cloud Cunsulting & Engineering</Link>
            <Link href="#service3" className={styles.sublink}>Digital Marketing</Link>
            <Link href="#service3" className={styles.sublink}>DevOps Services And Solution</Link>
            <Link href="#service3" className={styles.sublink}>Quality Assurance And Testing Services for Software</Link>
            <Link href="#service3" className={styles.sublink}>Web Development</Link>
            <Link href="#service3" className={styles.sublink}>UX & UI Design Services, Frontend Development</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Sectors <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="#service1" className={styles.sublink}>AdTech and Marketing Technology Solution</Link>
            <Link href="#service2" className={styles.sublink}>Custom Healthcare Software Development</Link>
            <Link href="#service3" className={styles.sublink}>Custom Software Development finance and banking industry</Link>
            <Link href="#service2" className={styles.sublink}>Personalized software devlopment for Startups</Link>
            <Link href="#service3" className={styles.sublink}>Instruction and E-learning Advancment services</Link>
            <Link href="#service2" className={styles.sublink}>Devlopment of real estate software</Link>
            <Link href="#service3" className={styles.sublink}>Services for nonprofit program Devlopment</Link>
            <Link href="#service2" className={styles.sublink}>It Security Services</Link>
            <Link href="#service3" className={styles.sublink}>Devloping Programs for Data publishers</Link>
            <Link href="#service2" className={styles.sublink}>Hospitality And Travel Devlopment</Link>
            
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Technologies <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="#service1" className={styles.sublink}>AI and Machine Learning Services</Link>
            <Link href="#service2" className={styles.sublink}>Devlopment of C, C#, And C++ Software</Link>
            <Link href="#service3" className={styles.sublink}>Services for Java Software Devlopment</Link>
            <Link href="#service1" className={styles.sublink}>.NET Devlopment</Link>
            <Link href="#service2" className={styles.sublink}>PHP Devlopment Services</Link>
            <Link href="#service3" className={styles.sublink}>Devlopment of Phython Software</Link>
            <Link href="#service3" className={styles.sublink}>Devlopment of Software as Link Service (SaaS)</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Company <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="#service1" className={styles.sublink}>About Us</Link>
            <Link href="/ourblogs" className={styles.sublink}>Our Blogs</Link>
            <Link href="#service3" className={styles.sublink}>Why Choose US</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Generative AI <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="#service1" className={styles.sublink}>Analyze Medical Records and Pictures</Link>
            <Link href="#service2" className={styles.sublink}>Degital Ambient Scribe</Link>
            <Link href="#service3" className={styles.sublink}>Healthcare Coding Automation</Link>
            <Link href="#service2" className={styles.sublink}>Personalized Medical care</Link>
            <Link href="#service3" className={styles.sublink}>Smart Health Assist</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
            <Link href="#Home" className={styles.navlink}>Career</Link>
          </div>
          <div className={styles.dropdown}>
            <Link href="#Home" className={styles.navlink}>Contact Us</Link>
          </div>
          {/* {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <Link className={styles.link}>Logout</Link>
            </>
          )} */}
        </div>
      )}
    </>
  );
};

export default AuthLinks;