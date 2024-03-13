import styles from "./contactus.module.css";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function ContactForm() {
  return (
    <div className={styles.landing_page}>
      <div className={styles["responsive-container-block"]}>
        <img
          className={styles["bg-img"]}
          id="iq5bf"
          src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg&ga=GA1.1.1327311839.1704198475&semt=ais"
        ></img>
        <div className={styles.container}>
          <div className={styles.left_one}>
            <div className={styles["content-box"]}>
              <p className={`${styles.text_blk} ${styles["section-head"]}`}>
                Contact Us
              </p>
              <p className={`${styles.text_blk} ${styles["section-subhead"]}`}>
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p>
              <div className={styles["details-container"]}>
                <div className={styles.detail}>
                  <i>
                    <IoLocationSharp />
                  </i>{" "}
                  <h4>Our Address :</h4>
                  <p>
                    2nd Floor, Plot Number -12B, Zone-II , MP Nagar, Bhopal
                    (M.P.)
                  </p>
                </div>
                <div className={styles.detail}>
                  <i>
                    <TfiEmail />
                  </i>{" "}
                  <h4>Our Mailbox :</h4>
                  <p>contactus@asktech.io</p>
                </div>
                <div className={styles.detail}>
                  <i>
                    <FaPhoneAlt />
                  </i>{" "}
                  <h4>Our Phone :</h4>
                  <p>Sales & Support Number : +91-9685005583</p>
                </div>
              </div>
              <div className={styles["icons-container"]}>
                <a href="#" className={styles["share-icon"]}>
                  <img
                    className={styles.img}
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                  ></img>
                </a>
                <a href="#" className={styles["share-icon"]}>
                  <img
                    className={styles.img}
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                  ></img>
                </a>
                <a href="#" className={styles["share-icon"]}>
                  <img
                    className={styles.img}
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                  ></img>
                </a>
                <a href="#" className={styles["share-icon"]}>
                  <img
                    className={styles.img}
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right_one} id="i1zj">
            <form className={styles["form-box"]}>
              <div className={styles["container-block"]}>
                <p className={`${styles.text_blk} ${styles["contactus-head"]}`}>
                  <a className={styles.link} href=""></a>
                  Get a quote
                </p>
                <p className={`${styles.text_blk} ${styles["contactus-subhead"]}`}>
                  We will get back to you in 24 hours
                </p>
                <div className={styles["responsive-container-block"]}>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <input
                      className={styles.input}
                      id="ijowk-7"
                      name="FirstName"
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <input
                      className={styles.input}
                      id="indfi-5"
                      name="Last Name"
                      placeholder="Last Name"
                    ></input>
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles.email}`}>
                    <input
                      className={styles.input_2}
                      id="ipmgh-7"
                      name="Email"
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}>
                    <input
                      className={styles.input_2}
                      id="imgis-6"
                      name="PhoneNumber"
                      placeholder="Phone Number"
                    ></input>
                  </div>
                  <div className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}>
                    <textarea
                      aria-placeholder="Type message here"
                      className={styles.textinput}
                      id="i5vyy-7"
                      placeholder="Type message here"
                    ></textarea>
                  </div>
                </div>
                <button className={styles["submit-btn"]}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

