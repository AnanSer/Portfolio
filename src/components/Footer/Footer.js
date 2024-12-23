import React from "react";
import { GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Your Name</h3>
          <p className={styles.footerText}>Web Developer & Designer</p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className={styles.footerLink}>
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Connect</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
