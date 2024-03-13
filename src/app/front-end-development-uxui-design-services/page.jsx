import styles from './front-end-development-uxui-design-services.module.css'

const FrontendDevelopment = () => {
  return (
    <div>
         <div className={styles.about}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>UX&UI DESIGN SERVICES, FRONT END DEVELOPMENT</h2>
            <p>
            DEVELOP COMPETITIVE ADVANTAGES
            </p>
            <p>USING A USER-FRIENDLY UI AND A DATA-DRIVEN UX</p>
            <p>Our team of experts utilizes their skills and expertise to produce interfaces that are elegant, functional, and user-friendly. In order to deliver high levels of user acceptance and engagement, it is the responsibility of the user to determine what the purpose of the specific web or mobile application is.</p>
            <button className={styles.button}>Talk to an Expert</button>
          </div>
          <img src="/ux1.jpg" alt="placeholder" />
        </div>
      </div>
      <div className={styles.customContainer}>
          {/* Second section */}
          <div className={styles.customContent}>
            <div className={styles.customText}>
              <h2 className={styles.customTextHeading}>
              Needs and Factoring Purpose
              </h2>
              <p className={styles.customTextCopy}>
              For a product to fulfill its purpose, front-end development strategy and user experience must include business purpose, branding, and customer needs.
            </p>
              <p className={styles.customTextCopy}>
              AskTech team is a team of expert front end and UI developers who are dedicated to bringing beautiful web experiences to life using a proven methodology and cutting-edge technology base to build customized cross-browser, cross-platform websites and applications. Our front-end, UX, and UI teams view a page as a collection of assets, and they pay close attention to detail and write code in a modular manner. In order to ensure that the assets are utilized effectively across the entire site, the team continually examines how each asset is going to be utilized on the page. We have optimized our UX methodology to provide a well-balanced combination of control, visibility, and flexibility. Obtaining long-term relationships with our clients’ customers and other stakeholders is our goal. Increasing conversion rates, providing comprehensive navigation, and predicting client behavior.
            </p>
            </div>
            <div className={styles.customMedia}>
              <img
                className={styles.customMediaImage}
                src="/ux2.jpg"
                alt="ADD_ALT_TEXT_HERE"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.customContent}>
            <div className={styles.customMedia}>
              <img
                className={styles.customMediaImage}
                src="/ux3.png"
                alt="ADD_ALT_TEXT_HERE"
                loading="lazy"
              />
            </div>
            <div className={styles.customText}>
              <h2 className={styles.customTextHeading}>
              Services in front-end development include:
              </h2>
                 <ul className={styles.customList}>
                <li>
                Design and development of the front-end   
                </li>
                <li>Fast prototyping</li>
                <li>Services for front-end assessment and optimization</li>
                <li>Migration of the front-end</li>
                <li>A front-end quality assurance service</li>
                <li>Providing maintenance and support</li>
              </ul>
            </div>
          </div>
          <div className={styles.customContent}>
            <div className={styles.customText}>
              <h2 className={styles.customTextHeading}>
              Design services for UX/UI:
              </h2>
              <ul className={styles.customList}>
                
                <li>Audit and analysis of UX/UI</li>
                <li>Wireframing for user interfaces</li>
                <li>Prototypes with clickable buttons</li>
                <li>Design and mapping of the user journey</li>
                <li>The cross-device user experience </li>
                <li>UX/UI Design Services for Mobile Devices</li>
                <li>Responsive design across devices</li>
              </ul>
            </div>
            <div className={styles.customMedia}>
              <img
                className={styles.customMediaImage}
                src="/ux4.jpg"
                alt="ADD_ALT_TEXT_HERE"
                loading="lazy"
              />
            </div>
          </div>         
        </div>
        <div className={styles.container}>
      <h1 className={styles.sectionHeading}>UI and Front-end Development Process</h1>
      <div className={styles.cards}>
      
        <div className={styles.card}>
          <h2>A Glass-like Card</h2>
          <p className={styles.cardContent}>As a first step, we analyze<strong> the business goals of the client</strong> and the target audience. also common targets and goals to consider is User Experience (UX) Goals and Code Quality and Maintainability</p>
          
        </div>
        <div className={styles.card}>
          <h2>Scenarios of Behavier</h2>
          <p className={styles.cardContent}>Studying how users will interact with <strong>a website or web application in great detail,</strong> we document scenarios of user behaviour</p>
        </div>
        <div className={styles.card}>
          <h2>The Testing Process</h2>
          <p className={styles.cardContent}>Usability testing is integrated into <strong>each stage of development to prevent errors </strong>that can slow down front-end development.</p>
          
        </div>
      </div>
    </div>
        <div className={styles.customContent}>
            <div className={styles.customText}>
              <h2 className={styles.customTextHeading}>
              Development of Clickable Prototypes
              </h2>
              <p className={styles.customTextCopy}>
              AskTech is the only company that offers “Clickable Prototypes” – a sampling of foreseen screens with transitions without any underlying technical implementation. We have found that when clients see the user flow, interactions, and how pages are transformed, they are much more likely to understand and provide constructive feedback. An alternative approach would be to use dry verbal descriptions or even wireframes embedded within Word documents to assess the solution’s UX flow and usability.
            </p>
              <p className={styles.customTextCopy}>
              The prototype also provides a proof of concept that the chosen technology stack is capable of meeting the business and technical objectives. In addition, it is also useful for accompanying the proposed solution as a demonstration environment in order to familiarize various internal and/or external stakeholders with the solution and solicit feedback from them.
            </p>
            </div>
            <div className={styles.customMedia}>
              <img
                className={styles.customMediaImage}
                src="/ux8.png"
                alt="ADD_ALT_TEXT_HERE"
                loading="lazy"
              />
            </div>
          </div>

        
    </div>  
  )
}

export default FrontendDevelopment
