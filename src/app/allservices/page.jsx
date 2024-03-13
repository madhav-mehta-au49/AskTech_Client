"use client"

import React, { useState } from 'react';
import styles from "./allservices.module.css";
import { FaConnectdevelop } from "react-icons/fa";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbCloudComputing } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { FaDigitalOcean } from "react-icons/fa";
import { FaWindowRestore } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import Popup from '@/components/popup/Popup';

const AllServices = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

  const services = [
    {
      icon: <FaConnectdevelop className={styles.icon} />,
      title: "Web Development",
      description: [
        "Craft Websites that Captivate & Convert.",
        "From Vision to Pixel-Perfect Reality.",
        "Beyond the Surface: Results that Matter.",
        "Affordable Excellence: Websites for Every Budget.",
      ],
    },
    {
      icon: <BsFileEarmarkBarGraphFill className={styles.icon} />,
      title: "Application Development",
      description: [
        "Craft Solutions, Not Apps: We Engineer Success.",
        "Bridge the Gap: From Vision to Applause.",
        "Measure, Improve, Thrive: Continuous Optimization Is Key.",
        "Partnership for Progress: We're in This Together.",
      ],
    },
    {
      icon: <FaCodeBranch className={styles.icon} />,
      title: "UI/UX Design",
      description: [
        "Craft Beautiful Experiences, Drive Tangible Results.",
        "User-Centricity at Our Core.",
        "Beyond Pixel Perfection: Storytelling Through Design.",
        "Your Design Partner, Not Just Service Providers.",
      ],
    },
    {
      icon: <TbCloudComputing className={styles.icon} />,
      title: "Cloud Management",
      description: [
        "Take Control, Unleash Potential: Master Your Cloud with Us.",
        "Visibility & Insights: Demystify Your Cloud, Make Informed Decisions.",
        "Agility & Scalability: Adapt & Thrive in the Ever-Changing Cloud Landscape",
        "Partnership, Not Service: We're Your Cloud Management Collaborators.",
      ],
    },
    {
      icon: <MdImportantDevices className={styles.icon} />,
      title: "QA & Testing",
      description: [
        "Unleash the Unseen: Comprehensive Testing Coverage for Unwavering Quality.",
        "Future-Proof Expertise: Investing in Continuous Improvement..",
        "Beyond Bugs: Embrace the Holistic Approach..",
        "Show, Don't Tell: Quantify Your Impact.",
      ],
    },
    {
      icon: <FaDigitalOcean className={styles.icon} />,
      title: "Digital Marketing",
      description: [
        "4 Crisp Pointers for Your Fintech Solution Company Service Page.",
        "Content that Converts: Captivate, Engage, and Drive Action.",
        "Innovation & Experimentation: Stay Ahead of the Curve with Cutting-Edge Strategies.",
        "Your Team of Partners, Not Just Agencies: Collaborative Success Every Step of the Way",
      ],
    },
    {
      icon: <FaRegCreditCard className={styles.icon} />,
      title: "Payment Gateway",
      description: [
        "Unleash Frictionless Commerce: Streamline Transactions, Empower Growth.",
        "Speed, Scalability, and Global Reach: Expand Your Boundaries.",
        "Data-Driven Decisions, Strategic Growth.",
        "Partnership Beyond Transactions: Dedicated Support & Innovation.",
      ],
    },
    {
      icon: <FaWindowRestore className={styles.icon} />,
      title: "Consultation Services",
      description: [
        "Talent Puzzle Solved: Build Your Dream Cloud Team with Expert Guidance.",
        "Deep Bench & Strategic Matching: Right People, Right Roles, Right Now.",
        "Beyond Recruitment: Proactive Management & Ongoing Support.",
        "Partnership for Progress: Your Long-Term Cloud Workforce Ally.",
      ],
    },
    {
      icon: <AiOutlineSolution className={styles.icon} />,
      title: "Fintech Solution",
      description: [
        "Forge the Future of Finance: Build Bespoke Fintech Solutions with Proven Expertise.",
        "Technology Unleashed: Empower Your Vision with Next-Gen Fintech Capabilities.",
        "From Payments to Wealth Management: Navigating the Fintech Landscape with You.",
        "Measurable Outcomes & Growth Partnership: Your Success is Our Shared Mission",
      ],
    },
  ];

  return (
    <>
      <div className={styles.servicesSection}>
        <h2 className={styles.mediumHeading}>Our Services</h2>
        <h1 className={styles.largeHeading}>
          We Offer a Wide Variety of IT Services
        </h1>
        <div className={styles.cardsContainer}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.overlay}></div>{" "}
        {/* Add an overlay for background image */}
        <div className={styles.content}>
          
          <p className={styles.Text}>
          Drop us a line! We are here to answer your questions 24/7
          </p>
          <h1 className={styles.bigHeading}>NEED A CONSULTATION?</h1>
          <button onClick={togglePopup} className={styles.button}>TALK TO AN EXPERT</button>
          <Popup show={showPopup} handleClose={togglePopup} />
        </div>
      </section>
    </>
  );
};

export default AllServices;
