import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <a href="#top" className={styles.backToTop}>
          ^ Back to top
        </a>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerSection1}>
          <div className={styles.footerSection}>
            <h5>Company</h5>
            <a href="/about">About Us</a>
            <a href="/sell">Sell on Ecoyaan</a>
            <a href="/careers">Careers</a>
          </div>

          <div className={styles.footerSection}>
            <h5>Links</h5>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>

          <div className={styles.footerSection}>
            <h5>Follow Us</h5>
            <div className={styles.footerSectionIcons}>
              <a
                href="/https://www.instagram.com/ecoyaan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ecoyaan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/Ecoyaan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerSectionRight}>
            <div className={styles.footerSection}>
              <p>
                Subscribe to receive updates on blogs, future launches and more!
              </p>
              <form>
                <input type="email" placeholder="Your Email Address" />
                <p className={styles.privacyPolicy}>
                  By subscribing, you agree to receive notifications.
                </p>
                <a
                  className={styles.privacyPolicy}
                  href="https://ecoyaan.com/privacyPolicy"
                >
                  Privacy Policy
                </a>
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.footerSection2}>
          <div className={styles.footerSection2Left}>
            <h5>Registered Address</h5>
            <p>1-N-12T-781/1</p>
            <p>Sri Krishna Vilasa,</p>
            <p>Urvastores,</p>
            <p>Ashoknagar(MR),</p>
            <p>Mangalore,</p>
            <p>Mangalore,</p>
            <p>Karnataka, India</p>
          </div>

          <div className={styles.footerSection2Right}>
            <h5>Legal Business Name:</h5>
            <p>Kindkarma E-Retail Private Limited</p>
            <p>CIN: U47912KA2023PTC182592</p>
            <p>Telephone: +91 9980490777</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          © 2023 - 2024, Ecoyaan <sup>TM</sup>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
