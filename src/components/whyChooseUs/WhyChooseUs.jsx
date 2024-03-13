import styles from './WhyChooseUs.module.css';
import { LiaReact } from "react-icons/lia";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className={styles.whyChooseUs}>
            <h2 className={styles.header}>Why Choose Us</h2>
            <div className={styles.container}>
                <div className={styles.card}>
                    <i className={` ${styles.icon}`}><LiaReact /></i>
                    <h3 className={styles.title}>Your Vision, Our Craft</h3>
                    <p className={styles.description}>We listen to your unique needs and translate them into powerful, custom SaaS solutions that are a perfect fit for your business. Your One-Stop Shop for Growth: digital marketing, Fintech, IT, and Web Development Expertise</p>
                </div>
                <div className={styles.card}>
                    <i className={` ${styles.icon}`}><FaFileInvoiceDollar /></i>
                    <h3 className={styles.title}>Cost-Effective Efficiency</h3>
                    <p className={styles.description}>We believe in customizing your SaaS to your specific needs, not your wallet. Get the Most Out of Your Investment That Meet Your Budget. Our team is committed to finding creative and cost-effective solutions to your business challenges.</p>
                </div>
                <div className={styles.card}>
                    <i className={`${styles.icon}`}><RiTeamFill /></i>
                    <h3 className={styles.title}>Last dedicated team</h3>
                    <p className={styles.description}>A Dedicated Team Partnering for Success..You're not just buying software, you're gaining a trusted partner. Our team of seasoned experts is with you every step of the way, from initial ideation to implementation and ongoing support.</p>
                </div>
                <div className={styles.card}>
                    <i className={` ${styles.icon}`}><MdOutlineSecurity /></i>
                    <h3 className={styles.title}>Security Assured</h3>
                    <p className={styles.description}>Unwavering Focus on Protecting Your Data and Operations security is paramount. We robust security measures to ensure your data and operations are safeguarded. your custom SaaS is built on a foundation of  protection.</p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
