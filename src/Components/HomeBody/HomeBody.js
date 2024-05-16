import React from "react";
import styles from "./HomeBody.module.css";
import impact from "../../assets/Impact.png";
import ourStory from "../../assets/OurStory.png";

function HomeBody() {
  return (
    <div>
      <div className={styles.firstRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.firstParagraph}>
            Join our community in creating a more sustainable future for
            everyone
          </h2>
          {/* <hr /> */}
          <p className={styles.secondParagraph}>
            At Ecoyaan, we are more than just a platform. Our vision is to build
            an eco-conscious community for people and products.
          </p>
          {/* <hr /> */}
          <p className={styles.secondParagraph}>
            Consider us your partner for all things sustainable. To keep you
            motivated on the journey, we will provide you with engaging
            information about climate change, the latest updates on climate
            policies and lifestyle tips that you can adopt to reduce your impact
            on the environment.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <img className={styles.firstRowImage} src={impact} alt="Impact" />
        </div>
      </div>
      <br />
      <br />
      <div className={styles.secondRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.firstParagraph}>
            Carefully curated Eco-friendly products
          </h2>
          {/* <hr /> */}
          <p className={styles.secondParagraph}>
            We believe that every purchase you make can have a positive impact
            on the planet and the future.
          </p>
          {/* <hr /> */}
          <p className={styles.secondParagraph}>
            Soon, we will be connecting you with eco-friendly and sustainable
            products that are carefully selected based on their environmental
            and social benefits.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <video controls width="500">
            <source
              src="https://ecoyaan.com/images/ProductCuration.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.thirdRow}>
        <div className={styles.leftColumn}>
          <h2 className={styles.firstParagraph}>
            For businesses that care deeply about sustainability
          </h2>

          <p className={styles.secondParagraph}>
            Do you run a business that is committed to sustainability in every
            aspect of your work?
          </p>

          <p className={styles.secondParagraph}>
            Do you want to showcase your products to an incredible audience of
            eco-conscious consumers who care?
          </p>
          <p className={styles.secondParagraph}>
            If yes, then you are the perfect fit for our platform. Our community
            appreciates and supports businesses that are transparent, ethical,
            and innovative in their approach to sustainability. Contact us
            today:
          </p>
          
          <button className={styles.thirdRowButton}>Contact Us</button>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightColumn}>
            <img
              className={styles.thirdRowImage}
              src={ourStory}
              alt="ourStory"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
