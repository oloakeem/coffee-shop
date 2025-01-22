import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {/* CLIENT SERVICE Section */}
        <div className={styles["footer-column"]}>
          <p>Join our Email listing and get exlcusive offers.</p>
          <input type="text" />
          <button> Sign up</button>
        </div>

        {/* ABOUT US Section */}
        <div className={styles["footer-column"]}>
          <h4>" THE COMPANY "</h4>
          <ul>
            <li>
              <a href="#company-profile">ABOUT US</a>
            </li>
            <li>
              <a href="#corporate-data">CAREERS</a>
            </li>
            <li>
              <a href="#investor-relations">GET FREE COFFEE!</a>
            </li>
          </ul>
        </div>

        {/* LEGAL Section */}
        <div className={styles["footer-column"]}>
          <h4>" SUPPORT "</h4>
          <ul>
            <li>
              <a href="#legal-notes">FAQ</a>
            </li>
            <li>
              <a href="#terms-conditions">TERMS AND CONDITIONS</a>
            </li>
            <li>
              <a href="#business-conduct">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className={styles.lineBreak}></div>
        <p>&copy; 2025 COFFEESHOP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
