"use client"
import React, { useState } from 'react';
import styles from './mobile-application-development-services.module.css';
import Popup from '@/components/popup/Popup';

const ApplicationDevelopment = () => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const cardsData = [
    {
      content: 
      
      [
        'Your Clients Need to be Able to Get to Your Commerce 24/7/365. With AskTech’s Top-Notch Portable APP Advancement Ability, They Can Get It Done',
        
        'Our mission is to push the boundaries of what is conceivable on portable gadgets by making inventive portable applications. Experiences that illuminate commerce challenges for clients extending from expansive organisations to start-up companiesA startup or inventive business person. With a profound understanding of local iOS, Android, and the advancement of cross-platform applications, your thoughts are transformed into a beautifully planned, user-friendly, and versatile arrangement of a predominant quality.'
      ],
      image: "/app1.jpg",
      hasList: false,
    },
    {
      title: 'Mobile App Improvement Services',
      image: "/app2.jpg",
      content: 'Content for card 2',
      hasList: true,
      listItems: [
        'Developing local iOS applications', 
        'Mobile app improvement for Android', 
        'A cross-platform portable solution',
        'Responsive HTML5 portable applications', 
        'Hybrid app development', 
        'Our full-cycle portable app improvement administrations include:',
        'Strategy administrations, Disclosure and Research', 
        'UX/UI Design', 
        'Proof-of-Concept and fast prototyping',
        'Mobile app improvement from scratch', 
        'Migration and optimization of versatile applications', 
        'Modernization of bequest applications',
        'QA, testing, and test automation', 
        'Support and maintenance', 
      ],
    },
    {
      title: 'Personalised iPhone and iPad Application Development',
      image: "/app3.jpg",
      content: 'Our skill lies in the advancement of cutting-edge iPhone and iPad applications that are customized to meet the desires of clients. We have created industry-specific arrangements as well as customized apps for the iPhone. AskTech iPhone computer programmer improvement groups have broad involvement in an assortment of areas, counting recreations, back applications, telecom, instructional applications, and portable arrangements for publishers.AskTech can help you with making an iPhone application by bringing skill, planning, and the best iPhone development practices. We are an ideal accomplice on the off chance that you’re considering creating a BYOD technique based on our profound understanding of portable security and cross-platform integration',
      hasList: false,
    },
    {
      
      image: "/app4.jpg",
      content: 
      [
        'Develop iOS apps for iPhone, iPad, Apple Observe, and IoT.Optimizing and overhauling existing versatile apps Development of versatile iOS applications Migrating desktop applications to iOS-enabled versatile devices Services related to responsive UX/UI design APIs on the server Quality affirmation, testing, and test narcotization for portable devices Personalized Android Application Development.',
         'AskTech has been involved in creating Android applications for an assortment of clients, counting trying business people, early organized wanders, and huge undertakings. The AskTech Android app advancement group follows industry guidelines, employs dexterous techniques, and follows the best application advancement hones and demonstrated techniques. Employing an assortment of Android improvement apparatuses and utilizing the most extreme potential of the Android SDK, AskTech Infosystem Android designers guarantee the completion of any extension within the planned completion date.',
      ],

      hasList: false,
    },
    {
      title: 'Personalized Android application advancement includes:',
      image: "/app5.jpg",
      content: 
      [
        'Mobile, tablet, wearable, and IoT gadget advancements built from the ground up utilizing Android',
        'Upgrades and optimizations of existing portable applications',
        'Enterprise-wide versatile application improvement for Android and cross-platform platforms',
        'We provide responsive UX/UI planning services.',
        'Development of Android widgets',
        'Test robotics, quality affirmation, and portable testing',
      ],
      hasList: false,
    },
    {
      title: 'Expertise in creating portable applications:',
      image: "/app6.avif",
      content: 'Content for card 6',
      hasList: true,
      listItems: [
        'Video/audio conferencing applications', 
        'Games IoT and wearable', 
        'mCommerce',
        'Investing apps', 
        'Telemedicine and mHealth', 
        'Marketing apps and social media',
        'VR and AR applications', 
        'Mobile CMS', 
        'Analysing portable data',
        'Implementing BYOD',  
      ],
    },
    {
      title: 'Digital Eatery Menus and Individual Sommelier for IPAD: Uptown Network',
      image: "/app7.jpg",
      content: 'Worldwide, eateries are taking advantage of the iPad’s capabilities. With individual sommeliers, indeed, eateries without sommeliers can offer their guests the opportunity to choose the fitting wine to complement their supper. All of these factors contribute to fulfilled clients, and the next adds up to dollar value. Versatile arrangements from Uptown Organise are promptly deployable, consistently coordinated,adaptable and demonstrated to extend eatery efficiency and proficiency. As well as giving important trade insights on portable gadget administration, real-time upgrades, social sharing, and back, the company also gives important trade insights. With Uptown Organise, eateries can optimise and send from the endeavour to the locale to the person restaurant!',
      hasList: false,
    },
    {
      title: 'The Versatile Cast',
      image: "/app8.avif",
      content: 'Stream any Microsoft PowerPoint slide immediately to any smartphone or tablet with the press of a button. The beneficiary is able to see the slide instantly without having to swim through emails, connections, or huge introductions. Presently, your portable workforce is completely associated, regardless of where they are. A Coordinate For Evernote Keep your memory sharp whenever you’ve got many minutes to save. Utilizing the notes put away in your Evernote account, Evermatch makes a fun and utilitarian memory diversion. Indeed, as your capacity to recall and recall recollections moves forward, you alter the trouble level to guarantee that things remain interesting.',
      hasList: false,
    },
    {
      title: 'Telephonic call',
      image: "/app9.avif",
      content: 'Now you’ll be able to use one of the best VoIP administrations on your iPhone. There’s no need to be stressed about your arrangement since you’ll interface to Telphin from your iPhone to save up to 90% on universal calls between Israel and the United States. No more calling cards—and no more unsavory shocks on your month-to-month phone charge with Telphin.',
      hasList: false,
    },
    
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingSection}>
        <div className={styles.backgroundImage}></div>
        <h1 className={styles.heading}>THE MOBILE CAST</h1>
      </div>

      <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
  <div key={index} className={`${styles.card} ${index % 2 === 0 ? styles.leftImage : styles.rightImage}`}>
    <div className={styles.content}>
      <h2 className={styles.title}>{card.title}</h2>
      {card.hasList ? (
        <ul className={styles.list}>
          {card.listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <>
          {Array.isArray(card.content) ? (
            card.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          ) : (
            <p>{card.content}</p>
          )}
        </>
      )}
    </div>
    <img src={card.image} alt={`Image for ${card.title}`} className={styles.image} />
  </div>
))}

      </div>

      <div className={styles.contactSection}>
        <div className={styles.overlay}></div>{" "}
        {/* Add an overlay for background image */}
        <div className={styles.contact_content}>
          
          <p className={styles.Text}>
          Drop us a line! We are here to answer your questions 24/7
          </p>
          <h1 className={styles.bigHeading}>NEED A CONSULTATION?</h1>
          <button onClick={togglePopup} className={styles.button}>TALK TO AN EXPERT</button>
          <Popup show={showPopup} handleClose={togglePopup} />
        </div>
      </div>

    </div>
  );
};

export default ApplicationDevelopment;
