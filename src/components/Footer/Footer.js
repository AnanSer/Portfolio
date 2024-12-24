import React from "react";
// import { GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react";
import styles from "./footer.module.css";
import SocialIcons from "../../assets/icons/social-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <p className={styles.footerText}>Web Developer & Designer</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect</h3>
          <SocialIcons />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Anan Serbesa . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
