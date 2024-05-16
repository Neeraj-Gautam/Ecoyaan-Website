import React from "react";
import styles from "./navbar.module.css";
import { useNavigate } from "react-router";
function Navbar() {
  const navigate = useNavigate();
  const navigateToAboutUs = () => {
    navigate(`/aboutus`);
  };

  const navigateToHome = () => {
    navigate(`/`);
  };

  return (
    <div className={styles.header}>
      <h1>Ecoyaan</h1>
      <div className={styles.headerNav}>
        <div className={styles.headerHome} onClick={navigateToHome}>Home</div>
        <div className={styles.headerAboutus} onClick={navigateToAboutUs}>About Us</div>
        <div className={styles.headerSellonEcoyaan}>Sell on Ecoyaan</div>
        <div className={styles.headerCareers}>Careers</div>
      </div>
    </div>
  );
}

export default Navbar;
