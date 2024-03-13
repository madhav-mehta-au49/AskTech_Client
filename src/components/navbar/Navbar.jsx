"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import Popup from "../popup/Popup";
// import ThemeToggle from "../themeToggle/ThemeToggle";
// import AuthLinks from "../authLinks/AuthLinks";

function Navbar() {

  const [showPopup, setShowPopup] = useState(false);
  
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.social}>
            <Link className={styles.links} href="/"><Image src="/facebook.png" alt='' width={20} height={20}/></Link>
            <Link className={styles.links} href="/"><Image src="/instagram.png" alt='' width={20} height={20}/></Link>
            <Link className={styles.links} href="/"><Image src="/Linkdin.png" alt='' width={20} height={20}/></Link>
        </div>
        <div className={styles.contact}>
            <h4 className={styles.num}><Image src="/india.png" alt='' width={20} height={20}/> + 91 9685005583</h4>
            <h4 className={styles.num}><Image src="/usa.png" alt='' width={20} height={20}/>+1 209 813 2882</h4>
            <h4 className={styles.num}><Image src="/uae.png" alt='' width={20} height={20}/>+971 551156103</h4>
            <h4 className={styles.email}><Image src="/email.png" alt='' width={20} height={20}/>support@asktech.tech</h4>
        </div>
    </div>
    <div className={styles.nav}>
        
        <Link href="/"><Image className={styles.logo} src="/asktech.jpg" alt='' height={90} width={100}/></Link>
        <Link className={styles.navlink} href="/">Home</Link>
        {/* <Link className={styles.navlink} href="/">Services <Image src="/down.png" alt='' height={10} width={10}/></Link> */}

        <div className={styles.dropdown}>
          <Link href="/allservices" className={styles.navlink}>Services <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="/service1">Outsourcing</Link>
            <Link href="/mobile-application-development-services">Application Development</Link>
            <Link href="/big-data-consulting-and-analytics-services">Analytics Services and Big Data Consulting</Link>
            <Link href="/custom-software-development">Customised Software Development</Link>
            <Link href="/service3">Cloud Cunsulting & Engineering</Link>
            <Link href="/digital-marketing">Digital Marketing</Link>
            <Link href="/devops-services-and-solutions">DevOps Services And Solution</Link>
            <Link href="/service3">Quality Assurance And Testing Services for Software</Link>
            <Link href="/service3">Web Development</Link>
            <Link href="/front-end-development-uxui-design-services">UX & UI Design Services, Frontend Development</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Sectors <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="/service1">AdTech and Marketing Technology Solution</Link>
            <Link href="/healthcare-software-development">Custom Healthcare Software Development</Link>
            <Link href="/custom-software-development-for-finance-and-banking-industry">Custom Software Development finance and banking industry</Link>
            <Link href="/custom-software-development-for-startups">Personalized software devlopment for Startups</Link>
            <Link href="/education-and-e-learning-development-services">Instruction and E-learning Advancment services</Link>
            <Link href="/real-estate-software-development-services">Devlopment of real estate software</Link>
            <Link href="/service3">Services for nonprofit program Devlopment</Link>
            <Link href="/service2">It Security Services</Link>
            <Link href="/service3">Devloping Programs for Data publishers</Link>
            <Link href="/service2">Hospitality And Travel Devlopment</Link>
            
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Technologies <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="/ai-and-machine-learning-services">AI and Machine Learning Services</Link>
            <Link href="/service2">Devlopment of C, C#, And C++ Software</Link>
            <Link href="/service3">Services for Java Software Devlopment</Link>
            <Link href="/service1">.NET Devlopment</Link>
            <Link href="/service2">PHP Devlopment Services</Link>
            <Link href="/service3">Devlopment of Phython Software</Link>
            <Link href="/service3">Devlopment of Software as Link Service (SaaS)</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Company <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="/service1">About Us</Link>
            <Link href="/ourblogs">Our Blogs</Link>
            <Link href="/service3">Why Choose US</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link href="#" className={styles.navlink}>Generative AI <Image className={styles.drop} src="/down.png" alt='' height={10} width={10}/></Link>
          <div className={styles.dropdownContent}>
            <Link href="/service1">Analyze Medical Records and Pictures</Link>
            <Link href="/service2">Degital Ambient Scribe</Link>
            <Link href="/service3">Healthcare Coding Automation</Link>
            <Link href="/service2">Personalized Medical care</Link>
            <Link href="/service3">Smart Health Assist</Link>
          </div>
        </div>

        <Link className={styles.navlink} href="/">Career</Link>
        <Link className={styles.navlink} href="/">Contact Us</Link>
        <button className={styles.button} onClick={togglePopup} >TALK TO EXPERT</button>
        <Popup show={showPopup} handleClose={togglePopup} />
        <AuthLinks className={styles.burger}/>
    </div>
        </div>
  )
  
}

export default Navbar; 