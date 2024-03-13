import React from "react";
// import styles from "./footer.module.css";
// import Image from "next/image";
// import Link from "next/link";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (

    <div className="footer_1">
      <div className="footer">
      <div className="sec-1">
        <div className="sec-head">Services</div>
        <div className="sec-link">
        <a href="Outsourcing">Outsourcing</a>
        <a href="Application Development">Application Development</a>
        <a href="Support Services & Application Maintenance">Support Services & Application Maintenance</a>
        <a href="Analytics Services and Big Data Consulting">Analytics Services and Big Data Consulting</a>
        <a href="Fintech Solution">Fintech Solution</a>
        <a href="Cloud Consulting & Engineering">Cloud Consulting & Engineering</a>
        <a href="Digital Transformation Services">Digital Transformation Services</a>
        <a href="DevOps Services and Solution">DevOps Services and Solutions</a>
        <a href="Quality Assurance and Testing Services for Software">Quality Assurance and Testing Services for Software</a>
        <a href="UX&UI Design Services, Front End Development">UX&UI Design Services, Front End Development</a>
        </div>
      </div>
      <div className="sec-2">
        <div className="sec-head">Sector</div>
        <div className="sec-link">
          <a href="#">
         AdTech and Marketing Technology Solutions</a>
          <a href="#">Custoner Helth service Devlopment</a>
          
          <a href="#">Custom Healthcare Software Development</a>
          
          <a href="#">Custom Software Development for Finance and Banking Industry</a>
          
          <a href="#">Personalized Software Development for Startups</a>
          
          <a href="#">Instruction and E-Learning Advancement Services</a>
          
          <a href="#">Development of Real Estate Software</a>
          
          <a href="#">Developing programmes for data publishers</a>
          
          <a href="#">Services for nonprofit programme development</a>
          
          <a href="#">IT Security Services</a>
          
          <a href="#">Hospitality and travel development</a>
        </div>
      </div>
      <div className="sec-3">
        <div className="sec-head">Technologies</div>
        <div className="sec-link">
          <a href="#">AI and Machine Learning Services</a>
          
          <a href="#">.NET Development</a>
          
          <a href="#">Development of software as a service (SaaS)</a>
          
          <a href="#">Development of software as a service (SaaS)</a>
          
          <a href="#">Development of C, C#, and C++ software</a>
          
          <a href="#">Services for Java Software Development</a>
          
          <a href="#">PHP Development Services</a>
          
          <a href="#">Development of Python Software</a>
          
        </div>
      </div>
      <div className="sec-4">
        <div className="sec-head">Company</div>
        <div className="sec-link">
          <a href="#">About Us</a>
          
          <a href="#">Why Choose Us</a>
          
          <a href="#">Privacy Policy</a>
          
          <a href="#">Terms & Conditions</a>
          
          <a href="#">Refund and Cancellation</a>
          
        </div>
  
      </div>
      <br/>
      </div>
      <div className="footer_2">
        <img src="https://asktech.io/wp-content/uploads/2023/05/10003.png"></img>
        <span className="policy">© Asktech 2024. All Rights Reserved</span>  
        <span className="policy">Privacy Policy</span>  
        <span><CiPhone/> +91 9685005583</span>  
        <span><AiOutlineMail/> support@asktech.tech</span>  
          
      </div> 
    </div>
    
    )
}


export default Footer;
