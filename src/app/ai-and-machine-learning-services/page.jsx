import styles from './ai-and-machine-learning-services.module.css'

const AiAndMachineLearningServices = () => {

    const cards = [
        {
          description: "Process Automation",
          image: "/ai2.jpg"
        },
        {
          description: "The Concept of Business Intelligence (BI)",
          image: "/ai3.jpg"
        },
        {
          description: "Models of Analytical Prediction",
          image: "/ai4.jpg"
        },
        {
          description: "Behaviour Analysis of Consumers",
          image: "/ai5.png"
        },
        {
          description: "A System for Making Recommendations",
          image: "/ai6.jpg"
        },
        {
          description: "Providing Solutions for The Management of Decisions",
          image: "/ai7.jpg"
        },
        {
          description: "Automated Solutions",
          image: "/ai8.png"
        },
        {
          description: "Services Tailored to Your Needs",
          image: "/ai9.png"
        },
      ];

  return (
    <div>
       <div className={styles.about}>
        <div className={styles.content}>
          <img src="/ai1.jpg" alt="placeholder" />
          <div className={styles.text}>
            <h2>AI AND MACHINE LEARNING SERVICES</h2>
            <h3>Asktech: Unlocking the Power of AI and Machine Learning</h3>
            <p>At Asktech, we’re not just riding the wave of AI and Machine Learning (ML) – we’re steering it. We leverage the transformative power of these technologies to build intelligent solutions that solve real-world problems, optimize processes, and unlock new possibilities for our clients.</p>
            <button className={styles.button}>Talk to an Expert</button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
      <h1 className={styles.heading}>Our AI & ML Expertise:</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
              
              <h3> Data Savvy</h3>
              <p> We understand the fuel that drives AI and ML – data. We have   the skills and tools to wrangle, analyze, and extract insights from even the   most complex data sets.</p>
              
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
            
              <h3> Algorithm Aficionados</h3>
              <p>From deep learning to natural language   processing, our team masters a diverse range of AI and ML algorithms to   tailor solutions to your specific needs.</p>
             
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
             
              <h3>Model Architects</h3>
              <p>We don’t just build models, we engineer them for real-   world impact. We prioritize explainability, robustness, and continuous   improvement to ensure your AI solutions deliver sustainable value.</p>
             
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.content}>
             
              <h3>Industry-Focused Solutions</h3>
              <p>We tailor our AI and ML expertise to specific   industries, addressing your unique challenges and opportunities in   healthcare, finance, retail, and beyond.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
  <h1 className={styles.card_2Head}>AI and Machine Learning Services</h1>
  <p className={styles.card_2Content}> To maximize the potential of artificial intelligence, we focus on assessing realistic problems and developing solutions that accelerate the transformation of businesses.</p>
  <div className={styles.card_2Container}>
    {/* Cards for the first row */}
    {cards.slice(0, 4).map((card, index) => (
      <div key={index} className={styles.cards}>
        <div className={styles.image} style={{backgroundImage: `url(${card.image})`}}></div>
        <div className={styles.cardContent}>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
  <div className={styles.card_2Container}>
    {/* Cards for the second row */}
    {cards.slice(4).map((card, index) => (
      <div key={index} className={styles.cards}>
        <div className={styles.image} style={{backgroundImage: `url(${card.image})`}}></div>
        <div className={styles.cardContent}>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
<div className={styles.customContainer}>
          
          <div className={styles.customContent}>
            <div className={styles.customText}>
            <h2 className={styles.customTextHeading}>
            Asktech: AI & ML Solutions Tailored to Your Business DNA
              </h2>
              <p className={styles.customTextCopy}>
              In today’s data-driven world, generic solutions won’t cut it. You need AI and Machine Learning (ML) tailored to your specific business DNA, driving tangible results and propelling you ahead of the curve. This is where Asktech comes in.
            </p>
            <h3 >
            Our Expertise Spectrum:
              </h3>
              <ul className={styles.customList}>
                <li>Predictive Analytics</li>
                <li> Intelligent Automation</li>
                <li>Personalized Experiences</li>
                <li>Enhanced Security</li>
                <li>Data-Driven Optimization</li>
                <li>Agile & Collaborative</li>
                <li>Human Centric Approach</li>
              </ul>
            </div>
            <div className={styles.customMedia}>
              <img
                className={styles.customMediaImage}
                src="/ai10.jpg"
                alt="ADD_ALT_TEXT_HERE"
                loading="lazy"
              />
            </div>
          </div>
        
             </div>
    </div>
  )
}

export default AiAndMachineLearningServices
