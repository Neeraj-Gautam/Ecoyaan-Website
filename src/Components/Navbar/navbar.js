import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.header}>
      <h1>Ecoyaan</h1>
      <div className={styles.headerNav}>
        <div className={styles.headerHome}>Home</div>
        <div className={styles.headerAboutus}>About Us</div>
        <div className={styles.headerSellonEcoyaan}>Sell on Ecoyaan</div>
        <div className={styles.headerCareers}>Careers</div>
      </div>
    </div>
  );
}

export default Navbar;
