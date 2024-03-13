import styles from './OurServices.module.css';
import { FaConnectdevelop } from "react-icons/fa";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa6";
import ServiceCard from '../serviceCard/ServiceCard';
import Link from 'next/link';


const OurServices = () => {

    const services = [
        {
          icon: <FaConnectdevelop className={styles.icon} />,
          title: 'Web Development',
          description: [
            'Craft Websites that Captivate & Convert.',
            'From Vision to Pixel-Perfect Reality.',
            'Beyond the Surface: Results that Matter.',
            'Affordable Excellence: Websites for Every Budget.'
          ]
        },
        {
          icon: <BsFileEarmarkBarGraphFill className={styles.icon} />,
          title: 'Application Development',
          description: [
            'Craft Solutions, Not Apps: We Engineer Success.',
            'Bridge the Gap: From Vision to Applause.',
            'Measure, Improve, Thrive: Continuous Optimization Is Key.'
          ]
        },
        {
          icon: <FaCodeBranch className={styles.icon} />,
          title: 'UI/UX Design',
          description: [
            'Craft Beautiful Experiences, Drive Tangible Results.',
            'User-Centricity at Our Core.',
            'Beyond Pixel Perfection: Storytelling Through Design.',
            'Your Design Partner, Not Just Service Providers.'
          ]
        },
       
      ];

    return (
        <div className={styles.servicesSection}>
            <h2 className={styles.mediumHeading}>Our Services</h2>
            <h1 className={styles.largeHeading}>We Offer a Wide Variety of IT Services</h1>
            <Link href="/allservices" className={styles.button}>ALL SERVICES</Link>
            <div className={styles.cardsContainer}>
                
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                    ))}
            </div>
        </div>
    );
}

export default OurServices;
