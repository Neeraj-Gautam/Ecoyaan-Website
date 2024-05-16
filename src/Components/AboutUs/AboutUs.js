import React from "react";
import styles from "./AboutUs.module.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import nature from "../../assets/nature.png";
import trust from "../../assets/Trust.png";
import impact from "../../assets/Impact.png";
import authenticity from "../../assets/Authenticity.png";
import funAndEngineering from "../../assets/FunAndEngaging.png";
import founder1 from "../../assets/founder1.png";
import founder2 from "../../assets/founder2.png";

function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className={styles.firstRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.firstParagraph}>About Ecoyaan</h2>

          <p className={styles.secondParagraph}>
            At Ecoyaan, we are more than just a platform. Our goal is to build a
            community of eco-conscious people who share a common vision and
            passion for a more sustainable world.
          </p>

          <p className={styles.secondParagraph}>
            We recognize that sustainability is a journey (as the Sanskrit word
            “yaan” suggests). To keep you motivated on this journey, on our
            platform and our social media pages, you can find:
            <ul>
              <li>
                Tips and tricks to adopt a more eco-friendly and low-waste
                lifestyle
              </li>
              <li>
                Videos, posts, and quizzes on climate change and sustainability
              </li>
              <li>
                Events and pledges that invite you to adopt a more sustainable
                lifestyle
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.rightColumn}>
          <img className={styles.firstRowImage} src={nature} alt="nature" />
        </div>
      </div>

      <div className={styles.secondRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.firstParagraph}>Our Values</h2>
          <div className={styles.value1}>
            <img className={styles.values} src={trust} />
            <div>
              <p className={styles.heading}>Trust</p>
              <p>
                We value the trust of our community. We strive to be transparent
                and honest in everything we do, from the content we share today
                to sourcing our products in the future.
              </p>
            </div>
          </div>
          <div className={styles.value2}>
            <img className={styles.values} src={impact} />
            <div>
              <p className={styles.heading}>Impact</p>
              <p>
                We measure our success by our impact on the planet and our
                community. We aim to empower our sellers and customers to make
                responsible choices that benefit their well-being and the
                well-being of others.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.value3}>
            <img className={styles.values} src={authenticity} />
            <div>
              <p className={styles.heading}>Authenticity</p>
              <p>
                We are genuine in our mission to promote sustainability and
                environmental awareness. An authentic community of eco-conscious
                people can inspire each other on the journey towards
                sustainability.
              </p>
            </div>
          </div>
          <div className={styles.value4}>
            <img className={styles.values} src={funAndEngineering} />
            <div>
              <p className={styles.heading}>Fun & Engaging</p>
              <p>
                Moving towards a sustainable lifestyle and the constant news
                around climate change can be stressful. We aim to inject fun and
                creativity into everything we do, from designing our products to
                providing services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thirdRow}>
       
        <div className={styles.thirdLeftColumn}>
        <h2 className={styles.firstParagraph}>Our Story</h2>
          <img className={styles.founder1} src={founder1} />
          <img className={styles.founder2} src={founder2} />
        </div>
        <div className={styles.thirdRightColumn}>
          <p>
            We started Ecoyaan after watching an episode of “Our Planet II”,
            where we saw the devastating impact of plastic pollution and climate
            change on the albatross birds. That moment ignited our mission.
          </p>
          <p>
            Our research suggests that many Indians understand global warming,
            yet access to sustainable practices and products remains limited. We
            also noticed that there is a lack of support for eco-friendly
            businesses.
          </p>
          <p>
            We created Ecoyaan to connect consumers, businesses, and
            sustainability experts. We want to make it easy and convenient for
            people to access eco-friendly products and services, learn and share
            best practices, and support sustainability initiatives.
          </p>
          <p>
            As founders, we are not perfect, but we are passionate. We believe
            that every small step matters. Join us and be a part of the Ecoyaan
            community — together, we’ll make a difference.
          </p>
          <p>
            Connect with the founders on LinkedIn here:
            <a
              href="https://www.linkedin.com/in/abhishek-rao-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abhishek Rao <i class="fa-brands fa-linkedin"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/sarwanjeetsingh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sarwan Singh <i class="fa-brands fa-linkedin"></i>
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
