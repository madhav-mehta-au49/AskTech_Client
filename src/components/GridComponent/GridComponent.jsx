import styles from './GridComponent.module.css';

const GridComponent = () => {
  return (
    <div className={styles.demo}>
    
    <h2 className={styles.heading}>Asktech&apos;s Digital Marketing Services</h2>
      <p className={styles.paragraph}>Increase profitability while establishing your brand as a leader in your industry.</p>
    <div className={styles.mainCard}>
      <div className={styles.mainCardHeader}></div>
      <div className={styles.mainCardContent}>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>SEO (search engine optimisation)</h3>
          <p className={styles.cardContent}>
          We can help you in improving your organic ranks and search engine visibility through thorough keyword research and ethical SEO techniques. Our digital marketing agency carries out in-depth keyword research, executes on-page and off-page optimization, and monitors your outcomes using Google Search Console. As part of your digital marketing solutions, these techniques enable us to generate high-quality leads, conversions, and traffic.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Franchise SEO</h3>
          <p className={styles.cardContent}>
          Asktech’S franchise SEO services will help you reach more people and improve your brand’s reputation. We create a franchise marketing plan based on your ideal prospects. Our team claims and optimizes your listings, ensures brand consistency, publishes Geo-modified service pages and blog posts, and gets you positive online reviews. As a result, we help you manage and promote your franchisees.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Local SEO</h3>
          <p className={styles.cardContent}>
          Online searches for local businesses lead 88 percent of consumers to call or visit within 24 hours. With Asktech’S internet marketing services, attract more customers and generate more sales. Name, address, and phone number (NAP) consistency, location pages enhancement, and local link building are all offered by our internet marketing company. Additionally, we use social media platforms to reach your audience.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Technical SEO</h3>
          <p className={styles.cardContent}>
          Build a solid online foundation with precise technical SEO and internet marketing services. Our technical SEO professionals examine your HTTPS status codes, audit redirects, remove duplicate content, and conduct crawl error reports on your website. The crawl ability and index-ability of your website are thereby improved. Depending on your needs and objectives, we may also help you migrate your website and add structured data markup to it.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Link Building</h3>
          <p className={styles.cardContent}>
          Gain a consistent flow of visitors from authoritative websites to boost your brand’s credibility. In order to place your page content where influential people will see it, our internet marketing company makes use of sponsored paid adverts, content,  and partnerships. We make use of strategic guest blogging, share data-driven info graphics,  create engaging material from scratch,and increase social media engagement. We develop high-quality back links that increase revenue in this way.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Web Design & Development</h3>
          <p className={styles.cardContent}>
          In order to assist you achieve your business goals and support your digital marketing initiatives,  mobile-friendly, Asktech creates unique and search engine optimized websites. We establish a visual hierarchy to draw attention to the key components of your website and compel site visitors to perform the desired action. Our web design professionals use distinct calls-to-action (CTAs), keep form fields simple, steer clear of carousels and moving sliders, and develop content for your persona.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Custom Website Design</h3>
          <p className={styles.cardContent}>
          With a custom site design that showcases the distinctive value propositions of your company, you can attract the attention of your target audiences. Our digital marketing company has a group of WordPress specialists who have years of expertise building unique websites for particular niche markets. We evaluate the requirements specific to your sector,  offer continuous site maintenance and  create ADA-compliant websites. To give potential customers a favorable first image of your brand, these internet marketing services are offered.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>The Management of Pay Per Click (PPC)</h3>
          <p className={styles.cardContent}>
          A data-driven PPC campaign will help you reach your customers swiftly and precisely. You may relax knowing that your campaign is in the capable hands of our PPC Specialists who are AdWords certified. Our staff develops keyword-specific ad copy, and device targeting techniques, perfects your bidding tactics and keeps track of your ROI for each term. In order to advertise your items and generate large amounts of leads and traffic, we also take advantage of seasonal trends.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Marketing via eCommerce</h3>
          <p className={styles.cardContent}>
          Revenue from the eCommerce sector has grown by 23% YoY. Utilize the many options offered by the eCommerce industry to market your items and provide 24/7 ease for your clients. To increase top-of-funnel website traffic, our internet marketing business offers eCommerce SEO and eCommerce PPC solutions. We increase the number of product reviews you receive, improve the content of your product pages, and tailor your marketing campaigns to the demands of your target market.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Hosting a website</h3>
          <p className={styles.cardContent}>
          To host your brand-new website, you need a reputable, secure firm. You won’t need to worry about it if you choose Asktech. Our digital marketing company offers file management, network monitoring, malware scanning and removal, system backup and restoration, WordPress acceleration,  malware removal, and system backup and restoration. For increased site security, we also provide limitless data transfer and bandwidth, Distributed Denial of Service (DDoS) defense, and a free Secure Sockets Layer (SSL) certificate.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>eCommerce Web Design</h3>
          <p className={styles.cardContent}>
          At Asktech, we are knowledgeable about the subtleties of eCommerce site design. The success of your website when you sell things online is greatly influenced by its design. An optimised checkout design can enhance conversions on eCommerce websites by 35%, according to research from the Bayard Institute. Join forces with our internet marketing company, and allow us show off your benefits over the competition while lowering your cart abandonment rates.
          </p>
        </div>
        <div className={styles.miniCard}>
          <h3 className={styles.cardHeading}>Email Advertising</h3>
          <p className={styles.cardContent}>
          How many emails from companies do you discard each day? Select Asktech, and together, let’s make your email marketing campaigns stand out and benefit your company. We design tailored email newsletters to entice customers to take the necessary action and prevent your communications from ending up in spam boxes. Our staff compiles your subscriber list,  inserts key words into your text, evaluates email campaigns before sending them,and inserts a gap to pique readers’ interest in your emails.
          </p>
        </div>
        {/* Repeat this structure for each mini card */}
      </div>
    </div>
  </div>
  );
};

export default GridComponent;